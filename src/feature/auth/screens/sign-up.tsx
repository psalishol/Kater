import {Box, Text} from '../../../components/atom';
import React from 'react';
import {GradientBackground} from '../../../components/organism';
import {screenHeight} from '../../../constant';
import {fonts} from '../../../themes/fonts';
import {
  SignUserUpButton,
  SignupBackPressButton,
  SignupButton,
  SignupEmailInput,
  SignupNameInput,
  SignupPasswordInput,
} from '../components/molecules';
import {AuthError} from '../components/atom';

const SignUp: React.FunctionComponent = () => {
  return (
    <GradientBackground>
      <SignupBackPressButton />

      <Box style={{marginTop: screenHeight * 0.13}} />
      <Text fontSize={16} mx="md" fontFamily={fonts.RobotoMedium}>
        Lets get you started real quick!!
      </Text>
      <Text mx="md" mt="xs" fontSize={14} opacity={0.5}>
        Kindly fill in the neccessary credential. Please endeavour to put in the
        right detail.
      </Text>

      <SignupNameInput />
      <SignupEmailInput />
      <SignupPasswordInput />

      <AuthError />

      <SignUserUpButton />
    </GradientBackground>
  );
};

export default SignUp;
