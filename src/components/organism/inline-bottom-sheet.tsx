import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import LiftView from '../../components/organism/liftview';
import {default as RNBottomSheet} from '@gorhom/bottom-sheet';
import {Box} from '../atom';

interface Props {
  show: boolean;
  renderView?: () => JSX.Element;
  overlayOpacity?: number;
  snapPoints: Array<string>;
  useHandle?: boolean;
  onOverlayPressed?: () => void;
  closeSheet: () => void;
}

const InlineBottomSheet: React.FunctionComponent<Props> = props => {
  const {show, renderView, snapPoints, useHandle, overlayOpacity, closeSheet} =
    props;

  const [openSheet, setOpenSheet] = useState<boolean>(false);

  const ref = useRef<RNBottomSheet>(null);

  useEffect(() => {
    if (show) {
      setOpenSheet(show);
    }
    show && ref.current?.snapToIndex(0);
    !show && ref.current?.close();
  }, [show]);

  const snapsTo = useMemo(() => ['75%', '100%'], []);

  const handleOverlayPressed = useCallback(() => ref.current?.close(), []);

  const onSheetClose = useCallback(() => {
    setOpenSheet(false);
    closeSheet();
  }, [closeSheet]);

  return (
    <LiftView
      opacity={overlayOpacity}
      lift={openSheet}
      close={show}
      bg={'$overlayColor'}
      onOverlayPress={handleOverlayPressed}
      renderView={() => {
        return (
          <RNBottomSheet
            backgroundStyle={{backgroundColor: 'white'}}
            enablePanDownToClose
            handleComponent={useHandle ? undefined : () => <Box />}
            ref={ref}
            onClose={onSheetClose}
            snapPoints={snapsTo}>
            {renderView && renderView()}
          </RNBottomSheet>
        );
      }}
    />
  );
};

export default memo<Props>(InlineBottomSheet);
