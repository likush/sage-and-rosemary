import styles from './page.module.scss';
import DishesList from '@/app/components/DishesList/DishesList';
import Header from '@/app/components/Header/Header';


export default function Home() {

    return (
        <main className={styles.main}>
            <Header title={'Sage and rosemary'} />

            <DishesList/>
        </main>
    );
}
