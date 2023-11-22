import React, {useCallback, useState} from 'react';

import {Text, Pressable, Box} from '../atom';
import {size} from '../../helper';
import {FlatButtonProps} from './type';
import {ActivityIndicator} from 'react-native-paper';
import {fonts} from '../../themes/fonts';

export default function FlatButton(Props: FlatButtonProps) {
  const [opacity, setOpacity] = useState<number>(0.9);
  const {label, loading, renderIcon, bg, color, onPress, renderLeft, ...rest} =
    Props;

  const handleHoverIn = useCallback(() => {
    setOpacity(0.95);
  }, []);

  const handleHoverOut = useCallback(() => {
    setOpacity(1);
  }, []);

  return (
    <Pressable
      onPress={loading ? undefined : onPress}
      flexDirection={'row'}
      opacity={opacity}
      onPressIn={handleHoverIn}
      onPressOut={handleHoverOut}
      activeOpacity={0.9}
      height={size(50)} // Change height;
      borderRadius="sm"
      bg={bg}
      justifyContent="center"
      alignItems="center"
      {...rest}>
      {!loading && (
        <Text fontFamily={fonts.RobotoMedium} fontSize={size(16)} color={color}>
          {label}
        </Text>
      )}
      {loading && <ActivityIndicator color="white" />}

      {!renderLeft && !loading && (
        <Box ml={'sm'}>{renderIcon && renderIcon()}</Box>
      )}
    </Pressable>
  );
}
