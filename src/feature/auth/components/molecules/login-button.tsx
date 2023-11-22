import {useAtom, useAtomValue} from 'jotai';
import {FlatButton} from '../../../../components/molecules';
import {loginEmailQueryAtom, loginPasswordQueryAtom} from '../../state';

const LoginButton: React.FunctionComponent = () => {
  const [email, setEmail] = useAtom(loginEmailQueryAtom);
  const [password, setPassword] = useAtom(loginPasswordQueryAtom);

  // handles user login
  const handleSignIn = async () => {
    try {
      // Reset sign in form
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log('error signing in', error);
    }
  };

  return (
    <FlatButton
      onPress={handleSignIn}
      mt="2xl"
      color="$white"
      label="Login"
      bg={'$deepGreen'}
      mx="md"
    />
  );
};

export default LoginButton;
