import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {Box, Text} from '../../components/atom';

const CustomBottomNavigationBar: React.FC<BottomTabBarProps> = props => {
  const {navigation, state: navState} = props;

  return (
    <Box style={style.container} position={'absolute'}>
      {navState.routes.map(({key, name}, i) => {
        const isFocused = navState.index === i;
        return (
          <Box>
            <Text>{name}</Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default CustomBottomNavigationBar;

const style = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
  },
});
