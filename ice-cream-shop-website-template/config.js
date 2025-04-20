// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCo5VdHav_Kwj407G7NqzKwvWBmjJe86Ds",
    authDomain: "product-3225c.firebaseapp.com",
    projectId: "product-3225c",
    storageBucket: "product-3225c.firebasestorage.app",
    messagingSenderId: "280064184289",
    appId: "1:280064184289:web:016872ee126a7724038ca0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;