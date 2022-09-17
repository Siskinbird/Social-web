import React from "react";
import style from './Footer.module.css';

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.copyright}>
                <p>All Rights Reserved</p>
            </div>
        </footer>
    )
}
export default Footer;