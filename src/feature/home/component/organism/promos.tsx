import {useAtomValue} from 'jotai';
import {Box, Text} from '../../../../components/atom';
import {selectedMenuAtom} from '../../state';
import Promo from './promo';

import {useEffect} from 'react';
import {size} from '../../../../helper';

// Promos(Component) -> Renders promos that is ongoing in the user
// Current city.
const Promos: React.FunctionComponent = () => {
  const selectedTab = useAtomValue(selectedMenuAtom);
  const promos = [1, 2, 3];

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
      {promos.map((e, i) => {
        return <Promo />;
        // return <Box />;
      })}
      <Box height={size(100)} />
    </Box>
  );
};
export default Promos;
