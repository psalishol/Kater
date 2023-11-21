import {useAtom} from 'jotai';
import {Box} from '../../../../components/atom';
import {signupEmailQueryAtom} from '../../state';
import AuthInput from './auth-input';

const SignupEmailInput = () => {
  const [query, setQuery] = useAtom(signupEmailQueryAtom);

  return (
    <Box mt="xl">
      <AuthInput placeHolder="Email" onChangeText={setQuery} value={query} />
    </Box>
  );
};

export default SignupEmailInput;
