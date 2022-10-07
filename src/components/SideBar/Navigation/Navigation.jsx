import React from 'react';
import style from './Navigation.module.css';
import {NavLink} from "react-router-dom"


function Navigation(props) {
  const activeLink = ({isActive}) => isActive ? style.active : style.nav;
  /* let naviLinks = props.links.map(el => (<NavLink to={el.link}>{el.name}</NavLink>)) */
/* let navLinks = props.state.links
    .map((element, index) => (<Friend key={index} name={element.name} id={element.id} avatar={element.avatar}/>)) */   
  return(  
    <nav className={style.nav}>
        <ul>
          <li><NavLink to='/main' className={activeLink}>Profile</NavLink></li>
          <li><NavLink to='/dialogs' className={activeLink}>Dialogs</NavLink></li>
          <li><NavLink to='/users' className={activeLink}>Users</NavLink></li>
          <li><NavLink to='/news' className={activeLink}>News</NavLink></li>
          <li><NavLink to='/contacts' className={activeLink}>Contacts</NavLink></li>
        </ul>
    </nav>
  )
}
export default Navigation
