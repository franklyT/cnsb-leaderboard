import styles from './Header.module.scss';
import banner from './images/cnsb-banner.png';
import React from "react";

export function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.banner} src={banner} alt="Code Ninjas Banner" />
        </header>
    )
}

export default React.memo(Header);