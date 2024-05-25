import {collection, doc, getDocs as getFirebaseDocs, getFirestore, setDoc} from '@firebase/firestore';
import {initializeApp} from '@firebase/app';
import {Dispatch} from '@reduxjs/toolkit';
import {getDishes} from '../../redux/slices/dishesSlice';

const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(config);
const database = getFirestore(app);

export const getDocs =  (): (dispatch: Dispatch) => Promise<void> => {
    return async (dispatch: Dispatch) => {
        try {
            const snapshot = await getFirebaseDocs(collection(database, 'dishes'));

            const result = snapshot.docs
                .map((doc) => {
                    const {data, order_display} = doc.data();
                    return ({category: doc.id, orderDisplay: order_display, dishes: data})
                })
                .sort((a, b) => a.orderDisplay - b.orderDisplay)


            dispatch(getDishes(result))
        } catch (error) {
            console.error("Error fetching card resources:", error);
        }
    };
}

// todo: refactor
export const setData = async (data: any) => {
    await setDoc(doc(database, 'dishes', 'soups'), data);
}