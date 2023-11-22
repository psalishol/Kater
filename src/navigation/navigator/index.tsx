import React, {useEffect, useState} from 'react';
import {AuthenticatedStack, UnAuthenticatedStack} from './stack';
import {useAtom, useAtomValue} from 'jotai';
import {userAtom} from '../../state';

export const Navigatioon = () => {
  const [currentUser, setCurrentUser] = useAtom(userAtom);

  useEffect(() => {
    const getAuthenticatedAsync = () => {
      // handle checking authentication status here
    };

    getAuthenticatedAsync();
  }, []);
  return (
    <>
      {!currentUser && <UnAuthenticatedStack />}
      {currentUser && <AuthenticatedStack />}
    </>
  );
};
