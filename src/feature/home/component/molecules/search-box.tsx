import {useNavigation} from '@react-navigation/native';
import {AntDesign, Box, Pressable, Text} from '../../../../components/atom';
import {useCallback} from 'react';
import {RootStackNavigationProp} from '../../../../navigation/types';

const SearchBox: React.FunctionComponent = () => {
  const navigation = useNavigation<RootStackNavigationProp<'Search'>>();

  const handlePress = useCallback(() => {
    navigation.navigate('Search');
  }, [navigation]);

  return (
    <Pressable
      onPress={handlePress}
      style={{backgroundColor: 'rgba(0,0,0,0.05)'}}
      mt="md"
      mx="sm"
      py="sm"
      borderRadius="sm"
      flexDirection="row"
      alignItems="center"
      px="md">
      <Box opacity={0.5}>
        <AntDesign color={'$black'} name="search1" />
      </Box>
      <Text opacity={0.5} ml="sm" color="$black">
        Search for what you need...
      </Text>
    </Pressable>
  );
};

export default SearchBox;
