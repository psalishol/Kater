import {Box, Entypo, ScrollView, Text} from '../../../components/atom';
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

const CountryLocation: React.FunctionComponent = () => {
  const [open, setOpen] = useAtom(openChangeLocation);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <InlineBottomSheet
      show={open}
      onOverlayPressed={handleClose}
      closeSheet={handleClose}
      renderView={LocationDisplay}
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

  if (fetching) {
    // Return activity indicator
    return <></>;
  }

  return (
    <Box flex={1}>
      <ScrollView>
        {countryCityState?.map((item, i) => {
          return (
            <Box flexDirection="row" alignItems="center">
              <Entypo size={18} name="location-pin" color={'$black'} />
              <Text ml="xs" fontFamily={fonts.InterMedium} color="$black">
                {item}
              </Text>
            </Box>
          );
        })}
      </ScrollView>
    </Box>
  );
};
