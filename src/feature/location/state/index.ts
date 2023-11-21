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

export interface Location {
  city: string;
  state: string;
  country: string;
  fullAdress: string;
}

// Atom storing the state of the user current city.
export const currentLocationAtom = atom<Location | undefined>(undefined);

//holds the current country city and state
export const countryCityStateAtom = atom<string[] | undefined>(undefined);
