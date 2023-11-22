import {ColorProps} from '@shopify/restyle';
import {ResponsiveColorPropType, Theme} from '../../themes/theme';

import {TouchableOpacityProps as BaseButtonProps} from '../atom/bare/touchable-opacity';

export type FlatButtonProps = React.ComponentProps<BaseButtonProps> &
  ColorProps<Theme> & {
    label: string;
    isValid?: boolean;
    loading?: boolean;
    renderIcon?: () => JSX.Element;
    bg?: ResponsiveColorPropType;
    renderLeft?: boolean;
  };
