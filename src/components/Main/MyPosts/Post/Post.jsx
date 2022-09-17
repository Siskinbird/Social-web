import React from "react";
import style from "./Post.module.css";


function Post() {
    return(
        <section className="post">
            <div className={style.item}>
                <img src="https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg"/>
                Post 1
            </div>
        </section>
    )
}
export default Post;