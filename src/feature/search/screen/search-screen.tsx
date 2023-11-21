import {useNavigation} from '@react-navigation/native';
import {
  AntDesign,
  Box,
  Ionicons,
  Pressable,
  TextInput,
} from '../../../components/atom';
import {ScreenBackground} from '../../../components/organism';
import {useCallback} from 'react';
import {SearchScreenHeader} from '../component/organism';

const SearchScreen: React.FunctionComponent = () => {
  return (
    <ScreenBackground color={'$white'}>
      <SearchScreenHeader />
    </ScreenBackground>
  );
};

export default SearchScreen;
