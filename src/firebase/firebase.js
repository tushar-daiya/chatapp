import { initializeApp } from "firebase/app";
import {getAuth} from"firebase/auth";
import{getStorage} from "firebase/storage"
import{getFirestore} from "firebase/firestore"
console.log(process.env)
console.log(process.env.REACT_APP_APP_ID)
console.log(process.env.REACT_APP_API_KEY)
console.log(process.env.REACT_APP_AUTH_DOMAIN)
console.log(process.env.REACT_APP_MESSAGING_SENDER_ID)
console.log(process.env.REACT_APP_PROJECT_ID)
console.log(process.env.REACT_APP_STORAGE_BUCKET)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-Y7CGPDZ2CH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage(app);
export const db=getFirestore(app);