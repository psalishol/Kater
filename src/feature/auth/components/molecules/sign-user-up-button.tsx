import {useAtom, useSetAtom} from 'jotai';
import {FlatButton} from '../../../../components/molecules';
import {
  signupUsernameQueryAtom,
  signupEmailQueryAtom,
  signupPasswordQueryAtom,
} from '../../state';

import {LocalStorageService, RequestService} from '../../../../lib';
import {authivate_token} from '@env';
import {project_id} from '../../../../../config';

import {DataStore} from 'aws-amplify/datastore';

import {Account, AccountType, User} from '../../../../models';
import {accountsAtom, userAtom} from '../../../../state';

const SignUserUpButton: React.FunctionComponent = () => {
  const [name, setName] = useAtom(signupUsernameQueryAtom);
  const [email, setEmail] = useAtom(signupEmailQueryAtom);
  const [password, setPassword] = useAtom(signupPasswordQueryAtom);

  const setUser = useSetAtom(userAtom);
  const setAccount = useSetAtom(accountsAtom);

  const isValid = !!name && !!email && !!password;

  console.log('authivate', authivate_token);

  // handles user login
  const handleSignIn = async () => {
    if (isValid) {
      try {
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

          // set user to state.
          setUser(createdUser);

          // set account to state
          setAccount(prev => [...prev, userAccount]);

          // Store user and account to localDB
          const storage = new LocalStorageService();

          await storage.writeToStorage('@user', createdUser);
          await storage.writeToStorage('@accounts', [userAccount]);

          // Reset sign in form
          setName('');
          setEmail('');
          setPassword('');
        }
      } catch (error) {
        console.log('error signing in', error);
      }
    }
  };

  return (
    <FlatButton
      onPress={handleSignIn}
      mt="2xl"
      color="$white"
      label="Signup"
      bg={'$deepGreen'}
      mx="md"
    />
  );
};

export default SignUserUpButton;
