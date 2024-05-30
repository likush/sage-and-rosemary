import React from 'react';
import styles from './Loader.module.scss';

type LoaderProps = {}

const Loader = (props: LoaderProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.loader}/>
            <div className={styles.loader}/>
            <div className={styles.loader}/>
        </div>
    )
};

export default Loader;
