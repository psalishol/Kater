/* eslint-disable react-hooks/rules-of-hooks */

import {ResponsiveValue, useResponsiveProp, useTheme} from '@shopify/restyle';
import {Theme} from '../themes/theme';

/**
 * This hook decodes a ReStyle color value to a native React Native color.
 * It takes a ResponsiveValue<keyof Theme['colors'], Theme> as input,
 * and returns an object containing the decoded color.
 *
 * This hook is useful for decoding ReStyle color values in React Native components.
 * For example, you could use it to decode the color of a button or a text element.
 *
 * Usage:
 *
 * ```javascript
 * import { useDecodeRestyleColor } from './hooks';
 *
 * const MyComponent = () => {
 *   const { color } = useDecodeRestyleColor('$primary');
 *
 *   return (
 *     <Box color={color}>My Button</Box>
 *   );
 * };
 * ```
 */

const useDecodeRestyleColor = (
  colorValue: ResponsiveValue<keyof Theme['colors'], Theme> | undefined,
) => {
  const theme = useTheme<Theme>();
  const colorProp = colorValue && useResponsiveProp(colorValue);
  const color = colorProp && theme.colors[colorProp];

  return {color};
};

export default useDecodeRestyleColor;
