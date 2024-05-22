'use client'; // This is a client component 👈🏽

import React, {useEffect, useState} from 'react';
import DishItem from '@/app/components/DishItem/DishItem';
import styles from './DishesList.module.scss';

import {getDishes} from '@/app/services/firebase/firestore';
import {DishesType} from '@/app/utils/types';


const DishesList = (props: {}): React.JSX.Element => {
    const [dishes, setDishes] = useState<DishesType>([]);

    useEffect(() => {
        getDishes()
            .then(dishes => {
                if (dishes.length > 0) {
                    setDishes(dishes)
                }
            })
        // todo: handling errors
    }, [])


    return (
        <div className={styles.dishesContainer}>
            {
                dishes.length > 0 &&
                dishes.map((category, index) => <DishItem {...category} key={index}/>)
            }
        </div>
    )
}

export default DishesList;
