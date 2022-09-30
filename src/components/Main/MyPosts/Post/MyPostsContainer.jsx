import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../../redux/mainReducer"
import MyPosts from "../MyPosts";

function MyPostsContainer(props) {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.dispatch(onPostChangeActionCreator(text))
    }

    return(
        <MyPosts updateNewPostText={ onPostChange } addPost={addPost}/>
    )
}
export default MyPostsContainer;