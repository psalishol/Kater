import {useAtom} from 'jotai';
import {useCallback} from 'react';
import {
  AntDesign,
  Box,
  Feather,
  Pressable,
  Text,
} from '../../../../components/atom';
import {fonts} from '../../../../themes/fonts';
import {selectedMenuAtom, TabMenu, menus} from '../../state';

const HomeTabMenu: React.FunctionComponent = () => {
  const [selectedMenu, setSelectedMenu] = useAtom(selectedMenuAtom);

  const handlePress = useCallback((menu: TabMenu) => {
    setSelectedMenu(menu);
  }, []);

  const getIcon = (type: TabMenu, selected: boolean): JSX.Element => {
    const color = selected ? '$white' : '$black';
    switch (type) {
      case 'Promos':
        return <AntDesign name="gift" color={color} />;
      case 'Products':
        return <Feather name="package" color={color} />;
      default:
        return <></>;
    }
  };

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
            flexDirection="row"
            alignItems="center"
            style={{
              backgroundColor: isSelected
                ? 'rgba(0,200,0,0.6)'
                : 'rgba(0,0,0,0.05)',
            }}
            key={index}>
            {getIcon(e, isSelected)}
            <Text
              ml="sm"
              fontSize={14}
              fontFamily={fonts.PoppinsRegular}
              color={isSelected ? '$white' : '$black'}>
              {e}
            </Text>
          </Pressable>
        );
      })}
    </Box>
  );
};

export default HomeTabMenu;
