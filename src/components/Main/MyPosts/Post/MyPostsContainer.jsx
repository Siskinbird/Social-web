import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../../redux/mainReducer"
import MyPosts from "../MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.mainPage.posts,
        newPostText: state.mainPage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        newPostText: (text) => {
            dispatch(onPostChangeActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;