import React, {useEffect, useState} from 'react';
import {ScreenBackground} from '../../../components/organism';
import {Box, MotiAnimatedBox, Text} from '../../../components/atom';
import {screenWidth} from '../../../constant';
import {fonts} from '../../../themes/fonts';

const SplashScreen: React.FunctionComponent = () => {
  const [firstAnimationStep, setFirstAnimationStep] = useState<boolean>(false);
  const [secondAnimationStep, setSecondAnimationStep] =
    useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setFirstAnimationStep(true);
      setTimeout(() => {
        setSecondAnimationStep(true);
      }, 600);
    }, 300);
  }, []);

  return (
    <ScreenBackground color={'$white'}>
      <Box flex={1} justifyContent={'center'}>
        <MotiAnimatedBox
          alignSelf={'center'}
          opacity={1}
          flexDirection={'row'}
          alignItems={'center'}>
          <MotiAnimatedBox
            zIndex={2}
            transition={{damping: 300}}
            from={{translateX: screenWidth * 0.09, scale: 1.5, opacity: 1}}
            animate={{
              opacity: 1,
              scale: firstAnimationStep ? 1 : 1.5,
              translateX: secondAnimationStep ? 0 : screenWidth * 0.09,
            }}>
            <Text
              fontFamily={fonts.PoppinsSemiBold}
              color="$green"
              fontSize={80}>
              K
            </Text>
          </MotiAnimatedBox>
          <MotiAnimatedBox
            transition={{damping: 300}}
            from={{opacity: 0, translateX: -screenWidth * 0.06}}
            animate={{
              opacity: secondAnimationStep ? 1 : 0,
              translateX: secondAnimationStep ? 0 : -screenWidth * 0.06,
            }}>
            <Box mb="md" width={screenWidth * 0.15}>
              <Text fontSize={35}>ater</Text>
            </Box>
          </MotiAnimatedBox>
        </MotiAnimatedBox>
      </Box>
    </ScreenBackground>
  );
};

export default SplashScreen;
