import {useAtom} from 'jotai';
import {Box} from '../../../../components/atom';
import {signupPasswordQueryAtom} from '../../state';
import AuthInput from './auth-input';

const SignupPasswordInput = () => {
  const [query, setQuery] = useAtom(signupPasswordQueryAtom);

  return (
    <Box mt="xl">
      <AuthInput placeHolder="Password" onChangeText={setQuery} value={query} />
    </Box>
  );
};

export default SignupPasswordInput;
