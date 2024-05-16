'use client'; // This is a client component 👈🏽

import React, {useEffect, useState} from 'react';
import {getDishes} from '@/app/services/firebase/firestore';
import {Dishes} from '@/app/utils/types';


const Data = () => {
    const [dishes, setDishes] = useState<Dishes>([]);

    useEffect(() => {
        getDishes().then(dishes => {
            if (dishes.length > 0) {
                setDishes(dishes)
            }
        })
    }, [])


    return (
        <div>
            {dishes.length > 0 ?
                dishes.map((item, index) => <p key={index}>{item.category}</p>)
                : <div/>
            }
        </div>
    )
}

export default Data;
