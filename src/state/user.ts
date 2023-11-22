import {atom} from 'jotai';
import {Account, User} from '../db';

// Defines the user global state.
export const userAtom = atom<User | undefined>(undefined);

// Stores the user current account
export const userCurrentAccountAtom = atom<Account | undefined>(undefined);

// defines the user account.
export const accountsAtom = atom<Account[]>([]);
