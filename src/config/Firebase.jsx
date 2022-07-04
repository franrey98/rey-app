// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGzAxZqgHGkGDzVLf19m-Bh4b40qxB9CM",
    authDomain: "coder-react-8552c.firebaseapp.com",
    projectId: "coder-react-8552c",
    storageBucket: "coder-react-8552c.appspot.com",
    messagingSenderId: "1002870941192",
    appId: "1:1002870941192:web:3fe02cc78de265cf8293bd",
    measurementId: "G-6MN4LFNKXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Obtener una referencia a la base de datos
export const db = getFirestore(app);

export const collectionProd = collection(db, 'productos');
