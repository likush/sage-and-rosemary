import {getFirestore} from '@firebase/firestore';
import firebase, {initializeApp, getApp} from '@firebase/app';
import firebaseConfig from '@/services/firebase/config';


const createFirebaseApp = (config= firebaseConfig) => {
    try {
        return getApp();
    } catch (e) {
        return initializeApp(config);
    }
};

export const app = createFirebaseApp()
export const database = getFirestore(app);
export const firestore = getFirestore(app);
