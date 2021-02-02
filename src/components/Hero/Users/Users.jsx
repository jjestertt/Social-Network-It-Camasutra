import style from "./Users.module.css";
import userPhoto from "../../../assets/image/user.svg";
import React from "react";
import Preloader from "../../General/Preloader";
import {NavLink} from "react-router-dom";


const Users = (props) => {
    /*Прелоадер*/
    if(props.isFetch){
        return <Preloader/>
    }
    return (
        <div className={style.wrapper}>
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
                                ? <button className={style.button}
                                          disabled={props.followingProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              props.unFollow(user.id);
                                          }}>Unfollow</button>
                                : <button className={style.button}
                                          disabled={props.followingProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              props.follow(user.id);
                                          }}>Follow</button>
                            }
                        </div>
                    </div>
                );
            })}
            {/*Пагинация*/}
            <div className={style.pagination}>
                {props.pages.map((page) => {
                    return (
                        <span key={page} className={`${props.currentPage === page && style.activePage} ${style.pages}`}
                              onClick={() => {
                                  props.onSetCurrentPage(page)
                              }}>
                            {page}
                            </span>
                    )
                })}
            </div>
            <span className={style.totalUsersCount}>Всего Пользователей: {props.totalUsersCount}</span>
        </div>
    );
}
export default Users;