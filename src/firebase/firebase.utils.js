import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // Add the Firebase Firestore service
import 'firebase/compat/auth'; // firebase.auth()

//config
const config = {
  apiKey: 'AIzaSyBHn-thLPpylDe3SG5ohfF1LgA9Xtyf_xQ',
  authDomain: 'bases-react-escalab-academy.firebaseapp.com',
  projectId: 'bases-react-escalab-academy',
  storageBucket: 'bases-react-escalab-academy.appspot.com',
  messagingSenderId: '380630763880',
  appId: '1:380630763880:web:3741388a673c65f268aedd',
};

// create firebase app
firebase.initializeApp(config);

// function to create a user
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// export firebase utils
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Provider
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
