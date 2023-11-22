import {DataStore} from 'aws-amplify/dist/esm/datastore';
import {useAtom, useSetAtom} from 'jotai';
import {project_id} from '../../../../config';
import {RequestService, LocalStorageService} from '../../../lib';
import {User, AccountType, Account} from '../../../models';
import {userAtom, accountsAtom, userCurrentAccountAtom} from '../../../state';
import {
  signupUsernameQueryAtom,
  signupEmailQueryAtom,
  signupPasswordQueryAtom,
  loginEmailQueryAtom,
  loginPasswordQueryAtom,
  authenticatingAtom,
} from '../state';

// userSignup de
export const useSignup = () => {
  const [name, setName] = useAtom(signupUsernameQueryAtom);
  const [email, setEmail] = useAtom(signupEmailQueryAtom);
  const [password, setPassword] = useAtom(signupPasswordQueryAtom);

  const setUser = useSetAtom(userAtom);
  const setAccount = useSetAtom(accountsAtom);

  const isValid = !!name && !!email && !!password;

  const setAuthenticating = useSetAtom(authenticatingAtom);

  // handles user login
  const handlePress = async () => {
    if (isValid) {
      try {
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

        if (response.data.status === 200) {
          // If the user authentication is succesful, save the new user
          // in db and create a customer account for the user.
          const createUserPayload = {
            name,
            email,
            storeFollowingIDs: [],
          };

          // Create the user.
          const createdUser = await DataStore.save(new User(createUserPayload));

          // Create  user customer account.
          const createCustomerAccountPayload = {
            type: AccountType.CUSTOMER,
            userID: createdUser.id,
          };

          const userAccount = await DataStore.save(
            new Account(createCustomerAccountPayload),
          );

          // set account to state
          setAccount(prev => [...prev, userAccount]);

          // set user to state.
          setUser(createdUser);

          // set Authenticating to false
          setAuthenticating(false);

          // Store user and account to localDB
          const storage = new LocalStorageService();

          await storage.writeToStorage('@user', createdUser);
          await storage.writeToStorage('@accounts', [userAccount]);

          // Reset sign in form
          setName('');
          setEmail('');
          setPassword('');
        }

        setAuthenticating(false);
      } catch (error) {
        console.log('error signing in', error);
        setAuthenticating(false);
      }
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

  // handles user login
  const handlePress = async () => {
    if (isValid) {
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

        if (response.data.status === 200) {
          // If login was successful, query the user using the provided email

          const queryUser = await DataStore.query(User, p =>
            p.email.eq(email!),
          );

          // Check if the user with the email exists.
          if (queryUser && queryUser.length > 0) {
            // query the user's accounts
            const userAccounts = await DataStore.query(Account, p =>
              p.userID.eq(queryUser[0].id),
            );

            if (userAccounts.length > 0) {
              // check if the user has merchant account. then set the current account to the
              // store account. if not set to customer account.
              const merchantAccount = userAccounts.find(
                e => e.type !== 'CUSTOMER',
              );

              if (merchantAccount) {
                setCurrentAccount(merchantAccount);
              } else {
                setCurrentAccount(userAccounts[0]); // default to customer account
              }
            }

            // set account to state
            setAccount(userAccounts);

            // set user to state.
            setUser(queryUser[0]);

            // set authenticating to false
            setAuthenticating(false);

            // Store user and account to localDB
            const storage = new LocalStorageService();

            await storage.writeToStorage('@user', queryUser);
            await storage.writeToStorage('@accounts', userAccounts);
          }

          // Reset sign in form
          setEmail('');
          setPassword('');
        }

        setAuthenticating(false);
      } catch (error) {
        console.log('error signing in', error);
        setAuthenticating(false);
      }
    }
  };

  return {handlePress};
};
