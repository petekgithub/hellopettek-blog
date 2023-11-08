// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "hellopettekblog.firebaseapp.com",
  projectId: "hellopettekblog",
  storageBucket: "hellopettekblog.appspot.com",
  messagingSenderId: "902896465257",
  appId: "1:902896465257:web:959cb8b965380c456ff9f8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
