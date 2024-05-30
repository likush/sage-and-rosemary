'use client'; // This is a client component 👈🏽

import React from 'react';
import DishItem from '../DishItem/DishItem';
import styles from './DishesList.module.scss';
import {useFetchDishesQuery} from '@/redux/dishesApi';
import Loader from '@/components/Loader/Loader';

const DishesList = (): React.JSX.Element => {
    const {data: dishes, error, isLoading} = useFetchDishesQuery();

    if (isLoading) return <Loader/>;
    if (error) return <p>{error?.message}</p>;

    return (
        <div>
            {
                dishes &&
                dishes?.length > 0 &&
                <div className={styles.dishesContainer}>

                    {dishes?.map((category, index) => <DishItem {...category} key={index}/>)}

                </div>
            }
        </div>
    )
}

export default DishesList;
