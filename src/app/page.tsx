import styles from './page.module.scss';
import React from 'react';
import DishesList from '../components/DishesList/DishesList';
import Header from '../components/Header/Header';

export default function Home() {

    return (
        <main className={styles.main}>
            <Header title={'Sage and rosemary'} />

            <DishesList/>
        </main>
    );
}
