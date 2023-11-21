import {ScrollView} from '../../../components/atom';
import React from 'react';
import {GradientBackground} from '../../../components/organism';
import {LocationChangerButton, SearchBox} from '../component/molecules';
import {Greeting} from '../component/atom';
import {HomeTabMenu} from '../component/organism';

const Home: React.FunctionComponent = () => {
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
