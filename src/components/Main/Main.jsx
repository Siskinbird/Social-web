import React from "react";
import MyPosts from './MyPosts/MyPosts'
import style from './Main.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { addPost } from "../../redux/state";

function Main(props) {
    return (
        <main>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} addPost={addPost}/>
        </main>
    )
}

export default Main;