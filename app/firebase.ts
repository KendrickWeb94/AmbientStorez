

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';



// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyAHFjgFZMeEYokMIv6ZbbtAwGU9sAFo4lA",
  authDomain: "enver-digital-agency.firebaseapp.com",
  projectId: "enver-digital-agency",
  storageBucket: "enver-digital-agency.appspot.com",
  messagingSenderId: "330923313409",
  appId: "1:330923313409:web:d04d00a6d390eee4aaf300"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);