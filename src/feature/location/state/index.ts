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
  currency: string;
}

// Atom storing the state of the user current city.
export const currentLocationAtom = atom<Location | undefined>(undefined);

//holds the current country city and state
export const countryCityStateAtom = atom<
  {city: string; state: string}[] | undefined
>(undefined);

// state to open change location sheet
export const openChangeLocation = atom<boolean>(false);

// Store filter query string for location in modal input.
export const locationFilterQueryAtom = atom<string>('');

export const cleanLocationRenderAtom = atom<boolean>(true);

export const countryCurrencyAtom = atom<string>('');
