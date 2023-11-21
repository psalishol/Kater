import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootParamList} from '../types';
import React from 'react';
import {Login, SignUp} from '../../feature/auth';
import BottomTabNavigation from './bottom-tab';

const Stack = createNativeStackNavigator<RootParamList>();

export const UnAuthenticatedStack: React.FunctionComponent = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export const AuthenticatedStack: React.FunctionComponent = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Entry" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};
