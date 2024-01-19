import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5n5vE3UwVl0XqBG8h7idjwvONTThw-0A",
  authDomain: "infinity-4cf63.firebaseapp.com",
  projectId: "infinity-4cf63",
  storageBucket: "infinity-4cf63.appspot.com",
  messagingSenderId: "510975642526",
  appId: "1:510975642526:web:9c3d51ef7b2e0a9e15248f",
  measurementId: "G-8MBED320KS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
