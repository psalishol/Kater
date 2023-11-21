import * as React from 'react';
import {
  spacing,
  layout,
  typography,
  backgroundColor,
  backgroundColorShorthand,
  composeRestyleFunctions,
  spacingShorthand,
  useRestyle,
  color,
} from '@shopify/restyle';
import {TextInput as RNTextInput} from 'react-native';
import {Theme} from '../../../themes/theme';

import {useDecodeRestyleColor} from '../../../hooks';
import {forwardRef} from 'react';
import {TextInputProps, TextInputRestyleProps} from './type';

const restyleFunction = composeRestyleFunctions<Theme, TextInputRestyleProps>([
  spacing,
  backgroundColor,
  backgroundColorShorthand,
  layout,
  typography,
  spacingShorthand,
  color,
]);

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({placeHolderColor, fieldSelectionColor, ...rest}, ref) => {
    const props = useRestyle(restyleFunction, rest as any);

    const {color: placeholder} = useDecodeRestyleColor(placeHolderColor);
    const {color: selection} = useDecodeRestyleColor(fieldSelectionColor);

    return (
      <RNTextInput
        {...props}
        selectionColor={selection}
        placeholderTextColor={placeholder}
        ref={ref}
      />
    );
  },
);

export default TextInput;
