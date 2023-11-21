

import React, {memo, useMemo} from 'react';
import {screenHeight} from '../../constant';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar} from 'react-native';
import {Box} from '../atom';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode;
}

const GradientBackground: React.FunctionComponent<Props> = ({children}) => {
  const {top} = useSafeAreaInsets();


  const color = 'rgba(30,10,0,1)'

  const gradient = useMemo(
    () => [
     color,
      'white',
      'white',
      'white',
      'white',
      'white',
    ],
    [],
  );

  return (
    <Box flex={1}>
      <StatusBar
        backgroundColor={color}
        barStyle={'dark-content'}
      />
      <LinearGradient
        style={{height: screenHeight, paddingTop: top}}
        colors={gradient}>
        {children}
      </LinearGradient>
    </Box>
  );
};

export default memo<Props>(GradientBackground);
