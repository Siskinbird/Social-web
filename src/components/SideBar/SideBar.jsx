import React from 'react';
import style from './SideBar.module.css';
import {NavLink} from "react-router-dom"
import Navigation from './Navigation/Navigation';
import Friend from './Friends/Friend';

function SideBar(props) {
    //let state = props.sideBar

    //let friendsList = state.friends.map((element, index) => (<Friend key={index} name={element.name} id={element.id} avatar={element.avatar}/>))
  /* const activeLink = ({isActive}) => isActive ? style.active : style.nav; */
  return(
    <section className={style.sideBar}>
      <Navigation />
      <h4>Friends</h4>
      <div className={style.friends}>
          //TODO Здесь должен быть список друзей (friendList)
      </div>
    </section>    
  )
}
export default SideBar;
