import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";

function Main(props) {
    return (
        <main>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </main>
    )
}

export default Main;