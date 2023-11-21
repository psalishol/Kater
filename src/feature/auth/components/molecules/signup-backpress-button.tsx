import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {AntDesign, Pressable} from '../../../../components/atom';

const SignupBackPressButton = () => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Pressable mt="md" alignSelf="baseline" p="sm" onPress={handlePress}>
      <AntDesign name="arrowleft" color={'$black'} />
    </Pressable>
  );
};

export default SignupBackPressButton;
