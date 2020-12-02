import React from "react";
import style from "./UsersPage.module.css"
import * as axios from "axios";
import userPhoto from "../../../assets/image/user.png";

class UsersPage extends React.Component {
componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.onSetUsers(response.data.items);
            });
    }

    render() {
        return (
            <div className={style.wrapper}>
                {this.props.users.map(user => {
                    return (
                        <div className={style.user}>
                            <img src={user.photos.small === null ? userPhoto : user.photos.small}
                                 alt="" className={style.photo}/>
                            <div className={style.description}>
                                <h3 className={style.userName}>{user.name}</h3>
                                <p className={style.status}>{
                                    user.status === null
                                        ? 'Нет статуса'
                                        : user.status}
                                </p>
                                <p className={style.location}>"user.location"</p>
                                {user.isFollow
                                    ? <button className={style.button} onClick={() => {
                                        this.props.onUnFollow(user.id)
                                    }}>Un Follow</button>
                                    : <button className={style.button} onClick={() => {
                                        this.props.onFollow(user.id)
                                    }}>Follow</button>
                                }
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default UsersPage;