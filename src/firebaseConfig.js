import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDncO6ICasyXYom40Z3fglfwOWSt3gBAuU",
  authDomain: "connectify-f98ff.firebaseapp.com",
  projectId: "connectify-f98ff",
  storageBucket: "connectify-f98ff.firebasestorage.app",
  messagingSenderId: "975175692900",
  appId: "1:975175692900:web:84b8e3b6aae3643f77e571",
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };