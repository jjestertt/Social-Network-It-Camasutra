import React from 'react';
import style from './Friends.module.css';
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {
    let friends = props.friends.map(el => <FriendItem key={el.id} id={el.id} name={el.name} photo={el.photo} />);

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