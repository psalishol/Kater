import {useNavigation} from '@react-navigation/native';
import {ScreenBackground} from '../../../components/organism';
import {
  AntDesign,
  Box,
  Image,
  Ionicons,
  Pressable,
  Text,
  Touchable,
} from '../../../components/atom';
import {fonts} from '../../../themes/fonts';
import {AuthInput} from '../../auth/components/molecules';
import {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import {
  storeAddressAtom,
  storeCoverImageQueryAtom,
  storeDescriptionAtom,
  storeImageQueryAtom,
  storeNameAtom,
} from '../state';
import {StyleSheet} from 'react-native';
import storage from '@react-native-firebase/storage';
import {accountsAtom, userAtom, userCurrentAccountAtom} from '../../../state';
import {Account, AccountType, saveToDb} from '../../../db';
import {
  currentLocationAtom,
  deviceLatLngAtom,
  useDestructuredGetLocation,
} from '../../location';
import {getLocation as getGeolocation} from '../../location/util';
import {ActivityIndicator} from 'react-native-paper';
import {LocalStorageService} from '../../../lib';

const CreateStoreAccount = () => {
  const navigation = useNavigation();

  return (
    <ScreenBackground color={'$white'}>
      <Pressable
        onPress={() => navigation.goBack()}
        justifyContent="center"
        alignItems="center"
        top={5}
        left={0}
        height={40}
        width={40}
        position="absolute">
        <AntDesign name="arrowleft" color={'$black'} />
      </Pressable>

      <CreateStoreButton />

      <Box
        justifyContent="center"
        height={50}
        flexDirection="row"
        alignItems="center">
        <Ionicons name="storefront-outline" color={'$black'} />
        <Text
          ml="sm"
          color="$black"
          fontFamily={fonts.RobotoMedium}
          fontSize={16}
          textAlign="center">
          Create store
        </Text>
      </Box>
      <Box bg="$black" height={0.5} opacity={0.2} />
      <Text opacity={0.7} fontSize={14} mx="md" mt="md">
        Please complete all fields thoroughly, as they are all mandatory. You
        can always make changes later. {'\n\n'}Please note that your store is
        assumed to be located within your current vicinity. If you are not
        currently in the store's area, please ensure you are there before
        proceeding with the creation process.{' '}
      </Text>
      <StoreCoverImageSelector />
      <StoreDisplayPicture />
      <StoreNameInput />
      <StoreFullAddressInput />
    </ScreenBackground>
  );
};

export default CreateStoreAccount;

const CreateStoreButton = () => {
  const user = useAtomValue(userAtom);
  const [accounts, setAccounts] = useAtom(accountsAtom);
  const setCurrentAccount = useSetAtom(userCurrentAccountAtom);

  const [loading, setLoading] = useState<boolean>(false);

  const [coverImgUri, setCoverImgUri] = useAtom(storeCoverImageQueryAtom);
  const [displayPictureUri, setDisplayPictureUri] =
    useAtom(storeImageQueryAtom);
  const [name, setName] = useAtom(storeNameAtom);
  const [address, setAddress] = useAtom(storeAddressAtom);

  const [currentLocation, setCurrentLocation] = useAtom(currentLocationAtom);

  const {getLocation} = useDestructuredGetLocation();

  const valid = !!coverImgUri && displayPictureUri && !!name && !!address;

  const navigation = useNavigation();

  const reset = () => {
    setCoverImgUri('');
    setDisplayPictureUri('');
    setName('');
    setAddress('');
  };

  const handleCreateStore = async () => {
    try {
      setLoading(true);
      let location = currentLocation;

      if (!location) {
        getLocation().then(loc => {
          getGeolocation(loc?.latitude, loc?.longitude).then(_location => {
            location = _location;
          });
        });
      }

      // upload to storage
      const displayPictureRef = storage().ref(`images/${user?.email}-dp.png`);
      const coverImgRef = storage().ref(`images/${user?.email}-cover.png`);

      await displayPictureRef.putFile(displayPictureUri ?? '');
      await coverImgRef.putFile(coverImgUri ?? '');

      const coverUrl = await displayPictureRef.getDownloadURL();
      const dpUrl = await coverImgRef.getDownloadURL();

      const payload: Account = {
        userID: user?.email ?? '',
        store_name: name,
        type: AccountType.PRODUCT_STORE,
        store_cover_img: coverUrl,
        address: address,
        city: location?.city,
        country: location?.country,
        store_img: dpUrl,
        state: location?.state,
        createdAt: new Date().toISOString(),
      };

      await saveToDb('Accounts', payload);

      setCurrentLocation(location);

      setCurrentAccount(payload);

      setAccounts(prev => [...(prev ?? []), payload]);

      const localStorage = new LocalStorageService();

      navigation.goBack();

      localStorage.writeToStorage('@accounts', [...accounts, payload]);
      setLoading(false);

      reset();
    } catch (error) {
      setLoading(false);

      console.log('error creating store', error);
      // reset();
    }
  };

  if (loading) {
    // return <ActivityIndicator color="rgba(0,210,0,1)" />;
    return (
      <Box
        justifyContent="center"
        alignItems="center"
        top={5}
        right={5}
        height={40}
        width={40}
        position="absolute">
        <ActivityIndicator color="rgba(0,210,0,1)" />
      </Box>
    );
  }

  return (
    <Pressable
      onPress={!valid ? undefined : handleCreateStore}
      // onPress={() => navigation.goBack()}
      justifyContent="center"
      alignItems="center"
      top={5}
      right={5}
      height={40}
      width={40}
      position="absolute">
      <Text
        color={valid ? '$deepGreen' : '$black'}
        fontFamily={fonts.RobotoMedium}
        fontSize={14}>
        Create
      </Text>
    </Pressable>
  );
};

const StoreCoverImageSelector = () => {
  const [imgUri, setImgUri] = useAtom(storeCoverImageQueryAtom);

  const handlePickImage = async () => {
    console.log('pressed');
    try {
      const result = await launchImageLibrary({
        selectionLimit: 1,
        mediaType: 'photo',
      });

      const imgUri = result.assets?.map(e => e.uri);

      if (imgUri && imgUri.length > 0) {
        setImgUri(imgUri[0]);
      }
    } catch (error) {}
  };

  return (
    <Pressable
      onPress={handlePickImage}
      m="sm"
      borderRadius="sm"
      style={{backgroundColor: 'rgba(0,0,0,0.1)'}}
      justifyContent="center"
      alignItems="center"
      height={150}>
      <Text opacity={0.6}>Store cover image</Text>
      <Image
        style={StyleSheet.absoluteFill}
        borderRadius="sm"
        source={{uri: imgUri}}
      />
    </Pressable>
  );
};

const StoreDisplayPicture = () => {
  const [imgUri, setImgUri] = useAtom(storeImageQueryAtom);

  const handlePickImage = async () => {
    console.log('pressed');
    try {
      const result = await launchImageLibrary({
        selectionLimit: 1,
        mediaType: 'photo',
      });

      const imgUri = result.assets?.map(e => e.uri);

      if (imgUri && imgUri.length > 0) {
        setImgUri(imgUri[0]);
      }
    } catch (error) {}
  };

  return (
    <Pressable
      onPress={handlePickImage}
      height={50}
      width={50}
      mx="sm"
      borderRadius="sm"
      style={{
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 1,
      }}
      justifyContent="center"
      alignItems="center">
      <Text opacity={0.3}>Display picture</Text>
      <Image
        style={StyleSheet.absoluteFill}
        borderRadius="sm"
        source={{uri: imgUri}}
      />
    </Pressable>
  );
};

const StoreNameInput = () => {
  const [query, setQuery] = useAtom(storeNameAtom);

  return (
    <Box mt="lg">
      <AuthInput
        placeHolder="Store name"
        value={query}
        onChangeText={setQuery}
      />
    </Box>
  );
};

const StoreFullAddressInput = () => {
  const [query, setQuery] = useAtom(storeAddressAtom);
  return (
    <Box mt="lg">
      <AuthInput
        placeHolder="Full Address"
        value={query}
        onChangeText={setQuery}
      />
    </Box>
  );
};
