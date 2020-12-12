import {connect} from "react-redux";
import {
    follow,
    unFollow,
    setFollowingProgress,
    getUsers
} from "../../../redux/users-reducer";
import React from "react";
import Users from "./Users";

class UsersPage extends React.Component {
    componentDidMount() {
        // this.props.toggleIsFetch(true);
        // usersApi.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetch(false);
        //         // this.props.setTotalUsersCount(data.totalCount); Покажет реальное количество пользователей
        //         this.props.setTotalUsersCount(400);
        //         this.props.setUsers(data.items);
        //     });
        //Заменяем на thunk
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onSetCurrentPage = (page) => {
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                isFetch={this.props.isFetch}
                followingProgress={this.props.followingProgress}
                onSetCurrentPage={this.onSetCurrentPage}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
            />

        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetch: state.usersPage.isFetch,
        followingProgress: state.usersPage.followingProgress,
    }
}

export default connect(mapStateToProps, {
    follow, unFollow, getUsers
})
(UsersPage);