import {useAtomValue} from 'jotai';
import {ScreenHeader} from '../../../components/organism';
import ScreenBackground from '../../../components/organism/screen-background';
import {userCurrentAccountAtom} from '../../../state';
import {AntDesign, Box, Text} from '../../../components/atom';

const CartScreen: React.FunctionComponent = () => {
  const color = 'rgba(0,210,0,1)';

  const merchantAccount =
    useAtomValue(userCurrentAccountAtom)?.type != 'CUSTOMER';

  return (
    <ScreenBackground statusbarColor={color}>
      <ScreenHeader
        name={merchantAccount ? 'Store Orders' : 'Cart'}
        bg={color}
      />

      <Box opacity={0.4} flex={1} justifyContent="center" alignItems="center">
        <AntDesign name="exclamationcircleo" color="$black" />
        {merchantAccount && (
          <Text mt="sm">You currently do not have any order</Text>
        )}
        {!merchantAccount && (
          <Text mt="sm">You havent added any product to your cart</Text>
        )}
      </Box>
    </ScreenBackground>
  );
};

export default CartScreen;
