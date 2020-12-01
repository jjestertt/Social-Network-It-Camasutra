import React from "react";
import style from "./UsersPage.module.css"
import * as axios from "axios";
import userPhoto from "../../../assets/image/user.png";

const UsersPage = (props) => {
    if (props.users.length === 0) {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
            props.onSetUsers(response.data.items);
        })

    }

    let users = props.users.map(user => {
        return (
            <div className={style.user}>
                <img src={userPhoto}
                     alt="" className={style.photo}/>
                <div className={style.description}>
                    <h3 className={style.userName}>{user.name}</h3>
                    <p className={style.status}>{
                        user.status === null
                            ? 'Нет статуса'
                            : user.status}
                    </p>
                    <p className={style.location}>{user.location}</p>
                    {user.isFollow
                        ? <button onClick={() => {props.onUnFollow(user.id)}}>Un Follow</button>
                        : <button onClick={() => {props.onFollow(user.id)}}>Follow</button>
                    }
                </div>
            </div>
        )
    })
    return (
        <div className={style.wrapper}>
            {users}
        </div>
    )
}
export default UsersPage;