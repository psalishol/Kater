import {atom} from 'jotai';
import {Account, User} from '../models';

// Defines the user global state.
export const userAtom = atom<User | undefined>(undefined);

// defines the user account.
export const accountsAtom = atom<Account[]>([]);
