import React from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className="profileInfo">
            {/*<div className={style.head__img}></div>*/}
            <div className={style.author__body}>
                <div className={style.author__avatar}>
                    <img src={props.profile.photos.large}/>
                </div>
            <div className={style.author__description}>
                    <h2>{props.profile.fullName}</h2>
                    <p>Vkontakte:
                        <NavLink to = {props.profile.contacts.vk}>{props.profile.contacts.vk}</NavLink></p>
                <p>Looking for a job: {props.profile.lookingForAJob ? <span>Yes</span> : <span>Not</span>}</p>
                    <p>Looking for a Job Description: {props.profile.lookingForAJobDescription}</p>
                    <p>Web Site:
                        <NavLink to = {props.profile.contacts.github}> {props.profile.contacts.github}</NavLink>
                    </p>
                <p>About me: {props.profile.aboutMe}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;