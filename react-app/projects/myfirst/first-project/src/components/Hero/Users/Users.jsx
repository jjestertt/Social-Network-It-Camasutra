import style from "./Users.module.css";
import userPhoto from "../../../assets/image/user.png";
import React from "react";
import Preloader from "../../General/Preloader";
import {NavLink} from "react-router-dom";


const Users = (props) => {
    //Обязательно нужно округлить пагинацию в большую сторону
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={style.wrapper}>
            {/*Прелоадер*/}
            {props.isFetch
                ? <div className={style.preloaderWrapper}><Preloader/></div>
                : null
            }
            {/*Пагинация*/}
            <div className={style.pagination}>
                {pages.map((page) => {
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
            {/*Перебираем масив с юзерами из аякс запроса и возвращаем разметку*/}
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
                                ? <button className={style.button} style={{color: 'red'}}
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
            <span className={style.totalUsersCount}>Всего Пользователей: {props.totalUsersCountReally}</span>
        </div>
    );
}
export default Users;