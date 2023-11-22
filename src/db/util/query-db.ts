import firestore from '@react-native-firebase/firestore';

export const queryDb = async (
  collection: string,
  docID?: string,
  filterBy?: string,
) => {
  try {
    const documentSnapshot = await firestore()
      .collection(collection)
      .doc(docID)
      .get();

    return documentSnapshot.data();
  } catch (error) {
    console.log('error query db', error);
  }
};
