import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCfCkuKmhtWasdM6KWQbxlLPI7Y0hyEHi0",
  authDomain: "primeshopgt-db.firebaseapp.com",
  databaseURL: "https://primeshopgt-db.firebaseio.com",
  projectId: "primeshopgt-db",
  storageBucket: "primeshopgt-db.appspot.com",
  messagingSenderId: "1073009622326",
  appId: "1:1073009622326:web:0c2464a8fd4c2d6f5fc797",
  measurementId: "G-FG9HSBDW81"
};

firebase.initializeApp(config);

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
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
