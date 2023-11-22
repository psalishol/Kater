import {useNavigation} from '@react-navigation/native';
import {fonts} from '../../themes/fonts';
import {AntDesign, Box, Pressable, Text} from '../atom';
import {useCallback} from 'react';

interface Props {
  name: string;
  bg?: string;
  useBack?: boolean;
}

const ScreenHeader: React.FunctionComponent<Props> = props => {
  const {bg, name, useBack} = props;
  const HEADER_HEIGHT = 50;

  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Box
      alignItems="center"
      height={HEADER_HEIGHT}
      flexDirection="row"
      style={{backgroundColor: bg ?? 'white'}}>
      {useBack && (
        <Pressable py="sm" pl="sm" onPress={handlePress}>
          <AntDesign size={20} name="arrowleft" color={'$white'} />
        </Pressable>
      )}
      <Text
        ml="md"
        fontSize={20}
        color={'$white'}
        fontFamily={fonts.PoppinsSemiBold}>
        {name}
      </Text>
    </Box>
  );
};

export default ScreenHeader;
