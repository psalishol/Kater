import * as React from 'react';
import {MotiView} from 'moti';
import {Theme} from '../../../themes/theme'
import {
  BackgroundColorProps,
  BackgroundColorShorthandProps,
  LayoutProps,
  OpacityProps,
  opacity,
  backgroundColor,
  backgroundColorShorthand,
  composeRestyleFunctions,
  useRestyle,
  spacing,
  layout,
  spacingShorthand,
  BorderProps,
  border,
  SpacingProps,
  SpacingShorthandProps,
  PositionProps,
  ShadowProps,
  shadow,
} from '@shopify/restyle';

type MotiBoxRestyleFunctionProps = BackgroundColorShorthandProps<Theme> &
  LayoutProps<Theme> &
  OpacityProps<Theme> &
  BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BorderProps<Theme> &
  PositionProps<Theme> &
  ShadowProps<Theme>;

const restyleFunction = composeRestyleFunctions<
  Theme,
  MotiBoxRestyleFunctionProps
>([
  opacity,
  backgroundColor,
  backgroundColorShorthand,
  spacing,
  spacingShorthand,
  layout,
  border,
  shadow,
]);

interface MotiAnimatedBoxOProp
  extends React.ComponentProps<typeof MotiView>,
    MotiBoxRestyleFunctionProps {
  children?: React.ReactNode;
}

const MotiAnimatedBox = React.forwardRef((Props: MotiAnimatedBoxOProp, ref) => {
  const {children, ...rest} = Props;
  const props = useRestyle(restyleFunction, rest as any);
  return (
    <MotiView ref={ref} {...props}>
      {children}
    </MotiView>
  );
});

export default MotiAnimatedBox;
