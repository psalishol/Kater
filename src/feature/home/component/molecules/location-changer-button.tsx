import {useAtomValue} from 'jotai';
import {Entypo, Text, Touchable} from '../../../../components/atom';
import {fonts} from '../../../../themes/fonts';
import {useCallback} from 'react';
import {currentCityAtom} from '../../state';

const LocationChangerButton: React.FunctionComponent = () => {
  const handlePress = useCallback(() => {}, []);

  const currentCity = useAtomValue(currentCityAtom);

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
        {currentCity}
      </Text>
    </Touchable>
  );
};

export default LocationChangerButton;
