import {
  AntDesign,
  Box,
  Entypo,
  Pressable,
  ScrollView,
  Text,
  Touchable,
} from '../../../components/atom';
import React, {useCallback} from 'react';
import {GradientBackground} from '../../../components/organism';
import {fonts} from '../../../themes/fonts';
import {currentCityAtom} from '../state';
import {useAtomValue} from 'jotai';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../navigation/types';

const Home: React.FunctionComponent = () => {
  return (
    <GradientBackground>
      <ScrollView>
        <LocationChangerButton />
        <Greeting />
        <SearchBox />
      </ScrollView>
    </GradientBackground>
  );
};

export default Home;

const LocationChangerButton: React.FunctionComponent = () => {
  const handlePress = useCallback(() => {}, []);

  const currentCity = useAtomValue(currentCityAtom);

  return (
    <Touchable
      px="xs"
      mx="sm"
      py="xxs"
      borderRadius="xs"
      style={{backgroundColor: 'rgba(0,0,0,0.1)'}}
      alignSelf="baseline"
      mt="md"
      flexDirection="row"
      alignItems="center">
      <Entypo size={18} name="location-pin" color={'$black'} />
      <Text ml="xs" fontFamily={fonts.InterMedium} color="$black">
        {currentCity}
      </Text>
    </Touchable>
  );
};

const Greeting: React.FunctionComponent = () => {
  const username = 'Psalishol';
  return (
    <Box mx="sm">
      <Text
        fontSize={20}
        fontFamily={fonts.PoppinsMedium}
        mt="lg"
        color="$black">
        Hello {username}
      </Text>

      <Text
        mt="lg"
        fontFamily={fonts.PoppinsSemiBold}
        fontSize={30}
        color="$black">
        <Text
          fontFamily={fonts.PoppinsSemiBold}
          fontSize={30}
          style={{color: 'rgba(0,244,0,1)'}}>
          What
        </Text>{' '}
        are {'\n'}you{' '}
        <Text
          fontFamily={fonts.PoppinsSemiBold}
          fontSize={30}
          style={{color: 'rgba(0,244,0,1)'}}>
          {' '}
          Looking for?
        </Text>
      </Text>
    </Box>
  );
};

const SearchBox: React.FunctionComponent = () => {
  const navigation = useNavigation<RootStackNavigationProp<'Search'>>();

  const handlePress = useCallback(() => {
    navigation.navigate('Search');
  }, [navigation]);

  return (
    <Pressable
      onPress={handlePress}
      style={{backgroundColor: 'rgba(0,0,0,0.05)'}}
      mt="md"
      mx="sm"
      py="sm"
      borderRadius="sm"
      flexDirection="row"
      alignItems="center"
      px="md">
      <Box opacity={0.5}>
        <AntDesign color={'$black'} name="search1" />
      </Box>
      <Text opacity={0.5} ml="sm" color="$black">
        Search for what you need...
      </Text>
    </Pressable>
  );
};
