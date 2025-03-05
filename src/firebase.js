
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth ,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { TbBrandGoogleAnalytics } from "react-icons/tb";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "email-ui-44e72.firebaseapp.com",
  projectId: "email-ui-44e72",
  storageBucket: "email-ui-44e72.firebasestorage.app",
  messagingSenderId: "387044418439",
  appId: "1:387044418439:web:4d4bcfcc3b8a8fd83f2922",
  measurementId: "G-9FVVDWEPQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Now , we use Authentication and Database 
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider() ; // We use login with Google

