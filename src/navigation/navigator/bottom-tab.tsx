import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabStackParamList} from '../types';
import {Home} from '../../feature/home';
import {useDecodeRestyleColor} from '../../hooks';
import {AntDesign} from '../../components/atom';
// import {CustomBottomNavigationBar} from '../custom-navigation-component';

const Tab = createBottomTabNavigator<BottomTabStackParamList>();

const BottomTabNavigation = () => {
  const {color} = useDecodeRestyleColor('$primary');

  return (
    <Tab.Navigator
      // tabBar={props => <CustomBottomNavigationBar {...props} />} // Uncomment this if you will like to use custom drawer component
      screenOptions={{
        headerShown: false,
        lazy: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => {
            return <AntDesign name="home" color={'$foreground'} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
