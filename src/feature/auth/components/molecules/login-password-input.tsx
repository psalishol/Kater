import {useAtom} from 'jotai';
import {loginPasswordQueryAtom} from '../../state';
import AuthInput from './auth-input';
import {Box} from '../../../../components/atom';

const LoginPasswordInput = () => {
  const [query, setQuery] = useAtom(loginPasswordQueryAtom);

  return (
    <Box mt="xl">
      <AuthInput
        password
        placeHolder="Password"
        onChangeText={setQuery}
        value={query}
      />
    </Box>
  );
};

export default LoginPasswordInput;
