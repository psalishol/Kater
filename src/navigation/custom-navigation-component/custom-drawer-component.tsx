import React from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import {Box} from '../../components/atom';

const CustomDrawerContent: React.FC<
  DrawerContentComponentProps
> = _drawerProps => {
  return (
    <Box style={style.container} flexDirection={'row'} flex={1} bg={'$primary'}>
      {/* Drawer content */}
    </Box>
  );
};
export default CustomDrawerContent;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
