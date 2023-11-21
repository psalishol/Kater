import LinearGradient from 'react-native-linear-gradient';
import {
  Box,
  Image,
  Pressable,
  Text,
  Touchable,
} from '../../../../components/atom';
import {screenHeight, screenWidth} from '../../../../constant';
import {fonts} from '../../../../themes/fonts';
import {ViewPromoButton, MessageStoreButton} from '../molecules';

const Promo: React.FunctionComponent = () => {
  const imguri = 'https://avatars.githubusercontent.com/u/85138073?v=4';
  const flyers = [
    'https://unsplash.com/photos/assorted-book-collection-RhGK4qOwxxw',
  ];

  const promoText = 'Christmas promo, all at 50% off. Sales ends 26th December';

  const startDate = '20 Dec, 2023';
  const endDate = '26 Dec, 2023';

  const storeName = 'Kivy store';
  const address = '24 Adekoya street oke agbo ijebu igbo ogun state';

  return (
    <Box mx="sm" mt="md">
      <Box flexDirection="row" alignItems="center">
        <Image
          borderRadius="xs"
          // style={{backgroundColor: 'red'}}
          resizeMode="contain"
          height={30}
          width={30}
          source={{uri: imguri}}
        />

        <Box ml="sm">
          <Text color="$black" fontFamily={fonts.InterSemiBold}>
            {storeName}
          </Text>
          <Text color="$black" opacity={0.5}>
            {address}
          </Text>
        </Box>
      </Box>
      <Box mt="sm" flexDirection="row" justifyContent="space-between">
        <Text color="$black">Start date: {startDate} </Text>
        <Text color="$black">End date: {endDate}</Text>
      </Box>

      <Box
        height={0.5}
        style={{backgroundColor: 'rgba(0,0,0,0.1)'}}
        mt="xs"
        bg="$black"
      />

      <Text fontSize={14} fontFamily={fonts.InterMedium} color="$black" mt="sm">
        {promoText}
      </Text>

      <Box mt="sm">
        {flyers.map((url, index) => {
          return (
            <Image
              style={{backgroundColor: 'red'}}
              source={require('./image.jpg')}
              key={index}
              height={220}
              resizeMode="stretch"
              borderRadius="xs"
            />
          );
        })}
      </Box>

      <LinearGradient
        colors={[
          'transparent',
          'transparent',
          'rgba(255,255,255,0.7)',
          'rgba(255,255,255,0.9)',
          'rgba(255,255,255,1)',
          'rgba(255,255,255,1)',
          'rgba(255,255,255,1)',
          'rgba(255,255,255,1)',
        ]}
        style={{
          marginTop: -screenHeight * 0.05,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          // backgroundColor: 'red',
          height: 70,
        }}>
        <ViewPromoButton />
        <MessageStoreButton />
      </LinearGradient>

      <Box
        mb="md"
        height={0.5}
        style={{backgroundColor: 'rgba(0,0,0,0.1)'}}
        mt="xs"
        bg="$black"
      />
    </Box>
  );
};

export default Promo;
