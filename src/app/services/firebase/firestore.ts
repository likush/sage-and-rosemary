import {collection, getDocs as getFirebaseDocs, getFirestore} from '@firebase/firestore';
import {DishCategory, Dishes} from '@/app/utils/types';
import {initializeApp} from '@firebase/app';

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

export const getDishes = async (): Promise<Dishes> => {
    const snapshot = await getFirebaseDocs(collection(database, 'dishes'));

    return snapshot.docs.map((doc) => {
        let dishes: DishCategory[] = []
        let value = doc.id;

        return ({
            category: value,
            dishes: [...dishes, doc.data()]
        } as DishCategory)
    })
}