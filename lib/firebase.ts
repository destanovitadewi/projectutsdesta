import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDu71ALXISXroKx7iKhrI1G4MCj2a91U9o",
  authDomain: "desta-portofolio.firebaseapp.com",
  projectId: "desta-portofolio",
  storageBucket: "desta-portofolio.appspot.com",
  messagingSenderId: "245323473422",
  appId: "1:245323473422:web:d6416d2414209a8a2f125f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { db };
