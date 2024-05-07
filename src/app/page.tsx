import styles from './page.module.scss';
import Data from '@/app/components/Data';
import Header from '@/app/components/header/Header';


export default function Home() {

    return (
        <main className={styles.main}>
            <Header title={'Sage and rosemary'} />

            <Data/>
        </main>
    );
}
