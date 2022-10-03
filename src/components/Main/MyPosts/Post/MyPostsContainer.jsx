import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../../redux/mainReducer"
import MyPosts from "../MyPosts";

function MyPostsContainer(props) {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(onPostChangeActionCreator(text))
    }

    return(
        <MyPosts
            updateNewPostText={ onPostChange }
            addPost={addPost}
            posts={state.mainPage.posts}
            newPostText={state.mainPage.newPostText}/>
        )
    }
export default MyPostsContainer;