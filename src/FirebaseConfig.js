// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1WsQa1ty8YKhBVxU670KBjPgyWmtbrTQ",
    authDomain: "bread-be67f.firebaseapp.com",
    projectId: "bread-be67f",
    storageBucket: "bread-be67f.appspot.com",
    messagingSenderId: "802898570066",
    appId: "1:802898570066:web:276bc26ad73c854bafa88b",
    measurementId: "G-31VPLP611V"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);
export default appFirebase