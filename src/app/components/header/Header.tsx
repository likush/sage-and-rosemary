import React from 'react';
import styles from './Header.module.scss';

type Props = {
    title: string;
}

const Header = ({title}: Props) => {
    return (
        <div>
            <h1 className={styles.header}>{title}</h1>
            <p className={styles.subheader}>Est. 2022</p>
        </div>
    );
};

export default Header;
