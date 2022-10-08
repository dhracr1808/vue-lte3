import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyC_JpeVV2MnLK9TBlof277sMoava-Mvuuo",
  authDomain: "facturacion-904b1.firebaseapp.com",
  projectId: "facturacion-904b1",
  storageBucket: "facturacion-904b1.appspot.com",
  messagingSenderId: "450469560653",
  appId: "1:450469560653:web:4831ebfa74f344d844b704",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db };
