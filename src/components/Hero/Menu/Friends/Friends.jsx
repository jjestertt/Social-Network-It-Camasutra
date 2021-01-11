import React from 'react';
import style from './Friends.module.css';
import FriendItem from "./FriendItem/FriendItem";
import userPhoto from './../../../../assets/image/newPerson.svg';

const Friends = (props) => {
    return <div className={style.Friends}>
        <div className={style.wrapper}>
            <h2 className={style.title}>Last registered</h2>
            <div className={style.friendItems}>
                {props.friends.map(el => <FriendItem
                    key={el.id} id={el.id}
                    name={el.name}
                    photo={el.photo === null ? el.photo : userPhoto}/>)}
            </div>
        </div>
    </div>
}


export default Friends;