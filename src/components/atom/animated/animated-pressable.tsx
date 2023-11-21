import Animated from 'react-native-reanimated';
import {Pressable as NativePressable} from 'react-native';

import {createBox} from '@shopify/restyle';
import {Theme} from '../../../themes/theme';

const AnimatedWrappedPressable =
  Animated.createAnimatedComponent(NativePressable);

type AnimatedWrappedPressableProps = React.ComponentProps<
  typeof AnimatedWrappedPressable
>;

// Restyle Wrapped
const AnimatedPressable = createBox<Theme, AnimatedWrappedPressableProps>(
  AnimatedWrappedPressable,
);

export type AnimatedPressableProps = React.ComponentProps<
  typeof AnimatedPressable
>;

export default AnimatedPressable;
