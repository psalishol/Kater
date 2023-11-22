import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabStackParamList} from '../types';
import {Home} from '../../feature/home';
import {useDecodeRestyleColor} from '../../hooks';
import {AntDesign} from '../../components/atom';
import {CustomBottomNavigationBar} from '../custom-navigation-component';
import {CartScreen} from '../../feature/cart';
import {ProfileScreen} from '../../feature/profile';
import {MessagesScreen} from '../../feature/message';
import {useAtomValue} from 'jotai';
import {userCurrentAccountAtom} from '../../state';

const Tab = createBottomTabNavigator<BottomTabStackParamList>();

const BottomTabNavigation = () => {
  const {color} = useDecodeRestyleColor('$primary');

  const merchantStore =
    useAtomValue(userCurrentAccountAtom)?.type != 'CUSTOMER';

  return (
    <Tab.Navigator
      tabBar={props => <CustomBottomNavigationBar {...props} />} // Uncomment this if you will like to use custom drawer component
      screenOptions={{
        headerShown: false,
        lazy: true,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={CartScreen} />
      {merchantStore && (
        <Tab.Screen name="Messages" component={MessagesScreen} />
      )}
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
