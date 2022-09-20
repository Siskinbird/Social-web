import React from 'react';
import style from './Navigation.module.css';

function Navigation() {
    return(
    <nav className={style.nav}>
        <ul>
          <li><a href='/profile'>Profile</a></li>
          <li><a href='/blog'>Blog</a></li>
          <li><a href='/portfolio'>Portfolio</a></li>
          <li><a href='/contacts'>Contacts</a></li>
        </ul>
    </nav>
    )
}
export default Navigation
