






import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJYJOnHqGsQ0shdqbVAnNAOXoldSNR0fM",
  authDomain: "final-finance-tracker.firebaseapp.com",
  projectId: "final-finance-tracker",
  storageBucket: "final-finance-tracker.appspot.com",
  messagingSenderId: "459736735431",
  appId: "1:459736735431:web:f8be5fde178baeda7da8e2",
  measurementId: "G-2RLWSLK0J6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
 export { db, auth, provider, doc, setDoc };




 
