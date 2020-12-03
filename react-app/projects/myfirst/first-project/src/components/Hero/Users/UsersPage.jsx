import React from "react";
import style from "./UsersPage.module.css"
import * as axios from "axios";
import userPhoto from "../../../assets/image/user.png";

class UsersPage extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                // this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setTotalUsersCount(100);
                this.props.onSetUsers(response.data.items);
            });
    }

    onSetCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.onSetUsers(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={style.wrapper}>
                <div className={style.pagination}>
                    {pages.map((page) => {
                        return (
                            <span key={page} onClick={() => {
                                this.onSetCurrentPage(page)
                            }}
                                  className={`${this.props.currentPage === page && style.activePage} ${style.pages}`}>{page}
                            </span>
                        )
                    })}
                </div>
                {this.props.users.map(user => {
                    return (
                        <div key={user.id} className={style.user}>
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
                                <p className={style.userId}>id: {user.id}</p>
                                {user.followed
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