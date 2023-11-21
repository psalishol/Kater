import {Box, Text} from '../../../../components/atom';
import {fonts} from '../../../../themes/fonts';

const Greeting: React.FunctionComponent = () => {
  const username = 'Psalishol';
  return (
    <Box mx="sm">
      <Text
        fontSize={20}
        fontFamily={fonts.PoppinsMedium}
        mt="lg"
        color="$black">
        Hello {username}
      </Text>

      <Text
        mt="lg"
        fontFamily={fonts.PoppinsSemiBold}
        fontSize={30}
        color="$black">
        <Text
          fontFamily={fonts.PoppinsSemiBold}
          fontSize={30}
          style={{color: 'rgba(0,244,0,1)'}}>
          What
        </Text>{' '}
        are {'\n'}you{' '}
        <Text
          fontFamily={fonts.PoppinsSemiBold}
          fontSize={30}
          style={{color: 'rgba(0,244,0,1)'}}>
          {' '}
          Looking for?
        </Text>
      </Text>
    </Box>
  );
};

export default Greeting;
