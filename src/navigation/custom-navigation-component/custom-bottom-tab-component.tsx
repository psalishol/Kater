/* eslint-disable react-native/no-inline-styles */
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {memo, useCallback} from 'react';
import {size} from '../../helper';
import {
  Box,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  Pressable,
  Text,
} from '../../components/atom';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {NavigationHelpers, ParamListBase} from '@react-navigation/native';

import {Platform} from 'react-native';

import {ResponsiveColorPropType} from '../../themes/theme';

const CustomBottomNavigationBar: React.FC<BottomTabBarProps> = props => {
  const {navigation, state: navState} = props;

  return (
    <Box
      style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}
      bg={'$white'}
      elevation={10}
      shadowColor={'$white'}
      shadowRadius={10}
      shadowOffset={{width: 0, height: 0}}
      shadowOpacity={0.5}
      flexDirection={'row'}
      height={size(90)}
      justifyContent="space-around"
      //   px={'md'}
      alignItems={'center'}
      paddingHorizontal={'xs'}
      bottom={size(30)}
      right={'5%'}
      borderRadius={'md'}
      left={'5%'}
      position={'absolute'}>
      {navState.routes.map(({key, name}, i) => {
        const isFocused = navState.index === i;
        return (
          <BottomTabNavigationItem
            key={i}
            focused={isFocused}
            navigation={navigation}
            routeKey={key}
            routeName={name}
          />
        );
      })}
    </Box>
  );
};

export default CustomBottomNavigationBar;

interface Props {
  focused?: boolean;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  routeKey: string;
  routeName: string;
}

const BottomTabNavigationItem: React.FC<Props> = ({
  focused,
  navigation,
  routeKey,
  routeName,
}) => {
  const handlePress = useCallback(() => {
    const event = navigation.emit({
      type: 'tabPress',
      target: routeKey,
      canPreventDefault: true,
    });
    if (!focused && !event.defaultPrevented) navigation.navigate(routeName);
    console.log(focused, navigation, routeKey, routeName);
  }, [focused, navigation, routeKey, routeName]);

  const color: ResponsiveColorPropType = focused ? '$green' : '$black';

  return (
    <>
      <Pressable
        alignItems={'center'}
        justifyContent={'center'}
        height={size(90)}
        width={60}
        borderTopWidth={focused ? size(2) : undefined}
        borderTopColor={focused ? '$green' : undefined}
        mb={Platform.OS === 'android' ? 'xxs' : 'lg'}
        ml={'md'}
        mr={'md'}
        onPress={handlePress}>
        {routeName === 'Home' && (
          <Box mt={'md'} justifyContent={'center'} alignItems={'center'}>
            <Feather name="image" color={color} />
            <Text color={color} fontSize={size(12)} mt={'sm'}>
              Home
            </Text>
          </Box>
        )}
        {routeName === 'Messages' && (
          <Box mt={'md'} justifyContent={'center'} alignItems={'center'}>
            <MaterialCommunityIcons name="message-text-outline" color={color} />
            <Text color={color} fontSize={size(12)} mt={'sm'}>
              Messages
            </Text>
          </Box>
        )}
        {routeName === 'Profile' && (
          <Box mt={'md'} justifyContent={'center'} alignItems={'center'}>
            <Ionicons name="person-circle-outline" color={color} />
            <Text color={color} fontSize={size(12)} mt={'sm'}>
              Profile
            </Text>
          </Box>
        )}
      </Pressable>
    </>
  );
};
