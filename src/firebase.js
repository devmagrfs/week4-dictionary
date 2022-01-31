// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8SBTFzgx6Om6lmyt5EahUVyfcIjorFEA",
    authDomain: "week4-word-project.firebaseapp.com",
    projectId: "week4-word-project",
    storageBucket: "week4-word-project.appspot.com",
    messagingSenderId: "950474961186",
    appId: "1:950474961186:web:df39b5718b3e187829f57b",
    measurementId: "G-ZNVE1DGZKB"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
