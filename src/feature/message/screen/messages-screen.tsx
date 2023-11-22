import {useAtomValue} from 'jotai';
import {ScreenBackground, ScreenHeader} from '../../../components/organism';
import {userCurrentAccountAtom} from '../../../state';
import {AntDesign, Box, Text} from '../../../components/atom';

const MessagesScreen: React.FunctionComponent = () => {
  const merchantAccount =
    useAtomValue(userCurrentAccountAtom)?.type != 'CUSTOMER';
  return (
    <ScreenBackground statusbarColor={'rgba(0,210,0,1)'}>
      <ScreenHeader
        useBack={!merchantAccount}
        name="Messages"
        bg="rgba(0,210,0,1)"
      />

      <Box opacity={0.4} flex={1} justifyContent="center" alignItems="center">
        <AntDesign name="exclamationcircleo" color="$black" />

        <Text mt="sm">You do not have any messages</Text>
      </Box>
    </ScreenBackground>
  );
};

export default MessagesScreen;
