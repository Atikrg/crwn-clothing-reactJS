import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAdQEHrK6iXK8P6ZM-k4hweGrNJb_pmvhg",
    authDomain: "crwn-clothing-db-76b60.firebaseapp.com",
    projectId: "crwn-clothing-db-76b60",
    storageBucket: "crwn-clothing-db-76b60.appspot.com",
    messagingSenderId: "1002292830314",
    appId: "1:1002292830314:web:096202eb1dc31f82722a13",
    measurementId: "G-Q6GFM7MFYZ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot.exists());

    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName, 
                email, 
                createdAt
            });
        }catch(error){
            console.log("Error creating the user", error.message);
        }
    }
    //if user data does not exist
    // create /set the document with the data from userAtuth in my collection
    //if user data exists

    
    return userDocRef;
};