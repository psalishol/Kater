import React from 'react';

import {AppModeProvider, useAppMode} from './src/feature/light-dark-mode';
import {ThemeProvider} from '@shopify/restyle';
import {lightTheme, theme} from './src/themes/theme';
import {NavigationContainer} from '@react-navigation/native';
import {Navigatioon} from './src/navigation';
import {PortalProvider} from '@gorhom/portal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Amplify} from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
import {SplashScreen} from './src/feature/auth';
Amplify.configure(amplifyconfig);

// import {DataStore} from 'aws-amplify/datastore';
// import {SQLiteAdapter} from '@aws-amplify/datastore-storage-adapter/SQLiteAdapter';

// DataStore.configure({
//   storageAdapter: SQLiteAdapter,
// });

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
            {/* <SplashScreen /> */}
          </PortalProvider>
        </GestureHandlerRootView>
      </NavigationContainer>
    </ThemeProvider>
  );
};
