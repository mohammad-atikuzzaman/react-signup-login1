// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuCNmCgjnCdZ3beBcxUQTqDR5eUxs7bl8",
  authDomain: "react-signup-login-e102b.firebaseapp.com",
  projectId: "react-signup-login-e102b",
  storageBucket: "react-signup-login-e102b.appspot.com",
  messagingSenderId: "47452420205",
  appId: "1:47452420205:web:b0ea09ae37966d52c12764",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
