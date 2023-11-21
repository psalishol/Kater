import React from 'react';

import {AppModeProvider, useAppMode} from './src/feature/light-dark-mode';
import {ThemeProvider} from '@shopify/restyle';
import {lightTheme, theme} from './src/themes/theme';
import {NavigationContainer} from '@react-navigation/native';
import {Navigatioon} from './src/navigation';
import {PortalProvider} from '@gorhom/portal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

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
        <GestureHandlerRootView style={{flex: 1}}>
          <PortalProvider>
            <Navigatioon />
          </PortalProvider>
        </GestureHandlerRootView>
      </NavigationContainer>
    </ThemeProvider>
  );
};
