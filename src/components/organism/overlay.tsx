import * as React from 'react';
import {ResponsiveValue} from '@shopify/restyle';
import {Theme} from '../../themes/theme';

import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useEffect} from 'react';
import {GestureResponderEvent, StyleSheet} from 'react-native';

import {useDecodeRestyleColor} from '../../hooks';

import {AnimatedPressable, Pressable} from '../atom';
import {linearEasing} from '../../constant';

interface OverlayProps {
  color: ResponsiveValue<keyof Theme['colors'], Theme>;
  opacity?: number;
  onPress?: (e?: GestureResponderEvent) => void;
  animate?: boolean;
  duration?: number;
  zIndex?: number;
  close?: boolean;
}

const Overlay = (Props: OverlayProps) => {
  const {
    color,
    opacity = 1,
    onPress,
    animate = false,
    duration = 500,
    zIndex,
    close,
  } = Props;
  const {color: bg} = useDecodeRestyleColor(color);

  const progress = useSharedValue(opacity);

  useEffect(() => {
    progress.value = withTiming(close ? 0 : opacity, {
      duration,
      easing: linearEasing,
    });
  }, [close, duration, opacity, progress]);

  const style = useAnimatedStyle(() => {
    return {opacity: progress.value};
  });

  return (
    <AnimatedPressable
      zIndex={zIndex}
      onPress={onPress}
      style={[
        {...styles.overlay, backgroundColor: bg},
        !animate && {opacity},
        animate && style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  overlay: {
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'red',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});

export default React.memo<OverlayProps>(Overlay);
