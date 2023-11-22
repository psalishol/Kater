import {useAtom} from 'jotai';
import {useEffect, useState} from 'react';

import GetLocation, {Location} from 'react-native-get-location';
import {deviceLatLngAtom} from '../state';

/**useGetDeviceLatLng gets the user device latitude and longitude
 * and set it to state.
 */
const useGetDeviceLatLng = () => {
  const [deviceLatLng, setDeviceLatLng] = useAtom(deviceLatLngAtom);

  useEffect(() => {
    if (!deviceLatLng) {
    }
  }, [deviceLatLng]);
};

export default useGetDeviceLatLng;

export const useDestructuredGetLocation = () => {
  const getLocation = async (): Promise<Location | undefined> => {
    try {
      const location = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      });

      return location;
    } catch (error) {
      return undefined;
    }
  };

  return {getLocation};
};
