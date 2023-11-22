import {atom} from 'jotai';

// Login credential
export const loginEmailQueryAtom = atom<string>('');
export const loginPasswordQueryAtom = atom<string>('');

// signup credential
export const signupEmailQueryAtom = atom<string>('');
export const signupPasswordQueryAtom = atom<string>('');
export const signupUsernameQueryAtom = atom<string>('');

export const authenticatingAtom = atom<boolean>(false);

export const authErrMsgAtom = atom<string>('');
