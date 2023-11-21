import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import {AntDesign, Entypo, Text, Touchable} from '../../../../components/atom';
import {fonts} from '../../../../themes/fonts';
import {useCallback, useEffect} from 'react';
import {
  currentLocationAtom,
  deviceLatLngAtom,
  openChangeLocation,
} from '../../../location';
import {getLocation} from '../../../location/util';
import {size} from '../../../../helper';

const LocationChangerButton: React.FunctionComponent = () => {
  const setOpenChangeLocationSheet = useSetAtom(openChangeLocation);

  const handlePress = useCallback(() => {
    setOpenChangeLocationSheet(true);
  }, [setOpenChangeLocationSheet]);

  const [currentLocation, setCurrentLocation] = useAtom(currentLocationAtom);

  const latlng = useAtomValue(deviceLatLngAtom);

  useEffect(() => {
    // Check if the latlng is set and get the readable current location
    if (latlng && !currentLocation) {
      getLocation(latlng?.lat, latlng?.lng).then(location => {
        setCurrentLocation(location);
      });
    }
  }, [currentLocation, latlng]);

  if (!currentLocation) {
    return <></>;
  }

  return (
    <Touchable
      position="absolute"
      px="xs"
      mx="xs"
      py="xxs"
      borderRadius="xs"
      top={size(15)}
      onPress={handlePress}
      style={{backgroundColor: 'rgba(0,0,0,0.03)'}}
      alignSelf="baseline"
      mt="md"
      flexDirection="row"
      alignItems="center">
      <Entypo size={18} name="location-pin" color={'$black'} />
      <Text ml="xs" fontFamily={fonts.InterMedium} color="$black">
        {currentLocation.city}, {currentLocation.state}
      </Text>
      <AntDesign name="down" size={13} marginLeft="xs" color={'$black'} />
    </Touchable>
  );
};

export default LocationChangerButton;
