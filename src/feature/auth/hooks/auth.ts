import {useAtom, useSetAtom} from 'jotai';
import {project_id} from '../../../../config';
import {RequestService, LocalStorageService} from '../../../lib';
import {userAtom, accountsAtom, userCurrentAccountAtom} from '../../../state';
import {
  signupUsernameQueryAtom,
  signupEmailQueryAtom,
  signupPasswordQueryAtom,
  loginEmailQueryAtom,
  loginPasswordQueryAtom,
  authenticatingAtom,
  authErrMsgAtom,
} from '../state';

import firestore, {Filter} from '@react-native-firebase/firestore';
import {Account, AccountType, User, saveToDb} from '../../../db';
import {queryDb} from '../../../db/util/query-db';
import {Keyboard} from 'react-native';

// userSignup de
export const useSignup = () => {
  const [name, setName] = useAtom(signupUsernameQueryAtom);
  const [email, setEmail] = useAtom(signupEmailQueryAtom);
  const [password, setPassword] = useAtom(signupPasswordQueryAtom);

  const setCurrentAccount = useSetAtom(userCurrentAccountAtom);

  const setErrMsg = useSetAtom(authErrMsgAtom);

  const setUser = useSetAtom(userAtom);
  const setAccount = useSetAtom(accountsAtom);

  const isValid = !!name && !!email && !!password;

  const setAuthenticating = useSetAtom(authenticatingAtom);

  // handles user login
  const handlePress = async () => {
    Keyboard.dismiss();

    if (isValid) {
      setErrMsg('');
      try {
        console.log('starting authentication');

        setAuthenticating(true);
        const req = new RequestService();

        const apiUrl = 'https://api.authivate.com/api/v1/p/user/signup/';

        // Define authivate signup body.
        const body = {
          // Current authentication project.
          // This is gotten from authivate after creating an account.
          project_id,

          // Email address of the sign up user.
          email_address: email,

          // Full name of the user, Authivate does not support creating a full name now
          // hence we are using the first name as the user full name.
          first_name: name,

          // The same is done for the last name too. the full name is used for the last name.
          last_name: name,

          // User authentication Password.
          password,
        };

        // Authenticate user using authivate. For this particular project
        // User email doesnt need to be verified as it is not the main communication channel.
        // The main communication channel is the phone number which would be implemented later.
        const response = await req.postRequest(apiUrl, body, true, true);

        console.log('sign up response', response);

        if (response.status === 200) {
          // If the user authentication is succesful, save the new user
          // in db and create a customer account for the user.
          const createUserPayload = {
            name,
            email,
            storeFollowingIDs: [],
            createdAt: new Date().toISOString(),
          };

          // Create the user.
          await saveToDb('Users', createUserPayload, email);

          // Create  user customer account.
          const createCustomerAccountPayload = {
            type: AccountType.CUSTOMER,
            userID: email,
            createdAt: new Date().toISOString(),
          };

          await saveToDb('Accounts', createCustomerAccountPayload);

          // set account to state
          setAccount([createCustomerAccountPayload]);

          // set current account to state
          setCurrentAccount(createCustomerAccountPayload);

          // set user to state.
          setUser(createUserPayload);

          // set Authenticating to false
          setAuthenticating(false);

          // Store user and account to localDB
          const storage = new LocalStorageService();

          await storage.writeToStorage('@user', createUserPayload);
          await storage.writeToStorage('@accounts', [
            createCustomerAccountPayload,
          ]);

          // Reset sign in form
          setName('');
          setEmail('');
          setPassword('');
        }

        setAuthenticating(false);
      } catch (error) {
        console.log('error signing in', error);
        setAuthenticating(false);
        setErrMsg('Error signing in');
      }
    } else {
      setErrMsg('Kindly fill all form field.');
    }
  };

  return {handlePress};
};

export const useLogin = () => {
  const [email, setEmail] = useAtom(loginEmailQueryAtom);
  const [password, setPassword] = useAtom(loginPasswordQueryAtom);

  const setUser = useSetAtom(userAtom);
  const setAccount = useSetAtom(accountsAtom);
  const setCurrentAccount = useSetAtom(userCurrentAccountAtom);

  const isValid = !!email && !!password;

  const setAuthenticating = useSetAtom(authenticatingAtom);
  const setErrMsg = useSetAtom(authErrMsgAtom);

  const getUserAccounts = async () => {
    try {
      let data: Account[] = [];

      const querySnapshot = await firestore()
        .collection('Accounts')
        .where('userID', '==', email)
        .get();

      querySnapshot.forEach(documentSnapshot => {
        const queryData = documentSnapshot.data();
        data.push({
          userID: queryData?.userID,
          store_name: queryData?.store_name,
          type: queryData?.type,
          store_cover_img: queryData?.store_cover_img,
          address: queryData?.address,
          city: queryData?.city,
          country: queryData?.country,
          createdAt: queryData?.createdAt,
        });
      });

      return data;
    } catch (error) {
      console.log(error, 'error getting useraccounts');
    }
  };

  // handles user login
  const handlePress = async () => {
    Keyboard.dismiss();
    if (isValid) {
      setErrMsg('');
      try {
        setAuthenticating(true);
        const req = new RequestService();

        const apiUrl = 'https://api.authivate.com/api/v1/p/user/signin/';

        // Define authivate signup body.
        const body = {
          // Current authentication project.
          // This is gotten from authivate after creating an account.
          project_id,

          // Email address of the sign in user.
          email_address: email,

          // User authentication Password.
          password,
        };

        const response = await req.postRequest(apiUrl, body, true, true);

        console.log('sign in response', response);

        if (response.status === 200) {
          // If login was successful, query the user using the provided email
          const userSnapShotData = await queryDb('Users', email);

          const user: User = {
            name: userSnapShotData?.name,
            email: userSnapShotData?.email,
            storeFollowingIDs: userSnapShotData?.storeFollowingIDs,
            createdAt: userSnapShotData?.createdAt,
          };

          const accounts = await getUserAccounts();

          if (user && accounts) {
            // set account to state
            setAccount(accounts ?? []);

            // check if the user has merchant account
            const merchantAccount = accounts?.find(e => e.type !== 'CUSTOMER');

            // if merchant account exist, set it to state else set customer accoun.
            setCurrentAccount(
              merchantAccount ?? (accounts ? accounts[0] : undefined),
            );

            // set user to state.
            setUser(user);

            // set authenticating to false
            setAuthenticating(false);
            // Store user and account to localDB
            const storage = new LocalStorageService();

            await storage.writeToStorage('@user', user);
            await storage.writeToStorage('@accounts', accounts);

            // Reset sign in form
            setEmail('');
            setPassword('');
          }
        }

        setAuthenticating(false);
      } catch (error) {
        console.log('error signing in', error);
        setAuthenticating(false);
      }
    } else {
      setErrMsg('Kindly fill all form field');
    }
  };

  return {handlePress};
};
