import {useAtom, useAtomValue} from 'jotai';
import {
  AntDesign,
  Box,
  Feather,
  Image,
  MaterialCommunityIcons,
  Octicons,
  Pressable,
  Text,
} from '../../../components/atom';
import {
  GradientBackground,
  ScreenBackground,
  ScreenHeader,
} from '../../../components/organism';
import {size} from '../../../helper';
import {fonts} from '../../../themes/fonts';
import {accountsAtom, userAtom, userCurrentAccountAtom} from '../../../state';
import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../navigation/types';
import {StyleSheet} from 'react-native';

const ProfileScreen: React.FunctionComponent = () => {
  const color = 'rgba(0,210,0,1)';

  const currentUserName = useAtomValue(userAtom)?.name;

  const account = useAtomValue(userCurrentAccountAtom);

  const merchantAccount =
    useAtomValue(userCurrentAccountAtom)?.type != 'CUSTOMER';

  return (
    <GradientBackground>
      <ScreenHeader name="" bg={'transparent'} />
      <Box>
        <Box
          bg="$white"
          height={100}
          width={100}
          borderWidth={1.5}
          style={{
            borderRadius: 100,
            borderColor: 'rgba(0,0,0,0.06)',
            marginTop: size(50),
          }}
          alignSelf="center"
          justifyContent="center"
          alignItems="center"
          mt="xl">
          <Text fontFamily={fonts.RobotoMedium} color="$black" fontSize={35}>
            {' '}
            {currentUserName?.at(0)}
          </Text>
          <Image
            style={{...StyleSheet.absoluteFill, borderRadius: 100}}
            source={{uri: account?.store_cover_img ?? ''}}
          />
        </Box>
        <Text
          fontSize={16}
          textAlign="center"
          mt="sm"
          fontFamily={fonts.RobotoRegular}>
          {merchantAccount ? account?.store_name : currentUserName}
        </Text>

        <Box style={{marginTop: 50}} mx="sm">
          <DeliveryInformation />
          <FavouriteStores />
          <OrdersButton />
          <CustomerSupport />
          <SwitchToMerchatStoreButton />
          <DeleteStore />
        </Box>

        <Text textAlign="center" opacity={0.5} style={{marginTop: size(50)}}>
          Kater v1.0.0
        </Text>
      </Box>
    </GradientBackground>
  );
};

export default ProfileScreen;

const DeliveryInformation: React.FunctionComponent = () => {
  const merchantAccount =
    useAtomValue(userCurrentAccountAtom)?.type != 'CUSTOMER';
  return (
    <Box mb="sm">
      <Box flexDirection="row" alignItems="center" mx="md" height={45}>
        <AntDesign name="edit" color={'$black'} />
        <Text fontSize={16} ml="md">
          {merchantAccount ? 'Edit store information' : 'Delivery information'}
        </Text>
      </Box>
      <Box height={0.5} bg="$black" opacity={0.1} mx="md" />
    </Box>
  );
};

const CustomerSupport: React.FunctionComponent = () => {
  return (
    <Box mb="sm">
      <Box flexDirection="row" alignItems="center" mx="md" height={45}>
        <AntDesign name="customerservice" color={'$black'} />
        <Text fontSize={16} ml="md">
          Customer support
        </Text>
      </Box>
      <Box height={0.5} bg="$black" opacity={0.1} mx="md" />
    </Box>
  );
};

const FavouriteStores: React.FunctionComponent = () => {
  const merchantAccount =
    useAtomValue(userCurrentAccountAtom)?.type != 'CUSTOMER';

  if (merchantAccount) {
    return <></>;
  }

  return (
    <Box mb="sm">
      <Box flexDirection="row" alignItems="center" mx="md" height={45}>
        <MaterialCommunityIcons name="clover" color={'$black'} />
        <Text fontSize={16} ml="md">
          Favourite stores
        </Text>
      </Box>
      <Box height={0.5} bg="$black" opacity={0.1} mx="md" />
    </Box>
  );
};
const DeleteStore: React.FunctionComponent = () => {
  const merchantAccount =
    useAtomValue(userCurrentAccountAtom)?.type != 'CUSTOMER';

  if (!merchantAccount) {
    return <></>;
  }

  return (
    <Box mt="sm">
      <Box flexDirection="row" alignItems="center" mx="md" height={45}>
        <AntDesign name="delete" color={'$red'} />
        <Text color="$red" fontSize={16} ml="md">
          Delete Store
        </Text>
      </Box>
      <Box height={0.5} bg="$black" opacity={0.1} mx="md" />
    </Box>
  );
};

const OrdersButton: React.FunctionComponent = () => {
  const merchantAccount =
    useAtomValue(userCurrentAccountAtom)?.type != 'CUSTOMER';

  if (merchantAccount) {
    return <></>;
  }

  return (
    <Box mb="sm">
      <Box flexDirection="row" alignItems="center" mx="md" height={45}>
        <Feather name="package" color={'$black'} />
        <Text fontSize={16} ml="md">
          My orders
        </Text>
      </Box>
      <Box height={0.5} bg="$black" opacity={0.1} mx="md" />
    </Box>
  );
};

const SwitchToMerchatStoreButton: React.FunctionComponent = () => {
  const [currentAccount, setCurrentAccount] = useAtom(userCurrentAccountAtom);

  const navigation =
    useNavigation<RootStackNavigationProp<'CreateStoreAccount'>>();

  const accounts = useAtomValue(accountsAtom);

  const onCustomerAccount = currentAccount?.type === 'CUSTOMER';

  const text = onCustomerAccount
    ? 'Switch to merchant store'
    : 'Switch to customer account';

  const handlePress = useCallback(() => {
    if (currentAccount?.type === 'CUSTOMER') {
      const merchantAccount = accounts.find(e => e.type !== 'CUSTOMER');

      if (merchantAccount) {
        setCurrentAccount(merchantAccount);
      } else {
        // navigate to create store account.
        navigation.navigate('CreateStoreAccount');
      }
    } else {
      setCurrentAccount(accounts.find(e => e.type === 'CUSTOMER'));
    }
  }, [navigation, currentAccount]);

  return (
    <Box>
      <Pressable
        onPress={handlePress}
        flexDirection="row"
        alignItems="center"
        mx="md"
        height={45}>
        {!onCustomerAccount && <Octicons name="person" color={'$black'} />}
        {onCustomerAccount && (
          <MaterialCommunityIcons name="storefront-outline" color={'$black'} />
        )}
        <Text fontSize={16} ml="md">
          {text}
        </Text>
      </Pressable>
      <Box height={0.5} bg="$black" opacity={0.1} mx="md" />
    </Box>
  );
};
