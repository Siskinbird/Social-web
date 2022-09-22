import React from "react";
import MyPosts from './MyPosts/MyPosts'
import style from './Main.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Main(props) {
    return (
        <main>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </main>
    )
}

export default Main;