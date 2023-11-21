import {useAtom} from 'jotai';
import {useEffect, useState} from 'react';

import GetLocation from 'react-native-get-location';
import {deviceLatLngAtom} from '../state';

/**useGetDeviceLatLng gets the user device latitude and longitude
 * and set it to state.
 */
const useGetDeviceLatLng = () => {
  const [deviceLatLng, setDeviceLatLng] = useAtom(deviceLatLngAtom);

  useEffect(() => {
    if (!deviceLatLng) {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      })
        .then(location => {
          setDeviceLatLng({lat: location.latitude, lng: location.longitude});
        })
        .catch(error => {
          const {code, message} = error;
          console.warn(code, `unable to get device location: ${message}`);
        });
    }
  }, [deviceLatLng]);
};

export default useGetDeviceLatLng;
