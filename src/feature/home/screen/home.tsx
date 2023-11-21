import {Box, Text} from '../../../components/atom';
import React from 'react';

const Home: React.FunctionComponent = () => {
  return (
    <Box bg="$primary" flex={1} alignItems="center" justifyContent="center">
      <Text mt="sm" color="$foreground">
        Home screen
      </Text>
    </Box>
  );
};

export default Home;
