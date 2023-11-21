import {
  backgroundColor,
  backgroundColorShorthand,
  border,
  composeRestyleFunctions,
  layout,
  opacity,
  position,
  spacing,
  spacingShorthand,
  useRestyle,
} from '@shopify/restyle';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Theme} from '../../../themes/theme';
import {TouchableProps, TouchableRestyleProps} from './type';

const restyle = composeRestyleFunctions<Theme, TouchableRestyleProps>([
  backgroundColor,
  backgroundColorShorthand,
  spacingShorthand,
  spacing,
  layout,
  opacity,
  border,
  position,
]);

const Touchable = (Props: TouchableProps) => {
  const {...rest} = Props;
  const props = useRestyle(restyle, rest as any);
  return <TouchableOpacity {...props} />;
};

export default Touchable;
