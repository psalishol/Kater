import {useAtomValue} from 'jotai';
import {Box, Text} from '../../../../components/atom';
import {selectedMenuAtom} from '../../state';
import Promo from './promo';

import {useEffect} from 'react';

const Promos: React.FunctionComponent = () => {
  const selectedTab = useAtomValue(selectedMenuAtom);
  const promos = [1, 2, 3];

  useEffect(() => {
    if (!promos) {
      // Fetch promos
    }
  }, [promos]);

  if (selectedTab !== 'Promos') {
    return <></>;
  }

  return (
    <Box>
      <Text mx="sm" mt="md" opacity={0.6} color="$black">
        Suggested promo happening around you
      </Text>
      {promos.map((e, i) => {
        return <Promo />;
      })}
    </Box>
  );
};
export default Promos;
