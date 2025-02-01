// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ4QsCUvMr4asGeGACFQAVVzPVlK4oZTI",
  authDomain: "dataprep-bi.firebaseapp.com",
  projectId: "dataprep-bi",
  storageBucket: "dataprep-bi.firebasestorage.app",
  messagingSenderId: "55151914100",
  appId: "1:55151914100:web:2fd56298bc95daf4737521"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
