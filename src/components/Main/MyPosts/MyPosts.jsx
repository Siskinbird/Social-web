import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";


function MyPosts() {

    let postsData = [
        {id: 1, message: "Hellow its my first post", likesCount: 17},
        {id: 2, message: 'Hello wi all dieng', likesCount: 21},
        {id: 3, message: 'In this fucking world war', likesCount: 11},
        {id: 4, message: 'Russia come', likesCount: 44},
        {id: 5, message: 'Run', likesCount: 98},
        {id: 6, message: 'Away', likesCount: 113} 
    ];

    let postsMessages = postsData.map(post => (<Post message={post.message} likesCount={post.likesCount}/>))

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