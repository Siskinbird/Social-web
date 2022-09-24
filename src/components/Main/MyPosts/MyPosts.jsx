import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";


function MyPosts(props) {
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value ='';
    }

    let postsMessages = props.posts.map((post, index) => (<Post message={post.message} likesCount={post.likesCount} key={index}/>))

    return(
        <section className="posts">
            <div>
                My posts
                <div className={style.posts_area}>
                    <textarea ref={newPostElement}></textarea>
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