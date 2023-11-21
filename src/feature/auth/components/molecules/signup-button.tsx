import {AntDesign} from '../../../../components/atom';
import {FlatButton} from '../../../../components/molecules';

const SignupButton: React.FunctionComponent = () => {
  return (
    <FlatButton
      mt="lg"
      color="$black"
      borderWidth={1}
      style={{borderColor: 'rgba(0,0,0,0.08)'}}
      label="Sign up"
      renderIcon={() => {
        return <AntDesign name="arrowright" color={'$black'} />;
      }}
      mx="md"
    />
  );
};

export default SignupButton;
