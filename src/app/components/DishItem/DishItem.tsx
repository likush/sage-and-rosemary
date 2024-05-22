import React from 'react';
import {DishCategoryType} from '@/app/utils/types';
import styles from './DishItem.module.scss';


// type DishCategoryProps = DishCategoryType;

const DishItem = (props: DishCategoryType): React.JSX.Element => {
    const {category, dishes} = props;

    return (
        <div className={styles.dishContainer}>
            <p className={styles.title}>{category}</p>

            {dishes && dishes.map((dish, index) => (
                <div key={index} className={styles.dish}>
                    <p className={styles.dishTitle}>{dish.title}</p>
                    <p className={styles.dishDescription}>{dish.description}</p>
                </div>
            ))}
        </div>
    )
}

export default DishItem;
