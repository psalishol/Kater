import {useAtom} from 'jotai';
import {loginEmailQueryAtom} from '../../state';
import AuthInput from './auth-input';
import {Box} from '../../../../components/atom';

const LoginEmailInput = () => {
  const [query, setQuery] = useAtom(loginEmailQueryAtom);

  return (
    <Box mt='xl'>
      <AuthInput placeHolder="Email" onChangeText={setQuery} value={query} />
    </Box>
  );
};

export default LoginEmailInput;
