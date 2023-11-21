import {useAtom} from 'jotai';
import {Box} from '../../../../components/atom';
import {signupUsernameQueryAtom} from '../../state';
import AuthInput from './auth-input';

const SignupNameInput = () => {
  const [query, setQuery] = useAtom(signupUsernameQueryAtom);

  return (
    <Box mt="xl">
      <AuthInput
        placeHolder="Full name"
        onChangeText={setQuery}
        value={query}
      />
    </Box>
  );
};

export default SignupNameInput;
