// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth" 
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqxS2FgQr_7mvgSNgaTbTVEMJAKd0eUWQ",
  authDomain: "react-firebase-69b5a.firebaseapp.com",
  projectId: "react-firebase-69b5a",
  storageBucket: "react-firebase-69b5a.appspot.com",
  messagingSenderId: "29446921949",
  appId: "1:29446921949:web:032efb38b7b977609f8534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);