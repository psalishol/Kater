import {useAtomValue} from 'jotai';
import {
  AntDesign,
  Box,
  Image,
  Ionicons,
  Pressable,
  Text,
} from '../../../components/atom';
import {ScreenBackground} from '../../../components/organism';
import {userCurrentAccountAtom} from '../../../state';
import {fonts} from '../../../themes/fonts';

const MyStoreScreen: React.FunctionComponent = () => {
  const currentAccount = useAtomValue(userCurrentAccountAtom);
  return (
    <ScreenBackground>
      <Box>
        <Image
          //   bg="$red"
          height={150}
          resizeMode="stretch"
          source={{uri: currentAccount?.store_cover_img ?? ''}}
        />

        <Image
          mx="md"
          borderRadius="sm"
          style={{
            marginTop: -50,

            borderColor: 'rgba(0,0,0,0.1)',
            borderWidth: 1.5,
          }}
          height={70}
          width={70}
          resizeMode="stretch"
          source={{uri: currentAccount?.store_cover_img ?? ''}}
        />
      </Box>

      <Box flexDirection="row" mt="sm" mx="sm">
        <Pressable
          flexDirection="row"
          alignItems="center"
          height={35}
          borderRadius="xs"
          px="md"
          alignSelf="baseline"
          style={{backgroundColor: 'rgba(0,210,0,1)'}}
          justifyContent="center">
          <Ionicons name="add" color={'$white'} />
          <Text
            fontFamily={fonts.RobotoMedium}
            fontSize={14}
            ml="xs"
            color="$white">
            Create Product
          </Text>
        </Pressable>
        <Pressable
          ml="sm"
          flexDirection="row"
          alignItems="center"
          height={35}
          borderRadius="xs"
          px="md"
          alignSelf="baseline"
          style={{backgroundColor: 'rgba(0,0,0,0.1)'}}
          justifyContent="center">
          <Ionicons name="create-outline" color={'$black'} />
          <Text
            fontFamily={fonts.RobotoMedium}
            fontSize={14}
            ml="xs"
            color="$black">
            Create Promo
          </Text>
        </Pressable>
        <Pressable
          //   mb="sm"
          ml="sm"
          flexDirection="row"
          alignItems="center"
          height={35}
          borderRadius="xs"
          px="md"
          alignSelf="baseline"
          style={{backgroundColor: 'rgba(0,0,0,0.1)'}}
          justifyContent="center">
          <AntDesign name="gift" color={'$black'} />
          <Text
            fontFamily={fonts.RobotoMedium}
            fontSize={14}
            ml="xs"
            color="$black">
            View all promos
          </Text>
        </Pressable>
      </Box>

      <Text mx="sm" fontSize={16} fontFamily={fonts.RobotoMedium} mt="md">
        Store Products
      </Text>

      <Box opacity={0.4} flex={0.6} justifyContent="center" alignItems="center">
        <AntDesign name="exclamationcircleo" color="$black" />

        <Text mt="sm">Your store currently do not have any product.s</Text>
      </Box>
    </ScreenBackground>
  );
};

export default MyStoreScreen;
