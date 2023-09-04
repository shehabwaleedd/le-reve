// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAD9Q_0XVY1SGoIubW751MYv1X--6oahc",
    authDomain: "ilreve-bc072.firebaseapp.com",
    projectId: "ilreve-bc072",
    storageBucket: "ilreve-bc072.appspot.com",
    messagingSenderId: "596108512007",
    appId: "1:596108512007:web:d2c758bf137615326c13a2",
    measurementId: "G-61TKPBST90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
