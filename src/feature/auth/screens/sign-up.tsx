import {useNavigation} from '@react-navigation/native';
import {AntDesign, Box, Pressable, Text} from '../../../components/atom';
import React, {useCallback} from 'react';

const SignUp: React.FunctionComponent = () => {
  return (
    <Box bg="$primary" flex={1} alignItems="center" justifyContent="center">
      <Text color="$foreground">Signup screen</Text>
    </Box>
  );
};

export default SignUp;

const SignupBackPress = () => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Pressable onPress={handlePress}>
      <AntDesign name="arrowleft" color={'$black'} />
    </Pressable>
  );
};
