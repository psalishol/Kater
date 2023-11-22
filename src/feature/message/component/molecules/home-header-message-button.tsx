import {MaterialCommunityIcons, Pressable} from '../../../../components/atom';

const HomeHeaderMessageButton = () => {
  return (
    <Pressable
      style={{backgroundColor: 'rgba(0,0,0,0.04)'}}
      borderRadius='xs'
      ml="auto"
      mt="lg"
      mr="sm"
      p="sm">
      <MaterialCommunityIcons name="message-text-outline" color={'$black'} />
    </Pressable>
  );
};

export default HomeHeaderMessageButton;
