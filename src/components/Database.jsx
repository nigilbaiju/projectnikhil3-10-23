// Import the functions you need from the SDKs you need
import {getDatabase} from "firebase/database"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnhPA0yTCcVgIxeKaIDPHtkEeE8Esig0I",
  authDomain: "sample-77224.firebaseapp.com",
  databaseURL: "https://sample-77224-default-rtdb.firebaseio.com",
  projectId: "sample-77224",
  storageBucket: "sample-77224.appspot.com",
  messagingSenderId: "608032365939",
  appId: "1:608032365939:web:5a85055d626e919e1cf906",
  measurementId: "G-6J39NYRKDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getDatabase(app);
