import {
  Box,
  Entypo,
  ScrollView,
  Text,
  Touchable,
} from '../../../components/atom';
import React, {useCallback} from 'react';
import {GradientBackground} from '../../../components/organism';
import {fonts} from '../../../themes/fonts';
import {currentCityAtom} from '../state';
import {useAtomValue} from 'jotai';

const Home: React.FunctionComponent = () => {
  return (
    <GradientBackground>
      <ScrollView>
        <LocationChangerButton />
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
  return (
    <Box mx="sm">
      <Text
        fontSize={20}
        fontFamily={fonts.PoppinsMedium}
        mt="lg"
        color="$black">
        Hello Psalishol
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
