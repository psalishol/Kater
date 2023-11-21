import {ResponsiveColorPropType} from '../../../themes/theme';
import {
  ColorProps,
  SpacingProps,
  BackgroundColorProps,
  BackgroundColorShorthandProps,
  LayoutProps,
  SpacingShorthandProps,
  TypographyProps,
  BorderProps,
  PositionProps,
  OpacityProps,
} from '@shopify/restyle';

import {
  TextInput as RNTextInput,
  ActivityIndicator as NativeActivityIndicator,
  Pressable as NativePressable,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {Theme} from '../../../themes/theme';
import Box from './box';
import Text from './text';

export type BoxProp = typeof Box;
export type TextProp = typeof Text;
export type ActivityIndicatorProps = typeof ActivityIndicator;
export type SafeAreaViewProp = typeof SafeAreaView;

export type TextInputRestyleProps = ColorProps<Theme> &
  SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  LayoutProps<Theme> &
  SpacingShorthandProps<Theme> &
  TypographyProps<Theme> &
  ColorProps<Theme>;

export type TextInputProps = React.ComponentPropsWithRef<typeof RNTextInput> &
  TextInputRestyleProps & {
    placeHolderColor?: ResponsiveColorPropType;
    fieldSelectionColor?: ResponsiveColorPropType;
  };

export type ActivityIndicatorRestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  ColorProps<Theme>;

export type IndicatorProps = React.ComponentProps<
  typeof NativeActivityIndicator
> &
  ActivityIndicatorRestyleProps;

export type PressableRestyleProps = ColorProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  PositionProps<Theme> &
  OpacityProps<Theme> &
  BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme>;

export type PressableProp = React.ComponentProps<typeof NativePressable> &
  PressableRestyleProps & {
    android_ripple?: ResponsiveColorPropType;
    borderless?: boolean;
    radius?: number;
    useRippleRadius?: boolean;
  };

export type TouchableRestyleProps = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  PositionProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  LayoutProps<Theme> &
  OpacityProps<Theme> &
  BorderProps<Theme>;

export type TouchableProps = React.ComponentProps<typeof TouchableOpacity> &
  TouchableRestyleProps;
