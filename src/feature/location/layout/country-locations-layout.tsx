import {
  Box,
  Entypo,
  Ionicons,
  ScrollView,
  Text,
} from '../../../components/atom';
import {InlineBottomSheet} from '../../../components/organism';
import {useEffect, useState, useCallback} from 'react';
import {
  countryCityStateAtom,
  currentLocationAtom,
  openChangeLocation,
} from '../state';
import {useAtom, useAtomValue} from 'jotai';
import {getCountryCityState} from '../util';
import {fonts} from '../../../themes/fonts';
import {BottomSheetScrollView} from '@gorhom/bottom-sheet';

const CountryLocation: React.FunctionComponent = () => {
  const [open, setOpen] = useAtom(openChangeLocation);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <InlineBottomSheet
      show={open}
      overlayOpacity={0.8}
      onOverlayPressed={handleClose}
      closeSheet={handleClose}
      renderView={() => <LocationDisplay />}
    />
  );
};

export default CountryLocation;

const LocationDisplay = () => {
  const currentLocation = useAtomValue(currentLocationAtom);

  const [countryCityState, setCountryCityState] = useAtom(countryCityStateAtom);
  const [fetching, setFetching] = useState<boolean>(false);

  useEffect(() => {
    if (currentLocation?.country && !countryCityState) {
      setFetching(true);
      getCountryCityState(currentLocation.country).then(cityState => {
        setCountryCityState(cityState);
        setFetching(false);
      });
    }
  }, [currentLocation?.country, countryCityState]);

  return (
    <Box flex={1} bg="$white" borderTopEndRadius="sm" borderTopStartRadius="sm">
      <Box
        borderTopEndRadius="xs"
        borderTopStartRadius="xs"
        bg="$white"
        height={40}
        justifyContent="center"
        alignItems="center"
        flexDirection="row">
        <Entypo size={18} name="location-pin" color={'$black'} />
        <Text
          fontFamily={fonts.InterSemiBold}
          fontSize={14}
          ml="sm"
          textAlign="center">
          Switch location
        </Text>
      </Box>
      <Box height={0.5} bg="$black" opacity={0.1} />

      <BottomSheetScrollView style={{flex: 1}}>
        {countryCityState?.map((item, i) => {
          return (
            <Box>
              <Box height={45} px="md" flexDirection="row" alignItems="center">
                <Ionicons name="location-outline" color={'$black'} />
                <Text ml="sm" fontFamily={fonts.InterMedium} color="$black">
                  {item.city}, {item.state}
                </Text>
              </Box>
              <Box mt="xxs" height={0.5} bg="$black" opacity={0.1} />
            </Box>
          );
        })}
      </BottomSheetScrollView>
    </Box>
  );
};
