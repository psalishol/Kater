import {Box, Text} from '../../../components/atom';
import React from 'react';

const SignUp: React.FunctionComponent = () => {
  return (
    <Box bg="$primary" flex={1} alignItems="center" justifyContent="center">
      <Text color="$foreground">Signup screen</Text>
    </Box>
  );
};

export default SignUp;
