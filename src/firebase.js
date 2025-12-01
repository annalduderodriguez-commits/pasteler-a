//Iniciar Firebase
import { initializeApp } from "firebase/app";
//base de datos
import { getFirestore } from "firebase/firestore";
//autenticacion
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXgbB3yK7aTWuFzBO55ibkU79JQfBPO9E",
  authDomain: "formulario-29ea2.firebaseapp.com",
  projectId: "formulario-29ea2",
  storageBucket: "formulario-29ea2.firebasestorage.app",
  messagingSenderId: "108395361850",
  appId: "1:108395361850:web:7f4b5e853ad3def5042703",
  measurementId: "G-RRH0Y61QRL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//exportaciones
export default app;
export { db, getAuth };