import React from "react";
import MyPosts from './MyPosts/MyPosts'
import style from './Main.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Main() {
    return (
        <main>
            <ProfileInfo />
            <MyPosts />
        </main>
    )
}

export default Main;