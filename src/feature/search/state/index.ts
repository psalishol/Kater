import {atom} from 'jotai';

export type SearchFilterSelector = 'Item' | 'Service' | 'Food';

export const selectors: SearchFilterSelector[] = ['Item', 'Service', 'Food'];

export const selectedSearchFilterAtom = atom<SearchFilterSelector>('Item');
