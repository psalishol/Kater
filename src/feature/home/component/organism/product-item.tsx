import {
  Box,
  Image,
  Ionicons,
  Pressable,
  Text,
  Touchable,
} from '../../../../components/atom';
import {fonts} from '../../../../themes/fonts';
import {MessageStoreButton} from '../molecules';

const ProductItem: React.FunctionComponent = () => {
  const storename = 'Kivy store';
  const storeAddress =
    '24 Adebamgbe adekoya street oke ago ijebu igbo ogun state';
  const quantity = 24;
  const productDisplayUrl =
    'https://www.themarketfoodshop.com/wp-content/uploads/2018/11/buy-Kings-vegetable-oil-online.jpg';
  const productName = '24 Kilogram oil, Goya';

  const productID = '';

  const price = 1000;

  return (
    <Box mx="sm">
      <Box flexDirection="row" alignItems="center">
        <Box
          borderWidth={1}
          style={{borderColor: 'rgba(0,0,0,0.1)'}}
          borderRadius="sm"
          p="sm"
          mr="md">
          <Image
            borderRadius="xs"
            bg="$red"
            height={50}
            width={50}
            resizeMode="contain"
            source={{uri: productDisplayUrl}}
          />
        </Box>

        <Box flex={1}>
          <Text fontSize={18} fontFamily={fonts.RobotoMedium}>
            {productName}
          </Text>
          <Text mt="xs" opacity={0.5}>
            {storename}
          </Text>
        </Box>

        <Box>
          <Text fontFamily={fonts.RobotoMedium} fontSize={18} ml="auto">
          N{price.toLocaleString()}
          </Text>
          <Box mt="md" flexDirection="row" alignItems="center">
            <Touchable
              p="xxs"
              borderRadius="xs"
              style={{backgroundColor: 'rgba(0,0,0,0.08)'}}>
              <Ionicons name="remove-outline" color={'$black'} />
            </Touchable>
            <Box>
              <Text fontFamily={fonts.RobotoMedium} px="md" fontSize={16}>
                0
              </Text>
            </Box>

            <Touchable
              p="xxs"
              borderRadius="xs"
              style={{backgroundColor: 'rgba(0,0,0,0.08)'}}>
              <Ionicons name="add-outline" color={'$black'} />
            </Touchable>
          </Box>
        </Box>
      </Box>

      <Box mt="sm" mb="md" height={0.5} bg="$black" opacity={0.1} />
    </Box>
  );
};

export default ProductItem;
