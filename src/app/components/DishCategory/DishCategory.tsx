import React from 'react';
import {DishCategoryType} from '@/app/utils/types';
import styles from './DishCategory.module.scss';


// type DishCategoryProps = DishCategoryType;

const DishCategory = (props: DishCategoryType): React.JSX.Element => {
    const {category, dishes} = props;

    return (
        <div className={styles.container}>
            <p className={styles.title}>{category}</p>

            {dishes.map((dish, index) => (
                <div key={index} className={styles.dish}>
                    <p className={styles.dishTitle}>{dish.title}</p>
                    <p className={styles.dishDescription}>{dish.description}</p>
                </div>
            ))}
        </div>
    )
}

export default DishCategory;
