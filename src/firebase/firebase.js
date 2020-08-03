import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config={
    apiKey: "AIzaSyBpEA1nU7ko8hZSWHrUzo5P6Qtd2vJs2pk",
    authDomain: "crwn-db-4e0fb.firebaseapp.com",
    databaseURL: "https://crwn-db-4e0fb.firebaseio.com",
    projectId: "crwn-db-4e0fb",
    storageBucket: "crwn-db-4e0fb.appspot.com",
    messagingSenderId: "603327982239",
    appId: "1:603327982239:web:fce1f15b625d7ac56250aa",
    measurementId: "G-JSTGMQ9K9S"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle= ()=>auth.signInWithPopup(provider);

export default firebase;


