import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAzZglkB_434L102O_8azXZtqLBit8ZFc4",
  authDomain: "video-conference-67e6c.firebaseapp.com",
  projectId: "video-conference-67e6c",
  storageBucket: "video-conference-67e6c.appspot.com",
  messagingSenderId: "1056312621801",
  appId: "1:1056312621801:web:fe943ea78e5965d24b4e78",
  measurementId: "G-41XHBEY1JH",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
