import {atom} from 'jotai';

// TabMenu defines the type for the home tab menu
export type TabMenu = 'Promos' | 'Products';

// Atom storing the state of the user current city.
export const currentCityAtom = atom<string | undefined>(undefined);

// Atom storing the current selected menu tab.
export const selectedMenuAtom = atom<TabMenu>('Promos');

export const menus: TabMenu[] = ['Promos', 'Products'];
