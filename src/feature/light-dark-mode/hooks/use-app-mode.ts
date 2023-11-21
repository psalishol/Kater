import {useCallback, useContext} from 'react';
import {useColorScheme} from 'react-native';
import {AppModeContext} from '../provider';
import {ThemeMode} from '../provider/app-mode-provider';
import {LocalStorageService} from '../../../lib';

/**
 * This hook provides access to the current app mode and allows you to toggle it.
 *
 * The app mode is a setting that controls the overall appearance of the app
 * such as the color palette. It can be set to either `Light` or `Dark`.
 *
 * By default, the app mode is set to `System Default`, which means that it will follow the user's device theme
 * However, users can also manually toggle the app mode using the `toggleTheme` function.
 *
 * This hook can be used in any component that needs to access the current app mode or toggle it. For example, you could use it to set the color of a button or the font size of a text element.
 *
 * Here is an example of how to use the hook:
 * ```javascript
 * const MyComponent = () => {
   const { isLight, toggleTheme } = useAppMode();

   return (
    <Box>
      <Pressable onPress={toggleTheme}>Toggle Theme</Pressable>
      <Text variant='regularSmall'>Is the app in light mode? {isLight ? 'Yes' : 'No'}</Text>
    </Box>
    );
};
 * ```

*/
const useAppMode = () => {
  const {state, dispatch} = useContext(AppModeContext);

  const storage = new LocalStorageService();

  const theme = useColorScheme();

  // Gets if the current mode is light, returns true if light.
  const isLight = (function () {
    if (state === 'System Default') {
      if (theme === 'light') {
        return true;
      }
      return false;
    }
    return state === 'Light';
  })();

  const toggleTheme = useCallback(() => {
    dispatch && dispatch(prev => (prev === 'Light' ? 'Dark' : 'Light'));
    dispatch && setModeToLocal(state === 'Light' ? 'Dark' : 'Light');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, state]);

  const setModeToLocal = async (mode: ThemeMode) => {
    try {
      await storage.writeToStorage('@app-mode', mode);
    } catch (error) {}
  };

  const getModeFromLocal = async (): Promise<ThemeMode | undefined> => {
    try {
      const value = await storage.readFromStorage('@app-mode');
      if (value) {
        return JSON.parse(value);
      }
      return;
    } catch (error) {}
  };

  const setTheme = (mode: ThemeMode) => {
    dispatch && dispatch(mode);
    dispatch && setModeToLocal(mode);
  };

  return {
    isLight,
    state,
    dispatch,
    toggleTheme,
    setModeToLocal,
    getModeFromLocal,
    setTheme,
  };
};

export default useAppMode;
