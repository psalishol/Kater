import {useAtom} from 'jotai';
import {useCallback} from 'react';
import {Box, Pressable, Text} from '../../../../components/atom';
import {fonts} from '../../../../themes/fonts';
import {selectedMenuAtom, TabMenu, menus} from '../../state';

const HomeTabMenu: React.FunctionComponent = () => {
  const [selectedMenu, setSelectedMenu] = useAtom(selectedMenuAtom);

  const handlePress = useCallback((menu: TabMenu) => {
    setSelectedMenu(menu);
  }, []);

  return (
    <Box mt="md" mx="sm" flexDirection="row" alignItems="center">
      {menus.map((e, index) => {
        const isSelected = selectedMenu === e;
        return (
          <Pressable
            onPress={() => handlePress(e)}
            borderRadius="sm"
            px="md"
            mr="sm"
            py="xs"
            style={{
              backgroundColor: isSelected
                ? 'rgba(0,244,0,0.3)'
                : 'rgba(0,0,0,0.05)',
            }}
            key={index}>
            <Text
              fontSize={14}
              fontFamily={fonts.PoppinsRegular}
              color="$black">
              {e}
            </Text>
          </Pressable>
        );
      })}
    </Box>
  );
};

export default HomeTabMenu;
