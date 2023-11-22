import {useNavigation} from '@react-navigation/native';
import {AntDesign} from '../../../../components/atom';
import {FlatButton} from '../../../../components/molecules';
import {RootStackNavigationProp} from '../../../../navigation/types';
import {useCallback} from 'react';
import {useSetAtom} from 'jotai';
import {authErrMsgAtom} from '../../state';

const SignupButton: React.FunctionComponent = () => {
  const navigation = useNavigation<RootStackNavigationProp<'SignUp'>>();
  const setErrMsg = useSetAtom(authErrMsgAtom);

  const handlePress = useCallback(() => {
    setErrMsg('');
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
