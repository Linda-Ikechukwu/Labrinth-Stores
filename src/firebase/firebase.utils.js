import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyBSVkP733cTL5-pWSRt3zYmHdoV9BKmEi0",
    authDomain: "labrinth-clothing.firebaseapp.com",
    databaseURL: "https://labrinth-clothing.firebaseio.com",
    projectId: "labrinth-clothing",
    storageBucket: "labrinth-clothing.appspot.com",
    messagingSenderId: "734103019713",
    appId: "1:734103019713:web:62e7c7b1ba0a310c81b440",
    measurementId: "G-RF8B70KYDD"

}

//add new sign up user to user collection on firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
    //if user is not signed in return
    if (!userAuth) return
    //refrence to get or set data
    const userRef = firestore.doc(`users/${userAuth.uid}`);
     
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
           console.log('Problem sigining in, Please try again', error)
        }
    }

    return userRef


}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;

//Show google sign in popup
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

