import {useAtom} from 'jotai';
import {locationFilterQueryAtom} from '../state';
import {ModalInput} from '../../../components/molecules';

const LocationFilterInput = () => {
  const [query, setQuery] = useAtom(locationFilterQueryAtom);
  return (
    <ModalInput
      onChangeText={setQuery}
      value={query}
      clearText={() => setQuery('')}
      placeholder="filter location..."
    />
  );
};

export default LocationFilterInput;
