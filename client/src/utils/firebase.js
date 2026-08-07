
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "realai-f192a.firebaseapp.com",
  projectId: "realai-f192a",
  storageBucket: "realai-f192a.firebasestorage.app",
  messagingSenderId: "634124617553",
  appId: "1:634124617553:web:492b8c9061c4ad26213570"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}