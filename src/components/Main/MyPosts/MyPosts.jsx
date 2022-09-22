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
                    <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                    <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                    <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
                    <Post message={postsData[3].message} likesCount={postsData[3].likesCount}/>
                    <Post message={postsData[4].message} likesCount={postsData[4].likesCount}/>
                    <Post message={postsData[5].message} likesCount={postsData[5].likesCount}/>
                </div>
            </div>
        </section>
    )
}
export default MyPosts;