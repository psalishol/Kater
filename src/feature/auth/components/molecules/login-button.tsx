import {useAtomValue} from 'jotai';
import {FlatButton} from '../../../../components/molecules';
import {authenticatingAtom} from '../../state';
import {useLogin} from '../../hooks';

const LoginButton: React.FunctionComponent = () => {
  const {handlePress} = useLogin();

  const authenticating = useAtomValue(authenticatingAtom);

  return (
    <FlatButton
      onPress={authenticating ? undefined : handlePress}
      loading={authenticating}
      mt="2xl"
      color="$white"
      label="Login"
      bg={'$deepGreen'}
      mx="md"
    />
  );
};

export default LoginButton;
