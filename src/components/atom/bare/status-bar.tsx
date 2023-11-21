import {useTheme} from '@shopify/restyle';
import * as React from 'react';
import {StatusBar as NativeStatusBar, Platform} from 'react-native';
import {Theme} from '../../../themes/theme';

const StatusBar = () => {
  const theme = useTheme<Theme>();
  const barStyle = theme.statusBar?.barStyle;

  const backgrondColor =
    barStyle === 'dark-content'
      ? Platform.OS === 'ios'
        ? 'transparent'
        : 'white'
      : '#1F2123';

  return (
    <NativeStatusBar
      barStyle={barStyle}
      animated
      backgroundColor={backgrondColor}
    />
  );
};

export default StatusBar;
