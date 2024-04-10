import {initializeApp} from 'firebase/app'

import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyD3uiZv9nWgAxSIgGb9XPi2WFQGK6yqIyE",
  authDomain: "crown-store-203e9.firebaseapp.com",
  projectId: "crown-store-203e9",
  storageBucket: "crown-store-203e9.appspot.com",
  messagingSenderId: "754425122828",
  appId: "1:754425122828:web:3235cb201b166166301e29"
};


// Initialize Firebase
const fireBaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth()
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)
export const db = getFirestore()

export const createUserDocument = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapShot = await getDoc(userDocRef)

  if(!userSnapShot.exists()) {
    const {displayName, email} = userAuth
    const createAt = new Date()


    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      })
    } catch (error){

    }
  }
  return userDocRef
}