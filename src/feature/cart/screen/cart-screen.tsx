import {ScreenHeader} from '../../../components/organism';
import ScreenBackground from '../../../components/organism/screen-background';

const CartScreen: React.FunctionComponent = () => {
  const color = 'rgba(0,210,0,1)';
  return (
    <ScreenBackground statusbarColor={color}>
      <ScreenHeader name="Cart" bg={color} />
    </ScreenBackground>
  );
};

export default CartScreen;
