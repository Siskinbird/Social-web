import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";


function MyPosts(props) {

    let postsMessages = props.posts.map(post => (<Post message={post.message} likesCount={post.likesCount}/>))

    return(
        <section className="posts">
            <div>
                My posts
                <div className={style.posts_area}>
                    <textarea></textarea>
                    <button>New post</button>
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