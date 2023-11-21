import {Box} from '../../../components/atom';
import {ScreenBackground} from '../../../components/organism';
import {
  SearchFilterSelectorComp,
  SearchScreenHeader,
} from '../component/organism';

const SearchScreen: React.FunctionComponent = () => {
  return (
    <ScreenBackground color={'$white'}>
      <SearchScreenHeader />
      <Box height={0.5} bg="$black" opacity={0.1} />
      <SearchFilterSelectorComp />
    </ScreenBackground>
  );
};

export default SearchScreen;
