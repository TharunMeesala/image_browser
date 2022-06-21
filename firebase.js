// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACwvgdaZYNkrEcXc1y-mS9LX18n0C1yvk",
  authDomain: "image-browser-d5620.firebaseapp.com",
  projectId: "image-browser-d5620",
  storageBucket: "image-browser-d5620.appspot.com",
  messagingSenderId: "1056073532760",
  appId: "1:1056073532760:web:bb03345c9fb704abf8112d",
  measurementId: "G-M9834FN2P9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);