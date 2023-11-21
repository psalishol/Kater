import React from 'react';

import {AppModeProvider, useAppMode} from './src/feature/light-dark-mode';
import {ThemeProvider} from '@shopify/restyle';
import {lightTheme, theme} from './src/themes/theme';
import {NavigationContainer} from '@react-navigation/native';
import {Navigatioon} from './src/navigation';

function App(): JSX.Element {
  return (
    <AppModeProvider>
      <Entry />
    </AppModeProvider>
  );
}

export default App;

const Entry: React.FunctionComponent = () => {
  const {isLight} = useAppMode();

  const appTheme = isLight ? lightTheme : theme;

  return (
    <ThemeProvider theme={appTheme}>
      <NavigationContainer>
        <Navigatioon />
      </NavigationContainer>
    </ThemeProvider>
  );
};
