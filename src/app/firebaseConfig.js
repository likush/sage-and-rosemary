import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA9hA-LTZ3AItBr1bIRkESafH2hBvfnstI",
    authDomain: "sage-and-rosemary-f2752.firebaseapp.com",
    projectId: "sage-and-rosemary-f2752",
    storageBucket: "sage-and-rosemary-f2752.appspot.com",
    messagingSenderId: "997680590060",
    appId: "1:997680590060:web:f6db68bbea269653fa89c9",
    measurementId: "G-9Y170JXKHX"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database
