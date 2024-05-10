'use client'; // This is a client component 👈🏽

import React, {useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import database from '@/app/firebaseConfig';


const Data = () => {
    const fetchPost = async () => {
        const snapshot = await getDocs(collection(database, 'dishes'));
        const data = snapshot.docs.map((doc) => {
            let dishes: any = []
            let value = doc.id;

            return ({[value]: [...dishes, doc.data()] })
        })

        console.log('data', data)
    }

    useEffect(() => {
        fetchPost().then()
    }, [])

    return <div/>
}

export default Data;
