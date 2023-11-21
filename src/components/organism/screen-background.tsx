import React, {memo} from 'react';
import {ResponsiveColorPropType} from '../../themes/theme';
import {Box} from '../atom';
import {SafeAreaView, StatusBar} from 'react-native';
import {useDecodeRestyleColor} from '../../hooks';

interface Props {
  color?: ResponsiveColorPropType;
  children: React.ReactNode;
}

const ScreenBackground: React.FunctionComponent<Props> = Props => {
  const {children, color} = Props;

  const {color: backgroundColor} = useDecodeRestyleColor(color);

  const content = color === '$primary' ? 'light-content' : 'dark-content';

  return (
    <Box style={{backgroundColor}} flex={1}>
      <StatusBar barStyle={content} backgroundColor={backgroundColor} />
      <SafeAreaView
        style={{backgroundColor: backgroundColor ?? 'white', flex: 1}}>
        {children}
      </SafeAreaView>
    </Box>
  );
};

export default memo<Props>(ScreenBackground);
