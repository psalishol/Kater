import {useNavigation} from '@react-navigation/native';
import {AntDesign} from '../../../../components/atom';
import {FlatButton} from '../../../../components/molecules';
import {RootStackNavigationProp} from '../../../../navigation/types';
import {useCallback} from 'react';

const SignupButton: React.FunctionComponent = () => {
  const navigation = useNavigation<RootStackNavigationProp<'SignUp'>>();

  const handlePress = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <FlatButton
      onPress={handlePress}
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
