import {useAtom} from 'jotai';
import {FlatButton} from '../../../../components/molecules';
import {
  signupUsernameQueryAtom,
  signupEmailQueryAtom,
  signupPasswordQueryAtom,
} from '../../state';

const SignUserUpButton: React.FunctionComponent = () => {
  const [name, setName] = useAtom(signupUsernameQueryAtom);
  const [email, setEmail] = useAtom(signupEmailQueryAtom);
  const [password, setPassword] = useAtom(signupPasswordQueryAtom);

  // handles user login
  const handleSignIn = async () => {
    try {
      // Reset sign in form
      setName('');
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
      label="Signup"
      bg={'$deepGreen'}
      mx="md"
    />
  );
};

export default SignUserUpButton;
