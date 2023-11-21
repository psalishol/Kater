import React, {memo, useCallback, useEffect, useState} from 'react';
import {Portal} from '@gorhom/portal';
import {ResponsiveColorPropType} from '../../themes/theme';
import {Keyboard} from 'react-native';
import {Pressable} from '../atom';
import Overlay from './overlay';
// import {BackHandler} from 'react-native';

interface Props {
  lift: boolean;
  renderView?: () => JSX.Element;
  onOverlayPress?: () => void;
  bg?: ResponsiveColorPropType;
  opacity?: number;
  animate?: boolean;
  useOverlay?: boolean;
  onHardwareBackPressed?: () => void;
  zIndex?: number;
  useSecondOverlay?: boolean;
  onPressSecondOverlay?: () => void;
  close?: boolean;
}

const LiftView: React.FunctionComponent<Props> = props => {
  const {
    renderView,
    onOverlayPress,
    bg = '$overlayColor',
    opacity = 0.5,
    animate = true,
    lift,
    useOverlay = true,
    // onHardwareBackPressed,
    zIndex,
    useSecondOverlay,
    onPressSecondOverlay,
    close: destroy,
  } = props;

  const [close, setClose] = useState<boolean>(false);

  useEffect(() => {
    if (destroy) {
      setClose(false);
    } else {
      setClose(true);
    }
  }, [destroy]);

  const handleOverlayPressed = useCallback(() => {
    Keyboard.dismiss();
    setClose(true);
    onOverlayPress && onOverlayPress();
  }, [onOverlayPress]);

  return (
    <Portal>
      {lift && (
        <>
          {useOverlay && (
            <Overlay
              close={close}
              zIndex={zIndex}
              animate={animate}
              onPress={handleOverlayPressed}
              opacity={opacity}
              color={bg}
            />
          )}
          {useSecondOverlay && (
            <Pressable
              // bg={bg as any} // Still the same type, but fix later
              zIndex={zIndex}
              opacity={opacity}
              onPress={onPressSecondOverlay}
              position={'absolute'}
              top={0}
              bottom={0}
              left={0}
              right={0}
            />
          )}
          {renderView && renderView()}
        </>
      )}
    </Portal>
  );
};

export default memo<Props>(LiftView);
