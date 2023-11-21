import {
  AntDesign,
  Box,
  Feather,
  MaterialCommunityIcons,
  Text,
} from '../../../components/atom';
import {
  GradientBackground,
  ScreenBackground,
  ScreenHeader,
} from '../../../components/organism';
import {size} from '../../../helper';
import {fonts} from '../../../themes/fonts';

const ProfileScreen: React.FunctionComponent = () => {
  const color = 'rgba(0,210,0,1)';

  const currentUserName = 'Psalishol samuel';

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
            {currentUserName.at(0)}
          </Text>
        </Box>
        <Text
          fontSize={16}
          textAlign="center"
          mt="sm"
          fontFamily={fonts.RobotoRegular}>
          {currentUserName}
        </Text>

        <Box style={{marginTop: 50}} mx="sm">
          <DeliveryInformation />
          <FavouriteStores />
          <OrdersButton />
          <CustomerSupport />
          <SwitchToMerchatStoreButton />
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
  return (
    <Box mb="sm">
      <Box flexDirection="row" alignItems="center" mx="md" height={45}>
        <AntDesign name="edit" color={'$black'} />
        <Text fontSize={16} ml="md">
          Delivery information
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

const OrdersButton: React.FunctionComponent = () => {
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
  return (
    <Box>
      <Box flexDirection="row" alignItems="center" mx="md" height={45}>
        <MaterialCommunityIcons name="storefront-outline" color={'$black'} />
        <Text fontSize={16} ml="md">
          Switch to merchant store
        </Text>
      </Box>
      <Box height={0.5} bg="$black" opacity={0.1} mx="md" />
    </Box>
  );
};
