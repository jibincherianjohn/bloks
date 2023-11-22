// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQvEQXkdJ9BDU5FYTLQuMi43pOx6e53wg",
  authDomain: "last-b7723.firebaseapp.com",
  projectId: "last-b7723",
  storageBucket: "last-b7723.appspot.com",
  messagingSenderId: "536982238044",
  appId: "1:536982238044:web:5faa54a0c162bcc35d4799"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth=getAuth(app)
 export const provider= new GoogleAuthProvider()
 export const  db=getFirestore(app)