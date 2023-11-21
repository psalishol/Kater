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
        Ikorodu, Lagos
      </Text>
    </Touchable>
  );
};
