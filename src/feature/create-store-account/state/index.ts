import {atom} from 'jotai';

export const storeAddressAtom = atom<string>('');
export const storeNameAtom = atom<string>('');
export const storeDescriptionAtom = atom<string>('');

export const storeImageQueryAtom = atom<string | undefined>(undefined);
export const storeCoverImageQueryAtom = atom<string | undefined>(undefined);
