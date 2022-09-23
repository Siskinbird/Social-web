import React from "react";
import style from "./Friend.module.css"

function Friend(props) {
    return(
        <div className={style.friend}>
            <img src={props.avatar}/>
            <p>{props.name}</p>
        </div>
    )
}

export default Friend;