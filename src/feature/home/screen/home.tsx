import {Box, ScrollView} from '../../../components/atom';
import React from 'react';
import {GradientBackground} from '../../../components/organism';
import {LocationChangerButton, SearchBox} from '../component/molecules';
import {Greeting} from '../component/atom';
import {
  FollowedStoreNewProducts,
  HomeTabMenu,
  Promos,
} from '../component/organism';
import {CountryLocation, useGetDeviceLatLng} from '../../location';
import {HomeHeaderMessageButton} from '../../message';
import {useAtomValue} from 'jotai';
import {userCurrentAccountAtom} from '../../../state';
import {MyStoreScreen} from '../../mystore';

const Home: React.FunctionComponent = () => {
  useGetDeviceLatLng();

  const currentAccount = useAtomValue(userCurrentAccountAtom);

  if (currentAccount?.type !== 'CUSTOMER') {
    return <MyStoreScreen />;
  }

  return (
    <GradientBackground>
      <ScrollView>
        <Box flexDirection="row" alignItems="center">
          <LocationChangerButton />
          <HomeHeaderMessageButton />
        </Box>
        <Greeting />
        <SearchBox />
        <HomeTabMenu />
        <Promos />
        <FollowedStoreNewProducts />
      </ScrollView>
      <CountryLocation />
    </GradientBackground>
  );
};

export default Home;
