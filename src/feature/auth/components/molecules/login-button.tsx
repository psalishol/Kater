import {FlatButton} from '../../../../components/molecules';

const LoginButton: React.FunctionComponent = () => {
  return (
    <FlatButton
      mt="2xl"
      color="$white"
      label="Login"
      bg={'$deepGreen'}
      mx="md"
    />
  );
};

export default LoginButton;
