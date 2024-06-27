

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';



// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDWhLQfdHEV2ZnVJ8AwoBMVlqxH80atJnk",
  authDomain: "ambeint-storez.firebaseapp.com",
  projectId: "ambeint-storez",
  storageBucket: "ambeint-storez.appspot.com",
  messagingSenderId: "286415150360",
  appId: "1:286415150360:web:24b2c55adf1c3868abd26d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);