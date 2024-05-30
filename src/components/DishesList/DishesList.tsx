'use client'; // This is a client component 👈🏽

import React from 'react';
import DishItem from '../DishItem/DishItem';
import styles from './DishesList.module.scss';
import {useFetchDishesQuery} from '@/redux/dishesApi';

const DishesList = (): React.JSX.Element => {

    const {data: dishes, isLoading} = useFetchDishesQuery()

    return (
        <div className={styles.dishesContainer}>
            {
                dishes &&
                dishes?.length > 0 &&
                dishes.map((category, index) => <DishItem {...category} key={index}/>)
            }
        </div>
    )
}

export default DishesList;
