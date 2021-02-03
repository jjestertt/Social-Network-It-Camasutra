import React from "react";
import style from "./Users.module.css";
import Preloader from "../../General/Preloader";
import User from "./User/User";


const Users = (props) => {
    /*Прелоадер*/
    if(props.isFetch){
        return <Preloader/>
    }
    return (
        <div className={style.wrapper}>
            {props.users.map(user => {
                return (
                    <User key={user.id}
                          user={user}
                          followingProgress={props.followingProgress}
                          follow={props.follow}
                          unFollow={props.unFollow}
                    />
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