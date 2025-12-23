import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB5ETR3k0tqExX1ibV_wjOHFWAZ1upRuG4",
  authDomain: "coffee-spark-ai-barista-9f911.firebaseapp.com",
  projectId: "coffee-spark-ai-barista-9f911",
  storageBucket: "coffee-spark-ai-barista-9f911.firebasestorage.app",
  messagingSenderId: "563277943028",
  appId: "1:563277943028:web:2a13b27270a76123240ea1"
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




