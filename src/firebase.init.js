// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFzrR96t0ZbDGduKlu42VZAjPEv8svcow",
  authDomain: "ema-john-simple-8a327.firebaseapp.com",
  projectId: "ema-john-simple-8a327",
  storageBucket: "ema-john-simple-8a327.appspot.com",
  messagingSenderId: "113343478030",
  appId: "1:113343478030:web:fa93e3b1f2050444ed7f5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;