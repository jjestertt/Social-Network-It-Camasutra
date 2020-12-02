import React from 'react';
import style from './Friends.module.css';
import FriendItem from "./FriendItem/FriendItem";
import * as axios from "axios";
import userPhoto from './../../../../assets/image/user.png';

const Friends = (props) => {
    if (props.friends.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users/1').then(response => {
            props.onSetFriends(response.data.items);
        });
    }


    let friends = props.friends.map(el => <FriendItem
        key={el.id} id={el.id}
        name={el.name}
        photo={el.photo === null ? userPhoto : el.photo}/>);

    return <div className={style.Friends}>
        <div className={style.wrapper}>
            <h2 className={style.title}>My Friends</h2>
            <div className={style.friendItems}>
                {friends}
            </div>
        </div>
    </div>
}

export default Friends;