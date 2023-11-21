import {ResponsiveValue, createTheme} from '@shopify/restyle';
import palletes from './pallete';
import {StatusBarStyle} from 'react-native';

export type KeyboardAppearance = 'default' | 'dark' | 'light' | undefined;

const theme = createTheme({
  spacing: {
    '0': 0,
    xxs: 2,
    xs: 5,
    sm: 10,
    md: 15,
    lg: 24,
    xl: 32,
    '2xl': 48,
    auto: 'auto',
  },
  borderRadii: {
    '0': 0,
    xxs: 2,
    xs: 5,
    sm: 10,
    md: 15,
    lg: 24,
    xl: 32,
    '2xl': 48,
  },
  statusBar: {
    barStyle: 'light-content' as StatusBarStyle,
  },
  colors: {
    $primary: palletes.black,
    $foreground: palletes.white,
    $black: palletes.black,
    $white: palletes.white,
    $red: '#ff0000',
    $green: 'rgba(0,244,0,1)',
  },
  keyboard: {
    keyboardAppearance: 'dark' as KeyboardAppearance,
  },
  textVariants: {
    defaults: {
      fontSize: 12,
      color: '$foreground',
    },
  },
});

export type Theme = typeof theme;

const lightTheme: Theme = {
  ...theme,
  keyboard: {
    keyboardAppearance: 'light' as keyof KeyboardAppearance,
  },
  statusBar: {
    barStyle: 'dark-content' as StatusBarStyle,
  },
  colors: {
    ...theme.colors,
    $primary: palletes.white,
    $foreground: palletes.black,
  },
};

export {theme, lightTheme};

export type ResponsiveColorPropType = ResponsiveValue<
  keyof Theme['colors'],
  Theme
>;

export type ResponsiveSpacingPropType = ResponsiveValue<
  keyof Theme['spacing'],
  Theme
>;

export type ResponsiveVariantType = ResponsiveValue<
  keyof Theme['textVariants'],
  Theme
>;
