import {useAtomValue} from 'jotai';
import {MaterialCommunityIcons, Pressable} from '../../../../components/atom';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../../../navigation/types';
import {useCallback} from 'react';

const HomeHeaderMessageButton = () => {
  const navigation = useNavigation<RootStackNavigationProp<'Messages'>>();

  const handlePress = useCallback(() => {
    navigation.navigate('Messages');
  }, [navigation]);

  return (
    <Pressable
      onPress={handlePress}
      style={{backgroundColor: 'rgba(0,0,0,0.04)'}}
      borderRadius="xs"
      ml="auto"
      mt="lg"
      mr="sm"
      p="sm">
      <MaterialCommunityIcons name="message-text-outline" color={'$black'} />
    </Pressable>
  );
};

export default HomeHeaderMessageButton;
