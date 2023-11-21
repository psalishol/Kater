import {Text, Touchable} from '../../../../components/atom';
import {screenWidth} from '../../../../constant';
import {fonts} from '../../../../themes/fonts';

const MessageStoreButton: React.FunctionComponent = () => {
  return (
    <Touchable
      bg="$green"
      zIndex={2}
      borderRadius="sm"
      width={screenWidth * 0.35}
      justifyContent="center"
      alignItems="center"
      height={30}
      //   backgroundColor=''
      style={{backgroundColor: 'rgba(0,200,0,1)'}}>
      <Text
        fontSize={14}
        // style={{backgroundColor: 'green'}}
        fontFamily={fonts.RobotoMedium}
        color="$white">
        Message store
      </Text>
    </Touchable>
  );
};

export default MessageStoreButton;
