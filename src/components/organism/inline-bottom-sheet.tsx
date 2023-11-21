/* eslint-disable react/no-unstable-nested-components */
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {default as RNBottomSheet} from '@gorhom/bottom-sheet';
import {ResponsiveColorPropType} from '../../themes/theme';
import Liftview from './liftview';
import {AntDesign, Box, Pressable} from '../atom';
import {size} from '../../helper';

interface Props {
  show: boolean;

  renderView?: () => JSX.Element;

  overlayOpacity?: number;

  useHandle?: boolean;

  onOverlayPressed?: () => void;

  closeSheet: () => void;

  zIndex?: number;

  index?: number;

  useSecondOverlay?: boolean;

  onPressSecondOverlay?: () => void;

  immediatelyClose?: boolean;

  overlayColor?: ResponsiveColorPropType;

  closeColor?: ResponsiveColorPropType;
}

const InlineBottomSheet: React.FunctionComponent<Props> = props => {
  const {
    show,
    renderView,
    useHandle,
    overlayOpacity = 0.1,
    closeSheet,
    zIndex,
    useSecondOverlay,
    onPressSecondOverlay,
    immediatelyClose,
    overlayColor,

    closeColor = '$black',
  } = props;

  const [openSheet, setOpenSheet] = useState<boolean>(false);

  const [animated, setAnimated] = useState<boolean>(false);
  const [close, setClose] = useState<boolean>(false);

  const ref = useRef<RNBottomSheet>(null);

  useEffect(() => {
    if (show) {
      setOpenSheet(show);
      setClose(false);
    }
    show && ref.current?.snapToIndex(0);
    !show && ref.current?.close();
  }, [show]);

  const snapsTo = useMemo(() => ['65%'], []);
  const handleOverlayPressed = useCallback(() => {
    setClose(true);
    ref.current?.close();
  }, []);

  const onSheetClose = useCallback(() => {
    setOpenSheet(false);
    closeSheet();
  }, [closeSheet]);

  useEffect(() => {
    if (immediatelyClose) {
      onSheetClose();
    }
  }, [immediatelyClose, onSheetClose]);

  if (immediatelyClose) {
    return <></>;
  }

  return (
    <Liftview
      useSecondOverlay={true}
      onPressSecondOverlay={() => {}}
      opacity={overlayOpacity}
      lift={openSheet}
      close={show}
      bg={overlayColor ?? '$overlayColor'}
      zIndex={zIndex}
      onOverlayPress={handleOverlayPressed}
      renderView={() => {
        return (
          <>
            {!close && (
              <Pressable
                onPress={handleOverlayPressed}
                p={'xs'}
                // opacity={0.5}
                alignSelf={'center'}
                position={'absolute'}
                top="27%">
                <AntDesign
                  size={size(30)}
                  color={closeColor}
                  name="closecircle"
                />
              </Pressable>
            )}
            <RNBottomSheet
              containerStyle={{zIndex}}
              // backgroundStyle={{zIndex, backgroundColor}}
              style={{zIndex}}
              enablePanDownToClose
              handleComponent={useHandle ? undefined : () => <Box />}
              ref={ref}
              onChange={() => setAnimated(true)}
              onClose={onSheetClose}
              snapPoints={snapsTo}>
              {renderView && renderView()}
            </RNBottomSheet>
          </>
        );
      }}
    />
  );
};

export default memo<Props>(InlineBottomSheet);
