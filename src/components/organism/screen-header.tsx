import {fonts} from '../../themes/fonts';
import {Box, Text} from '../atom';

interface Props {
  name: string;
  bg?: string;
}

const ScreenHeader: React.FunctionComponent<Props> = props => {
  const {bg, name} = props;
  const HEADER_HEIGHT = 50;

  return (
    <Box
      justifyContent="center"
      height={HEADER_HEIGHT}
      style={{backgroundColor: bg ?? 'white'}}>
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
