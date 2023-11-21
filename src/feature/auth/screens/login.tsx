import {Box, Text} from '../../../components/atom';
import React from 'react';
import {useAppMode} from '../../light-dark-mode';

const Login: React.FunctionComponent = () => {
  const {state, isLight} = useAppMode();

  console.log('state', state, isLight);
  return (
    <Box bg="$primary" flex={1} alignItems="center" justifyContent="center">
      <Text color="$foreground">Login screen</Text>
    </Box>
  );
};

export default Login;
