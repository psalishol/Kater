import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {AntDesign, Pressable} from '../../../../components/atom';
import {useSetAtom} from 'jotai';
import {authErrMsgAtom} from '../../state';

const SignupBackPressButton = () => {
  const navigation = useNavigation();

  const setErrMsg = useSetAtom(authErrMsgAtom);

  const handlePress = useCallback(() => {
    setErrMsg('');
    navigation.goBack();
  }, [navigation]);

  return (
    <Pressable mt="md" alignSelf="baseline" p="sm" onPress={handlePress}>
      <AntDesign name="arrowleft" color={'$black'} />
    </Pressable>
  );
};

export default SignupBackPressButton;
