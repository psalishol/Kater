import {useAtomValue} from 'jotai';
import {
  AntDesign,
  Box,
  MaterialCommunityIcons,
  Text,
} from '../../../../components/atom';
import {selectedMenuAtom} from '../../state';
import ProductItem from './product-item';
import {size} from '../../../../helper';

const FollowedStoreNewProducts: React.FunctionComponent = () => {
  const storeNewProducts = [1, 2, 3, 4, 5, 6, 7];
  const selectedTab = useAtomValue(selectedMenuAtom);

  if (selectedTab !== 'Products') {
    return <></>;
  }

  return (
    <Box>
      <Text mb="sm" mx="sm" mt="lg" opacity={0.6} color="$black">
        New product from the store you follow
      </Text>
      {/* {storeNewProducts.map((e, i) => {
        return <ProductItem />;
      })} */}

      <Box opacity={0.4} flex={1} alignItems="center" justifyContent="center">
        <Box style={{marginTop: 120}} />
        <AntDesign name="exclamationcircleo" color={'$black'} />
        <Text ml="sm" mt="md">
          You are currently not following any store
        </Text>
      </Box>

      <Box height={size(130)} />
    </Box>
  );
};

export default FollowedStoreNewProducts;
