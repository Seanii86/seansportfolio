// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw97tqO1u-uOzlfYZvE53LNpf2ZDx6u8c",
  authDomain: "portfolio-dashboard-e7859.firebaseapp.com",
  projectId: "portfolio-dashboard-e7859",
  storageBucket: "portfolio-dashboard-e7859.appspot.com",
  messagingSenderId: "555089536025",
  appId: "1:555089536025:web:ec173791bbffae585d7688"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInGoogle = () => signInWithPopup(auth, provider)