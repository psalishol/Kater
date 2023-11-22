import {useAtomValue} from 'jotai';
import {FlatButton} from '../../../../components/molecules';
import {authenticatingAtom} from '../../state';
import {useLogin} from '../../hooks';

import firestore from '@react-native-firebase/firestore';

const LoginButton: React.FunctionComponent = () => {
  const {handlePress} = useLogin();

  const authenticating = useAtomValue(authenticatingAtom);

  const press = async () => {
    // firestore()
    //   .collection('Users')
    //   .add({
    //     name: 'Ada Lovelace',
    //     age: 30,
    //   })
    //   .then(() => {
    //     console.log('User added!');
    //   });

    firestore()
      .collection('Users')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          console.log(
            'User ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
        });
      });

    // try {
    //   const users = await firestore().collection('Users').get();

    //   console.log(users);

    //   //   const user = await firestore().collection('Users').doc('ABC').get();
    // } catch (error) {
    //   console.log('error querying', error);
    // }
  };

  return (
    <FlatButton
      onPress={authenticating ? undefined : handlePress}
      // onPress={press}
      loading={authenticating}
      mt="2xl"
      color="$white"
      label="Login"
      bg={'$deepGreen'}
      mx="md"
    />
  );
};

export default LoginButton;
