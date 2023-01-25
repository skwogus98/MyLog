//// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn0L9Qdx9RoW8sEMMfoR0ay7eikk7v4EA",
  authDomain: "mylog-d2e19.firebaseapp.com",
  projectId: "mylog-d2e19",
  storageBucket: "mylog-d2e19.appspot.com",
  messagingSenderId: "15678696794",
  appId: "1:15678696794:web:c50c9309b604b577711763",
  measurementId: "G-8QJ6PHKWBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);