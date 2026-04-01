// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC8_HVQ2C_fzqixrm6YofNvdMG-2KOctl4",
    authDomain: "mi-app-d5bfb.firebaseapp.com",
    projectId: "mi-app-d5bfb",
    storageBucket: "mi-app-d5bfb.firebasestorage.app",
    messagingSenderId: "39164136940",
    appId: "1:39164136940:web:afb631936604a3d01f84c9"
  };
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);