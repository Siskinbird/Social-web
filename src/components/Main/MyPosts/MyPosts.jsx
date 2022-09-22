import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";


function MyPosts() {
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
                    <Post message="Hellow its my first post"/>
                    <Post message="Hellow its my SECOND post"/>
                    <Post message="Hello WOrld im live"/>
                    <Post/>
                </div>
            </div>
        </section>
    )
}
export default MyPosts;