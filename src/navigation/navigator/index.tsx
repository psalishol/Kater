import React, {useEffect, useState} from 'react';
import {AuthenticatedStack, UnAuthenticatedStack} from './stack';

export const Navigatioon = () => {
  const [authenticated] = useState<boolean>(false);

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
