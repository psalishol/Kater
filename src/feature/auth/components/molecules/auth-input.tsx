import React, {memo, useCallback, useReducer, useState} from 'react';

import {size} from '../../../../helper';
import {
  Box,
  Feather,
  MotiAnimatedBox,
  Pressable,
  Text,
  TextInput,
} from '../../../../components/atom';
import {fonts} from '../../../../themes/fonts';
import {useSetAtom} from 'jotai';
import {authErrMsgAtom} from '../../state';

interface Props {
  onChangeText: (value: string) => void;

  placeHolder: string;

  value: string;

  error?: boolean;

  password?: boolean;
}

const AuthInput: React.FunctionComponent<Props> = props => {
  const {placeHolder, onChangeText, error, value, password} = props;
  const [focused, setFocused] = useReducer(prev => !prev, false);

  const HEIGHT = size(44);

  const [obscure, setObscure] = useState<boolean>(true);

  const setErrMsg = useSetAtom(authErrMsgAtom);

  const handlePress = useCallback(() => {
    setObscure(prev => !prev);
  }, []);

  const handleChangeText = useCallback((e: string) => {
    setErrMsg('');
    onChangeText(e);
  }, []);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Box style={{marginHorizontal: '3.5%'}}>
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        borderWidth={size(1)}
        style={{borderRadius: size(4), borderColor: 'rgba(0,0,0,0.1)'}}
        height={HEIGHT}>
        <TextInput
          flex={1}
          autoCorrect={false}
          autoCapitalize="none"
          height={'100%'}
          px={'sm'}
          secureTextEntry={password && !obscure ? true : false}
          onFocus={setFocused}
          onBlur={setFocused}
          color={'$black'}
          placeholder={focused ? '' : placeHolder}
          onChangeText={handleChangeText}
          value={value}
          fontSize={14}
          fontFamily={fonts.RobotoMedium}
        />
        {password && (
          <Pressable mr={'sm'} onPress={handlePress} opacity={0.3} ml={'auto'}>
            <Feather name={!obscure ? 'eye-off' : 'eye'} color={'$black'} />
          </Pressable>
        )}
        {(focused || !!value) && (
          <MotiAnimatedBox
            bg={'$white'}
            px={'xxs'}
            position={'absolute'}
            top={HEIGHT * 0.3}
            left={'2.5%'}
            transition={{type: 'timing', duration: 100}}
            animate={{
              translateY: focused || !!value ? -HEIGHT * 0.54 : 0,
              opacity: focused || !!value ? 1 : 0,
            }}
            from={{translateY: 0, opacity: 1}}>
            <Text color={'$black'} fontSize={size(14)}>
              {placeHolder}
            </Text>
          </MotiAnimatedBox>
        )}
      </Box>
    </Box>
  );
};

export default memo<Props>(AuthInput);
