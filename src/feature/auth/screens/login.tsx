import {Box, Text} from '../../../components/atom';
import React from 'react';
import {useAppMode} from '../../light-dark-mode';
import {GradientBackground} from '../../../components/organism';
import {fonts} from '../../../themes/fonts';
import {screenHeight} from '../../../constant';
import {
  LoginButton,
  LoginEmailInput,
  LoginPasswordInput,
  SignupButton,
} from '../components/molecules';

const Login: React.FunctionComponent = () => {
  const {state, isLight} = useAppMode();

  console.log('state', state, isLight);
  return (
    <GradientBackground>
      <Box style={{marginTop: screenHeight * 0.2}} />
      <Text fontSize={16} mx="md" fontFamily={fonts.RobotoMedium}>
        Welcome to your neighbourhood marketplace!{' '}
      </Text>
      <Text mx="md" mt="xs" fontSize={14} opacity={0.5}>
        Kater lets you connect with your local businesses, getting what you need
        in no time. Fresh, local, and convenient
      </Text>

      <LoginEmailInput />
      <LoginPasswordInput />

      <LoginButton />
      <SignupButton />
    </GradientBackground>
  );
};

export default Login;
