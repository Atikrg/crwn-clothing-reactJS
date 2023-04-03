import { getFirestore, doc, getDoc, setDoc, collection, query, getDocs }from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
    
} from 'firebase/auth';

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => 
                    signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => 
                    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = 
    async (userAuth, additionalInformation) => {
        if (!userAuth) return;
        const userDocRef = doc(db, 'users', userAuth.uid);

       

        const userSnapShot = await getDoc(userDocRef);
   

        if (!userSnapShot.exists()) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
                await setDoc(userDocRef, {
                    displayName,
                    email,
                    createdAt,
                    ...additionalInformation
                });
            } catch (error) {
                console.log("Error creating the user", error.message);
            }
    }
  
    return userDocRef;
};

export const getCategoriesAndDocuments = async()=>{
const collectionRef = collection(db, 'categories');
const q = query(collectionRef);
const querySnapshot = await getDocs(q);
const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=> { 
const {title, items} = docSnapshot.data();
acc[title.toLowerCase()] = items;
return acc;
},{});
return categoryMap;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};


export const signOutUser = async()=> await signOut(auth);


export const onAuthStateChangedListener = (callback)=>{
    onAuthStateChanged(auth, callback);
}