import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {
  AntDesign,
  Box,
  Ionicons,
  Pressable,
  TextInput,
} from '../../../../components/atom';

const SearchScreenHeader: React.FunctionComponent = () => {
  const navigation = useNavigation();
  const handleClose = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <Box height={50} mt="sm" alignItems="center" flexDirection="row">
      <Pressable p="sm" onPress={handleClose}>
        <AntDesign name="close" color={'$black'} />
      </Pressable>

      <Box
        borderRadius="xs"
        px="xs"
        flex={1}
        style={{backgroundColor: 'rgba(0,0,0,0.05)'}}
        height={35}>
        <TextInput
          flex={1}
          autoFocus
          placeholder="Search for what you need..."
        />
      </Box>

      <Box p="sm" mx="sm" />

      {/* <Pressable p="sm" mx="sm">
        <Ionicons name="filter" color={'$black'} />
      </Pressable> */}
    </Box>
  );
};

export default SearchScreenHeader;
