import {useAtomValue} from 'jotai';
import {MotiAnimatedBox, Text} from '../../../../components/atom';
import {authErrMsgAtom} from '../../state';
import {fonts} from '../../../../themes/fonts';

const AuthError = () => {
  const errorMsg = useAtomValue(authErrMsgAtom);

  if (!errorMsg) {
    return <></>;
  }

  return (
    <MotiAnimatedBox
      mt="sm"
      mx="md"
      from={{translateX: [4, -4, 0]}}
      transition={{type: 'timing', duration: 50}}>
      <Text fontFamily={fonts.RobotoMedium} color="$red">
        {errorMsg}
      </Text>
    </MotiAnimatedBox>
  );
};

export default AuthError;
