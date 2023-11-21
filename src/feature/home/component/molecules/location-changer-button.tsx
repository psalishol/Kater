import {useAtom, useAtomValue} from 'jotai';
import {Entypo, Text, Touchable} from '../../../../components/atom';
import {fonts} from '../../../../themes/fonts';
import {useCallback, useEffect} from 'react';
import {currentLocationAtom, deviceLatLngAtom} from '../../../location';
import {getLocation} from '../../../location/util';

const LocationChangerButton: React.FunctionComponent = () => {
  const handlePress = useCallback(() => {}, []);

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
      px="xs"
      mx="sm"
      py="xxs"
      borderRadius="xs"
      style={{backgroundColor: 'rgba(0,0,0,0.1)'}}
      alignSelf="baseline"
      mt="md"
      flexDirection="row"
      alignItems="center">
      <Entypo size={18} name="location-pin" color={'$black'} />
      <Text ml="xs" fontFamily={fonts.InterMedium} color="$black">
        {currentLocation.city}, {currentLocation.state}
      </Text>
    </Touchable>
  );
};

export default LocationChangerButton;
