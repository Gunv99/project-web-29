// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXjn4uGz6BsIeCvrHQPVFU-8PZb3YbgUg",
  authDomain: "project-web-29-457d1.firebaseapp.com",
  projectId: "project-web-29-457d1",
  storageBucket: "project-web-29-457d1.appspot.com",
  messagingSenderId: "1024575210452",
  appId: "1:1024575210452:web:034a601572cd358e3e0c41",
  measurementId: "G-E0PW9Y28B1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);
