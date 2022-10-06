import React from "react";
import style from './Users.module.css'

function Users(props) {
    if (props.users.length === 0) {
    props.setUsers([
        {
        id: 0,
        photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
        followed: true,
        fullName: 'Dmitry C',
        status: 'Hello, im using...',
        location: {city: 'Moscow', country: 'Russia'}
    },
        { id: 1,
            photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
            followed: false,
            fullName: 'Valera C',
            status: 'God bless Russia...',
            location: {city: 'Moscow', country: 'Russia'}},
        { id: 2,
            photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
            followed: true,
            fullName: 'Sergey C',
            status: 'We are coming down...',
            location: {city: 'Moscow', country: 'Russia'}
        }
        ])
    }

    return (
        <div className={style.users}>
            <div>Users component</div>
            {
                props.users.map(user => <div key={user.id}>
            <span>
                <div><img src={user.photoUrl} alt="image"/></div>
                <div>
                    {user.followed ? <button
                        onClick={ () => {props.unfollow(user.id)}}>Unfollow</button> : <button
                        onClick={ () => {props.follow(user.id)}}>Follow</button>}
                </div>
            </span>
                    <span>
                <span>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </span>
            </span>
                </div>)
            }
        </div>)
}

export default Users;