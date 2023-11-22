import {useAtomValue} from 'jotai';
import {FlatButton} from '../../../../components/molecules';
import {useSignup} from '../../hooks';
import {authenticatingAtom} from '../../state';

const SignUserUpButton: React.FunctionComponent = () => {
  const {handlePress} = useSignup();

  const authenticating = useAtomValue(authenticatingAtom);

  return (
    <FlatButton
      onPress={authenticating ? undefined : handlePress}
      loading={authenticating}
      mt="2xl"
      color="$white"
      label="Signup"
      bg={'$deepGreen'}
      mx="md"
    />
  );
};

export default SignUserUpButton;
