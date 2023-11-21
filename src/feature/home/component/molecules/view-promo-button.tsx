import {Text, Touchable} from '../../../../components/atom';
import {screenWidth} from '../../../../constant';
import {fonts} from '../../../../themes/fonts';

const ViewPromoButton: React.FunctionComponent = () => {
  return (
    <Touchable
      bg="$white"
      zIndex={2}
      borderRadius="sm"
      width={screenWidth * 0.35}
      justifyContent="center"
      alignItems="center"
      height={30}
      style={{borderWidth: 1.5, borderColor: 'rgba(0,0,0,0.1)'}}>
      <Text
        fontSize={14}
        style={{color: 'rgba(0,200,0,1)'}}
        fontFamily={fonts.RobotoMedium}
        color="$green">
        View promo
      </Text>
    </Touchable>
  );
};

export default ViewPromoButton;
