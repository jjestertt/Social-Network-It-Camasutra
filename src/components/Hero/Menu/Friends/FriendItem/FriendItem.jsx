import React from 'react';
import style from './FriendItem.module.css';
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {

    let userName = props.name;
    if (userName.length > 6) {
        userName = userName.substr(0, 6);
    }

    return (
        <NavLink to={`/profile/${props.id}`} className={style.friendItem}>
            <img src={props.photo} className={style.photo} alt="This is me"/>
            <p className={style.name}>{userName}</p>
        </NavLink>
    );
}

export default FriendItem;