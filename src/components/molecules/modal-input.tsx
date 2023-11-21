import React, {memo} from 'react';
import {Box, TextInput} from '../atom';
import {fonts} from '../../themes/fonts';

interface Props {
  value?: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  autoFocus?: boolean;
  clearText?: () => void;
}

const ModalInput: React.FunctionComponent<Props> = props => {
  const {value, onChangeText, placeholder, autoFocus, clearText} = props;

  const TEXT_INPUT_HEIGHT = 50;

  return (
    <Box
      mx={'md'}
      style={{borderColor: 'rgba(0,0,0,0.1)'}}
      marginTop={'md'}
      height={TEXT_INPUT_HEIGHT}
      flexDirection={'row'}
      alignItems={'center'}
      borderRadius={'sm'}
      borderWidth={1.5}>
      <TextInput
        autoFocus={autoFocus}
        value={value}
        onChangeText={onChangeText}
        flex={1}
        mx={'sm'}
        placeholder={placeholder}
        style={{color: '#000'}}
        fontSize={13}
        fontFamily={fonts.InterMedium}
        allowFontScaling
        autoCorrect={false}
        paddingVertical={'sm'}
      />
    </Box>
  );
};

export default memo<Props>(ModalInput);
