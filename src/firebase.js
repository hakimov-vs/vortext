import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "vortext-5cfcd.firebaseapp.com",
  projectId: "vortext-5cfcd",
  storageBucket: "vortext-5cfcd.firebasestorage.app",
  messagingSenderId: "881486548071",
  appId: "1:881486548071:web:a50faf94ed7b94f2b198c2",
  measurementId: "G-DMSZZ52PFN"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore(app)

export { auth, db };