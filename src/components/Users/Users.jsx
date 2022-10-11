import React from "react";
import style from './Users.module.css'
import userPhoto from '../../../src/images/blank_user.png'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={style.users}>
            <div>Users component</div>
            {
                props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="image"/>
                </div>
                <div>
                    {user.followed ? <button
                        onClick={() => {
                            props.unfollow(user.id)
                        }}>Unfollow</button> : <button
                        onClick={() => {
                            props.follow(user.id)
                        }}>Follow</button>}
                </div>
            </span>
                    <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
                </div>)
            }
            <div className={style.pagination}>
                {pages.map(page => {
                    return <span key={page}
                                 className={props.currentPage === page ? style.selected : style.unselected}
                                 onClick={(event) => props.onPageChanged(page)}>{page}</span>
                })}
            </div>
        </div>
    )
}


export default Users;