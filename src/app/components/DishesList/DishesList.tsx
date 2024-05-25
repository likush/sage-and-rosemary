'use client'; // This is a client component 👈🏽

import React, {useEffect, useState} from 'react';
import DishItem from '@/app/components/DishItem/DishItem';
import styles from './DishesList.module.scss';


import { useSelector, useDispatch } from '@/app/redux/store';
import {getDocs} from '@/app/services/firebase/firestore';


const DishesList = (props: {}): React.JSX.Element => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDocs());
    }, [dispatch]);

    const { dishes } = useSelector((state) => state.dishes);

    // const getData = async (): Promise<void> => {
    //     try {
    //         let dishes: DishesType;
    //
    //         const staleTime = localStorage.getItem('staleTime');
    //         const now = Date.now();
    //
    //         if (!staleTime || +staleTime < now) {
    //             dishes = await getDocs();
    //
    //             const date = new Date()
    //
    //             localStorage.setItem('staleTime', `${date.setDate(date.getDate() + 1)}`);
    //             localStorage.setItem('dishes', JSON.stringify(dishes));
    //         } else {
    //             const data = localStorage.getItem('dishes')
    //             dishes = data ? JSON.parse(data) : []
    //         }
    //
    //         setDishes(dishes)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }


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
