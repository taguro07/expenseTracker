import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDE1od-H-wNu9lzf-eh1cfQIC-7lPAuFtc",

  authDomain: "expense-tracker-936e4.firebaseapp.com",

  projectId: "expense-tracker-936e4",

  storageBucket: "expense-tracker-936e4.appspot.com",

  messagingSenderId: "605364080043",

  appId: "1:605364080043:web:4b85764d3ad118a08d96ee",

  measurementId: "G-BREP4M2MFY"

};


initializeApp(firebaseConfig);

const db = getFirestore();
export default db