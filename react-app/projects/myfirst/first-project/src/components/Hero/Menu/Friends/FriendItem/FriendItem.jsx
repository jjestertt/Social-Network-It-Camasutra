import React from 'react';
import style from './FriendItem.module.css';
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {
    return(
        <NavLink to={`/profile/${props.id}`} className={style.friendItem}>
            <img src={props.photo} className={style.photo}></img>
            <p className={style.name}>{props.name}</p>
        </NavLink>
    )
}

export default FriendItem;