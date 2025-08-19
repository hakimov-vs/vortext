import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIRBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIRBASE_PROJECTID.VITE_FIRBASE_STORAGEBUCKET ,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGESENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASSURMENTID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth(app);

export { auth, db };