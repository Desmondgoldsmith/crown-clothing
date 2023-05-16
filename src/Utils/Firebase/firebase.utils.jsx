import {initializeApp} from 'firebase/app'
import { getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider
      } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDGaxXPn_P03h7E7sU95TA_H_B4Qx5gU18",
    authDomain: "crown-clothing-db-ebd87.firebaseapp.com",
    projectId: "crown-clothing-db-ebd87",
    storageBucket: "crown-clothing-db-ebd87.appspot.com",
    messagingSenderId: "335102838900",
    appId: "1:335102838900:web:250afe9baedded7b5a6921"
  };
  
  // Initialize Firebase
  const FirebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);