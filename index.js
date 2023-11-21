// This is included for early initialisation of gesture handler.
// Gesture handler uses native API, Hence it needs to initialize before the app finishes loading to start
// recieving touch events as soon as possible
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
