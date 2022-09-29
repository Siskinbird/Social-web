import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/mainReducer"

function MyPosts(props) {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(onPostChangeActionCreator(text))
    }

    let postsMessages = props.posts.map((post, index) => (<Post message={post.message} likesCount={post.likesCount} key={index}/>))

    return(
        <section className="posts">
            <div>
                My posts
                <div className={style.posts_area}>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
                    <button onClick={addPost}>New post</button>
                    <button>Remove</button>
                </div>
                <div className={style.posts}>
                    { postsMessages }
                </div>
            </div>
        </section>
    )
}
export default MyPosts;