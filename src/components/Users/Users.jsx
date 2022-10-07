import React from "react";
import style from './Users.module.css'
import axios from "axios";
import userPhoto from '../../../src/images/blank_user.png'

function Users(props) {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items);
                });
        }
    }

    return (
        <div className={style.users}>
            <button onClick={getUsers}>Get users</button>
            <div>Users component</div>
            {
                props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="image"/>
                </div>
                <div>
                    {user.followed ? <button
                        onClick={ () => {props.unfollow(user.id)}}>Unfollow</button> : <button
                        onClick={ () => {props.follow(user.id)}}>Follow</button>}
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
        </div>
    )
}

export default Users;