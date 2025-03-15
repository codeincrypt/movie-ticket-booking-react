import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_YOUR_API_KEY,
  authDomain: import.meta.env.REACT_APP_YOUR_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_APP_YOUR_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_YOUR_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_YOUR_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_YOUR_APP_ID,
  measurementId: import.meta.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);