import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {DrawerScreenProps} from '@react-navigation/drawer';

export type RootParamList = {
  Login: undefined;
  SignUp: undefined;
  Entry: undefined;

  Search: undefined;
  CreateStoreAccount: undefined;
  Messages: undefined;
};

export type DrawerStackParamList = {};

export type BottomTabStackParamList = {
  Home: undefined;
  Messages: undefined;
  Profile: undefined;
  Cart: undefined;
  Orders: undefined;
};

export type RootStackScreenProps<T extends keyof RootParamList> =
  NativeStackScreenProps<RootParamList, T>;

export type BottomTabStackSceenProps<T extends keyof BottomTabStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabStackParamList, T>,
    RootStackScreenProps<keyof RootParamList>
  >;

export type DrawerTabScreenProps<T extends keyof DrawerStackParamList> =
  DrawerScreenProps<DrawerStackParamList, T>;

export type RootStackNavigationProp<T extends keyof RootParamList> =
  NativeStackNavigationProp<RootParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootStackParamList extends RootParamList {}
  }
}
