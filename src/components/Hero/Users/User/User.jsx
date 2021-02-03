import React from "react";
import style from "./User.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../../assets/image/user.svg";

const User = ({user, followingProgress, follow, unFollow}, ...props) => {
    return (
        <div className={style.user}>
            <NavLink to={`/profile/${user.id}`}><img
                src={user.photos.small === null ? userPhoto : user.photos.small}
                alt="" className={style.photo}/></NavLink>
            <div className={style.description}>
                <h3 className={style.userName}>{user.name}</h3>
                <p className={style.status}>{user.status === null ? 'Добавьте статус' : user.status}</p>
                <p className={style.userId}>id: {user.id}</p>
                {user.followed
                    ? <button className={style.button}
                              disabled={followingProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unFollow(user.id);
                              }}>Unfollow</button>
                    : <button className={style.button}
                              disabled={followingProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id);
                              }}>Follow</button>
                }
            </div>
        </div>
    )
}

export default User;