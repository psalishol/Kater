import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerStackParamList} from '../types';
import {Box} from '../../components/atom';

const Drawer = createDrawerNavigator<DrawerStackParamList>();

const DrawerNavigation: React.FunctionComponent = () => {
  return (
    <Drawer.Navigator
      //   drawerContent={props => <CustomDrawerContent {...props} />} // Uncomment if you will like to implement custom drawer
      screenOptions={{
        headerShown: false,
      }}>
      <Box />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
