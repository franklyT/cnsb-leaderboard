import styles from './Footer.module.scss';
import React from "react";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <span> Code Ninjas Saddle Brook © {(new Date()).getFullYear()}. All Rights Reserved. </span>
        </footer>
    )
}

export default React.memo(Footer);