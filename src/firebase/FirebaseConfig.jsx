// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuSseUwstde90kzpUmU_MVXeDKE7-DCfg",
  authDomain: "ecommerce-5c02a.firebaseapp.com",
  projectId: "ecommerce-5c02a",
  storageBucket: "ecommerce-5c02a.appspot.com",
  messagingSenderId: "269339091621",
  appId: "1:269339091621:web:f50effff1fd985e207634c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;