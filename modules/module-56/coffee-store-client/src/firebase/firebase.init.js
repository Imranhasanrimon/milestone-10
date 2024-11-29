// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2p0QLHHtpaojuxRg22G9QANjSvXEeHzg",
    authDomain: "coffee-store-f9793.firebaseapp.com",
    projectId: "coffee-store-f9793",
    storageBucket: "coffee-store-f9793.firebasestorage.app",
    messagingSenderId: "949292714846",
    appId: "1:949292714846:web:f2b4031dc86a99b9789dcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);