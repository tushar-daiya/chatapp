import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from"firebase/auth";

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
const analytics = getAnalytics(app);