import {useAtom} from 'jotai';
import {useCallback} from 'react';
import {
  Box,
  Feather,
  MaterialCommunityIcons,
  Pressable,
  Text,
} from '../../../../components/atom';
import {screenWidth} from '../../../../constant';
import {fonts} from '../../../../themes/fonts';
import {
  SearchFilterSelector,
  selectedSearchFilterAtom,
  selectors,
} from '../../state';

const SearchFilterSelectorComp = () => {
  const [selectedFilter, setSelectedFilter] = useAtom(selectedSearchFilterAtom);

  const getIcon = (e: SearchFilterSelector, isSelected: boolean) => {
    const color = isSelected ? '$white' : '$black';
    if (e === 'Item') {
      return <Feather size={14} name="package" color={color} />;
    }
    if (e === 'Service') {
      return (
        <MaterialCommunityIcons size={12} name="nature-people" color={color} />
      );
    }

    if (e === 'Food') {
      return (
        <MaterialCommunityIcons
          size={14}
          name="room-service-outline"
          color={color}
        />
      );
    }
  };

  const handleSelectFilter = useCallback(
    (e: SearchFilterSelector) => {
      setSelectedFilter(e);
    },
    [setSelectedFilter],
  );

  return (
    <Box ml="sm" mt="sm" flexDirection="row" alignItems="center">
      {selectors.map((e, i) => {
        const selected = e === selectedFilter;
        return (
          <Pressable
            onPress={() => handleSelectFilter(e)}
            borderRadius="xs"
            justifyContent="center"
            alignItems="center"
            mr="sm"
            style={{
              backgroundColor: selected
                ? 'rgba(0,210,0,1)'
                : 'rgba(0,0,0,0.05)',
            }}
            height={25}
            flexDirection="row"
            width={screenWidth * 0.2}
            key={i}>
            {getIcon(e, selected)}
            <Text
              fontSize={14}
              ml="xs"
              color={selected ? '$white' : '$black'}
              fontFamily={fonts.RobotoRegular}>
              {e}
            </Text>
          </Pressable>
        );
      })}
    </Box>
  );
};

export default SearchFilterSelectorComp;
