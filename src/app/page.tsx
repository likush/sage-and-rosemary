import styles from "./page.module.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: replace to better place
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9hA-LTZ3AItBr1bIRkESafH2hBvfnstI",
    authDomain: "sage-and-rosemary-f2752.firebaseapp.com",
    projectId: "sage-and-rosemary-f2752",
    storageBucket: "sage-and-rosemary-f2752.appspot.com",
    messagingSenderId: "997680590060",
    appId: "1:997680590060:web:f6db68bbea269653fa89c9",
    measurementId: "G-9Y170JXKHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Sage and rosemary</p>
      </div>
    </main>
  );
}
