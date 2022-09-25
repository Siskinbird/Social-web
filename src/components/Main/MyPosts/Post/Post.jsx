import React from "react";
import style from "./Post.module.css";



function Post(props) {
    return(
        <section className="post">
            <div className={style.item}>
                <img src="https://www.youloveit.ru/uploads/posts/2020-04/1586360515_youloveit_ru_dipper_gravity_falls_na_avu02.jpg"/>
                {props.message}
            </div>
            <div>
                <button>Like: {props.likesCount}</button>
            </div>
        </section>
    )
}
export default Post;
