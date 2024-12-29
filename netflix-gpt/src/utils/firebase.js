// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflixgpt-15f89.firebaseapp.com",
  projectId: "netflixgpt-15f89",
  storageBucket: "netflixgpt-15f89.firebasestorage.app",
  messagingSenderId: "107259745624",
  appId: "1:107259745624:web:43b3044364cc056445412d",
  measurementId: "G-20W9QMDZ8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

 export const auth = getAuth(app);