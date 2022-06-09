import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyBPHUoGP2DGBRGYo6Y0RhZMrIciqjAJo-U",
    authDomain: "pwa-app-f662f.firebaseapp.com",
    projectId: "pwa-app-f662f",
    storageBucket: "pwa-app-f662f.appspot.com",
    messagingSenderId: "368233715021",
    appId: "1:368233715021:web:94d53d6e7ba7bc6f945304",
    measurementId: "G-163CPKNKJY"
  };
  
  // Initialize Firebase
  const firebaseApp=initializeApp(firebaseConfig);
  const messaging = getMessaging(firebaseApp);
export default messaging;