import { initializeApp } from "firebase/app";
import {getAuth} from"firebase/auth";
import{getStorage} from "firebase/storage"
import{getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA346IaEvFRJLknPF5vf2fAoQEX2AfW_1M",
  authDomain: "chatapp-d9917.firebaseapp.com",
  projectId: "chatapp-d9917",
  storageBucket: "chatapp-d9917.appspot.com",
  messagingSenderId: "112583892947",
  appId: "1:112583892947:web:e2adb5371ecfc7d6189926",
  measurementId: "G-Y7CGPDZ2CH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage(app);
export const db=getFirestore(app);