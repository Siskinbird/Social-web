import React from "react";
import style from './Dialog.module.css';
import {NavLink} from "react-router-dom";

function Dialog(props) {
    return(
        <div className={style.dialog}>
            <div className={style.display}>
                <img src={props.avatar} />
                <NavLink to={'/dialogs/' + props.id}>
                    <p>{props.name}</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Dialog;