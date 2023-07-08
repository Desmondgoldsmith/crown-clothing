import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection , writeBatch , query, getDocs} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDGaxXPn_P03h7E7sU95TA_H_B4Qx5gU18",
    authDomain: "crown-clothing-db-ebd87.firebaseapp.com",
    projectId: "crown-clothing-db-ebd87",
    storageBucket: "crown-clothing-db-ebd87.appspot.com",
    messagingSenderId: "335102838900",
    appId: "1:335102838900:web:250afe9baedded7b5a6921"
  };

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const AddItemsToDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db,collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef,object.title.toLowerCase())
    batch.set(docRef,object)

  });

  await batch.commit();
  console.log("done");
}

export const getCollectionsAndDocuments = async() => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshots = await getDocs(q)
  const categoryMap = querySnapshots.docs.reduce((acc,docSnapshot ) => {
    const {title,items} = docSnapshot.data();
    acc[title.toLowerCase()] = items();
    return acc;
  },{});
  return categoryMap;
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangeListner = (callback) => 
onAuthStateChanged(auth,callback)