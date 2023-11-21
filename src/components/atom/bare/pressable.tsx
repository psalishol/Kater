import {Pressable as NativePressable} from 'react-native';
import {
  backgroundColor,
  backgroundColorShorthand,
  border,
  color,
  composeRestyleFunctions,
  layout,
  opacity,
  spacing,
  spacingShorthand,
  useRestyle,
} from '@shopify/restyle';
import {Theme} from '../../../themes/theme';
import React from 'react';

import {useDecodeRestyleColor} from '../../../hooks';
import {PressableRestyleProps, PressableProp} from './type';

const restyle = composeRestyleFunctions<Theme, PressableRestyleProps>([
  color,
  spacing,
  spacingShorthand,
  layout,
  border,
  opacity,
  backgroundColor,
  backgroundColorShorthand,
]);

const Pressable = (Props: PressableProp) => {
  const {android_ripple, borderless, radius, ...rest} = Props;

  const props = useRestyle(restyle, rest as any);

  const {color: ripple_color} = useDecodeRestyleColor(android_ripple);

  return (
    <NativePressable
      {...props}
      android_ripple={{
        color: ripple_color,
        borderless,
        radius,
      }}
    />
  );
};

export default Pressable;
