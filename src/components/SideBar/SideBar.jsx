import React from 'react';
import style from './SideBar.module.css';
import {NavLink} from "react-router-dom"
import Navigation from './Navigation/Navigation';
import Friend from './Friends/Friend';


function SideBar(props) {
  let friendsList = props.state.friends
    .map((element, index) => (<Friend key={index} name={element.name} id={element.id} avatar={element.avatar}/>))
  /* const activeLink = ({isActive}) => isActive ? style.active : style.nav; */
  return(
    <section className={style.sideBar}>
      <Navigation />
      <div className="friends">
        <h4>Friends</h4>
        {friendsList}
      </div>
    </section>    
  )
}
export default SideBar;
