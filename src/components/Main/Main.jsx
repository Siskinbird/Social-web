import React from "react";
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Main(props) {
    return (
        <main>
            <ProfileInfo />
            <MyPosts posts={props.mainPage.posts}
                newPostText={props.mainPage.newPostText}
                dispatch={props.dispatch}/>
        </main>
    )
}

export default Main;