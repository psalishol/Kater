import {useAtomValue} from 'jotai';
import {Box, MaterialCommunityIcons, Text} from '../../../../components/atom';
import {selectedMenuAtom} from '../../state';
import Promo from './promo';

import {useEffect} from 'react';
import {size} from '../../../../helper';

// Promos(Component) -> Renders promos that is ongoing in the user
// Current city.
const Promos: React.FunctionComponent = () => {
  const selectedTab = useAtomValue(selectedMenuAtom);
  const promos = [];

  //   useEffect(() => {
  //     if (!promos) {
  //       // Fetch promos
  //     }
  //   }, [promos]);

  if (selectedTab !== 'Promos') {
    return <></>;
  }

  return (
    <Box>
      <Text mx="sm" mt="lg" opacity={0.6} color="$black">
        Promos happening in this city:
      </Text>

      {promos.length < 1 && (
        <Box opacity={0.4} flex={1}  alignItems="center" justifyContent="center">
          <Box style = {{marginTop: 120}} />
          <MaterialCommunityIcons name="gift-off-outline" color={'$black'} />
          <Text ml='sm' mt='md'>There are currently no promo running in this city</Text>
        </Box>
      )}

      {promos.length > 0 &&
        promos.map((e, i) => {
          return <Promo />;
          // return <Box />;
        })}
      <Box height={size(100)} />
    </Box>
  );
};
export default Promos;
