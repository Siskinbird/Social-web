import React from "react";

import style from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div className="profileInfo">
            <div className={style.head__img}></div>
            <div className={style.author__body}>
                <div className={style.author__avatar}/>
                <div className={style.author__description}>
                    <h2>Dmitry Chizhov</h2>
                    <p>Date of burn: 12.10.1986</p>
                    <p>City: Moscow</p>
                    <p>Education: Crunch univercity</p>
                    <p>Web Site: <a href="https://dmich.ru">dmich.ru</a></p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;