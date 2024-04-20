// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2ODec_DuIHG6vwVxqNsLG16DFXUyvgUI",
  authDomain: "blood-ngo.firebaseapp.com",
  projectId: "blood-ngo",
  storageBucket: "blood-ngo.appspot.com",
  messagingSenderId: "914822800917",
  appId: "1:914822800917:web:aec87546afc4a65c1b101c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;