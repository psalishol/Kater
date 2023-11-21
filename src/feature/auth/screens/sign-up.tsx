import {useNavigation} from '@react-navigation/native';
import {AntDesign, Box, Pressable, Text} from '../../../components/atom';
import React, {useCallback} from 'react';
import {GradientBackground} from '../../../components/organism';

const SignUp: React.FunctionComponent = () => {
  return (
    <GradientBackground>
      <SignupBackPress />
    </GradientBackground>
  );
};

export default SignUp;

const SignupBackPress = () => {
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
