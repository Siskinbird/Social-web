import React from 'react';
import style from './Navigation.module.css';

function Navigation() {
    return(
    <nav className={style.nav}>
        <ul>
          <li><a href='#'>Profile</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Portfolio</a></li>
          <li><a href='#'>Contacts</a></li>
        </ul>
    </nav>
    )
}
export default Navigation
