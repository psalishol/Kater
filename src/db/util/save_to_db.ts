import firestore from '@react-native-firebase/firestore';

export const saveToDb = async (
  collection: string,
  data: any,
  docID?: string,
) => {
  try {
    if (docID) {
      await firestore().collection(collection).doc(docID).set(data);
    } else {
      await firestore().collection(collection).add(data);
    }
  } catch (error: any) {
    throw Error('Error saving to db' + error);
  }
};
