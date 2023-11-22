import React, {useEffect, useState} from 'react';
import {AuthenticatedStack, UnAuthenticatedStack} from './stack';
import {useAtom, useAtomValue} from 'jotai';
import {userAtom} from '../../state';
import {SplashScreen} from '../../feature/auth';

export const Navigatioon = () => {
  const [currentUser, setCurrentUser] = useAtom(userAtom);

  const [animating, setAnimating] = useState<boolean>(true);

  useEffect(() => {
    // const getAuthenticatedAsync = () => {
    //   // handle checking authentication status here
    // };

    // getAuthenticatedAsync();

    setTimeout(() => {
      setAnimating(false);
    }, 2000);
  }, []);
  return (
    <>
      {!currentUser && !animating && <UnAuthenticatedStack />}
      {currentUser && !animating && <AuthenticatedStack />}
      {animating && <SplashScreen />}
    </>
  );
};
