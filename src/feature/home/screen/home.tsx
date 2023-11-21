import {ScrollView} from '../../../components/atom';
import React from 'react';
import {GradientBackground} from '../../../components/organism';
import {LocationChangerButton, SearchBox} from '../component/molecules';
import {Greeting} from '../component/atom';
import {HomeTabMenu} from '../component/organism';
import {useGetDeviceLatLng} from '../../location';

const Home: React.FunctionComponent = () => {
  useGetDeviceLatLng();
  return (
    <GradientBackground>
      <ScrollView>
        <LocationChangerButton />
        <Greeting />
        <SearchBox />
        <HomeTabMenu />
      </ScrollView>
    </GradientBackground>
  );
};

export default Home;
