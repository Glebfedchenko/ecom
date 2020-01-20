import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey:
    (process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "production") &&
    process.env.REACT_APP_API_KEY,
  authDomain:
    (process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "production") &&
    process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL:
    (process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "production") &&
    process.env.REACT_APP_DATABASE_URL,
  projectId: "ecom-d222f",
  storageBucket:
    (process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "production") &&
    process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:
    (process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "production") &&
    process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:
    (process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "production") &&
    process.env.REACT_APP_APP_ID,
  measurementId:
    (process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "production") &&
    process.env.MEASURMENT_ID
};
export const createUserProfileDocument = async (
  userAuthObject,
  additionalData
) => {
  if (!userAuthObject) return;
  const userRef = firestore.doc(`users/${userAuthObject.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuthObject;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleOauthProvider = new firebase.auth.GoogleAuthProvider();
googleOauthProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleOauthProvider);

export default firebase;
