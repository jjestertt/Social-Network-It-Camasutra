import React from "react";
import style from "./Users.module.css";
import Preloader from "../../Common/Preloader";
import User from "./User/User";
import Pagination from "../../Common/Pagination/Pagination";


const Users = (props) => {
    /*Прелоадер*/
    if(props.isFetch){
        return <Preloader/>
    }
    return (
        <div className={style.wrapper}>
            {/*Пагинация*/}
            <Pagination pages={props.pages} currentPage={props.currentPage}
                        onSetCurrentPage={props.onSetCurrentPage}
                        totalItemsCount={props.totalUsersCount}
                        pageSize={props.pageSize}
            />
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
            <span className={style.totalUsersCount}>Всего Пользователей: {props.totalUsersCount}</span>
        </div>
    );
}
export default Users;