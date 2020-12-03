import React from 'react';
import style from './Friends.module.css';
import FriendItem from "./FriendItem/FriendItem";
import * as axios from "axios";
import userPhoto from './../../../../assets/image/user.png';

class Friends extends React.Component{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users/?page=1&count=6').then(response => {
            this.props.onSetFriends(response.data.items);
        });
    }

    render() {
        return <div className={style.Friends}>
            <div className={style.wrapper}>
                <h2 className={style.title}>Last registered</h2>
                <div className={style.friendItems}>
                    {this.props.friends.map(el => <FriendItem
                        key={el.id} id={el.id}
                        name={el.name}
                        photo={el.photo === null ? el.photo : userPhoto }/>)}
                </div>
            </div>
        </div>
    }
}

export default Friends;