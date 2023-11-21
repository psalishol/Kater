import React, {useEffect, useState} from 'react';
import {AuthenticatedStack, UnAuthenticatedStack} from './stack';

export const Navigatioon = () => {
  const [authenticated] = useState<boolean>(true);

  useEffect(() => {
    const getAuthenticatedAsync = () => {
      // handle checking authentication status here
    };

    getAuthenticatedAsync();
  }, []);
  return (
    <>
      {!authenticated && <UnAuthenticatedStack />}
      {authenticated && <AuthenticatedStack />}
    </>
  );
};
