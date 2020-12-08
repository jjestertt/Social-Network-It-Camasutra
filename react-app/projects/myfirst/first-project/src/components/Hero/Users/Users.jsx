import style from "./Users.module.css";
import userPhoto from "../../../assets/image/user.png";
import React from "react";
import Preloader from "../../General/Preloader";
import {NavLink} from "react-router-dom";
import usersApi from "../../../api/usersApi";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={style.wrapper}>
            {props.isFetch ? <div className={style.preloaderWrapper}><Preloader /></div>
                : null}

            <div className={style.pagination}>
                {pages.map((page) => {
                    return (
                        <span key={page} onClick={() => {
                            props.onSetCurrentPage(page)
                        }}
                              className={`${props.currentPage === page && style.activePage} ${style.pages}`}>{page}
                            </span>
                    )
                })}
            </div>
            {props.users.map(user => {
                return (
                    <div key={user.id} className={style.user}>
                        <NavLink to={`/profile/${user.id}`}><img
                            src={user.photos.small === null ? userPhoto : user.photos.small}
                            alt="" className={style.photo}/></NavLink>
                        <div className={style.description}>
                            <h3 className={style.userName}>{user.name}</h3>
                            <p className={style.status}>{
                                user.status === null
                                    ? 'Нет статуса'
                                    : user.status}
                            </p>
                            <p className={style.location}>"user.location"</p>
                            <p className={style.userId}>id: {user.id}</p>
                            {user.followed
                                ? <button className={style.button} onClick={() => {
                                    usersApi.unFollowUser(user.id).then(data => {
                                        if(data.resultCode === 0) {
                                            props.unFollow(user.id)
                                        }
                                    });
                                }}>Unfollow</button>
                                : <button className={style.button} onClick={() => {
                                    usersApi.followUser(user.id).then(data => {
                                        if(data.resultCode === 0) {
                                            props.follow(user.id)
                                        }
                                    });
                                }}>Follow</button>
                            }
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default Users;