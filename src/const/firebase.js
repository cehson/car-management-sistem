// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDA-cCaa3Z83CP7aYFUYAvJEouR8M3-Ewg",
    authDomain: "carmanagementapp-45b0c.firebaseapp.com",
    projectId: "carmanagementapp-45b0c",
    storageBucket: "carmanagementapp-45b0c.appspot.com",
    messagingSenderId: "953832936185",
    appId: "1:953832936185:web:50052997a1f46434144828"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
