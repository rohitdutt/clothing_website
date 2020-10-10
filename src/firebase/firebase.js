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

export const createUserProfileDocument = async (userAuth , additionalData) =>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName , email}= userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch (error) {
            console.log("error creating User", error.message);
        }
    }
    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle= ()=>auth.signInWithPopup(provider);

export default firebase;


