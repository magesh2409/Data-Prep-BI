// Import the functions you need from the SDKs you need
import { initializeApp , getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLRz8420u4jvIlTyHVgEBo1gslVowsXHw",
  authDomain: "dataprepbi-a92d3.firebaseapp.com",
  projectId: "dataprepbi-a92d3",
  storageBucket: "dataprepbi-a92d3.firebasestorage.app",
  messagingSenderId: "374923371331",
  appId: "1:374923371331:web:19a60ab9087aee52ed45f6"
};

// Initialize Firebase
const app = getApps().find(app => app.name === "DataPrepBI") || initializeApp(firebaseConfig, "DataPrepBI");

const db = getFirestore(app);

export default db;
