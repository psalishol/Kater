// DeviceLatLng defines the interface for the current user location
// in latitude and longitude. this is used to fetch the actual location of the user

import {atom} from 'jotai';

// in human readable format. like 24 Ayetoro Ilupeju Lagos.
export interface DeviceLatLng {
  lat: number;
  lng: number;
}

// Atom storing the state of device latitude and longitude.
export const deviceLatLngAtom = atom<DeviceLatLng | undefined>(undefined);

interface Location {
  city: string;
  state: string;
  country: string;
  fullAdress: string;
}

// Atom storing the state of the user current city.
export const currentCityAtom = atom<Location | undefined>(undefined);
