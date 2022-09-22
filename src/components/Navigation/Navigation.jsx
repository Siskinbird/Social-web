import React from 'react';
import style from './Navigation.module.css';
import {NavLink} from "react-router-dom"


function Navigation() {
  const activeLink = ({isActive}) => isActive ? style.active : style.nav;   
  return(  
    <nav className={style.nav}>
        <ul>
          <li><NavLink to='/main' className={activeLink}>Profile</NavLink></li>
          <li><NavLink to='/dialogs' className={activeLink}>Blog</NavLink></li>
          <li><NavLink to='/portfolio' className={activeLink}>Portfolio</NavLink></li>
          <li><NavLink to='/contacts' className={activeLink}>Contacts</NavLink></li>
        </ul>
    </nav>
    )
}
export default Navigation
