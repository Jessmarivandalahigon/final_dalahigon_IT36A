// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmcNN7MwbnbwsN1hC7vozh3_tPxvH07Ac",
  authDomain: "euth-b2a14.firebaseapp.com",
  projectId: "euth-b2a14",
  storageBucket: "euth-b2a14.appspot.com",
  messagingSenderId: "577071033085",
  appId: "1:577071033085:web:b21f11e3d9baca0fadec94",
  measurementId: "G-19DWMRV64S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances