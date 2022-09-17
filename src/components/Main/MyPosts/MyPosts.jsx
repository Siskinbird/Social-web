import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";


function MyPosts() {
    return(
        <section className="posts">
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>New post</button>
                    <button>Remove</button>
                </div>
                <div className={style.posts}>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </section>
    )
}
export default MyPosts;