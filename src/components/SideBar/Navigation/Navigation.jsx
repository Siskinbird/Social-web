import React from 'react';
import style from './Navigation.module.css';
import {NavLink} from "react-router-dom"


function Navigation(props) {
  const activeLink = ({isActive}) => isActive ? style.active : style.nav;
/*   let navLinks = props.posts.map(post => (<Post message={post.message} likesCount={post.likesCount}/>)) */   
  return(  
    <nav className={style.nav}>
        <ul>
          <li><NavLink to='/main' className={activeLink}>Profile</NavLink></li>
          <li><NavLink to='/dialogs' className={activeLink}>Dialogs</NavLink></li>
          <li><NavLink to='/portfolio' className={activeLink}>Portfolio</NavLink></li>
          <li><NavLink to='/contacts' className={activeLink}>Contacts</NavLink></li>
        </ul>
    </nav>
  )
}
export default Navigation
