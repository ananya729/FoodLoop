import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnLruiT0J_gPFKRVKq9VVC6nx_iqlPjwg",
  authDomain: "foodloop-f7d60.firebaseapp.com",
  projectId: "foodloop-f7d60",
  storageBucket: "foodloop-f7d60.appspot.com",
  messagingSenderId: "402279630425",
  appId: "1:402279630425:web:bc65a80e8b487508181348",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
