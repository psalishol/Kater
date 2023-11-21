/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, useEffect, useState} from 'react';
import {LocalStorageService} from '../../../lib';

export type ThemeMode = 'Light' | 'Dark' | 'System Default'; // add more mode

interface AppModeContextType {
  state: ThemeMode;
  dispatch?: React.Dispatch<React.SetStateAction<ThemeMode>>;
}

const initialValue: AppModeContextType = {
  state: 'Light',
};

export const AppModeContext = createContext<AppModeContextType>(initialValue);

interface Props {
  children: React.ReactNode;
}

const AppModeProvider = ({children}: Props) => {
  const [state, setAppMode] = useState<ThemeMode>('Light');

  const storage = new LocalStorageService();

  useEffect(() => {
    storage.readFromStorage('@app-mode').then(value => {
      if (value) {
        setAppMode(value);
      } else {
        setAppMode('System Default');
      }
    });
  }, []);

  return (
    <AppModeContext.Provider value={{state, dispatch: setAppMode}}>
      {children}
    </AppModeContext.Provider>
  );
};

export default AppModeProvider;
