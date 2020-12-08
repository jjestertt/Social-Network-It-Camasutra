import {connect} from "react-redux";
import {
    follow,
    unFollow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetch
} from "../../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import usersApi from "../../../api/usersApi";

class UsersPage extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetch(true);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetch(false);
                // this.props.setTotalUsersCount(data.totalCount); Покажет реальное количество пользователей
                this.props.setTotalUsersCount(400);
                this.props.setUsers(data.items);
            });
    }

    onSetCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetch(true);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetch(false);
                this.props.setUsers(data.items);
            });
    }

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onSetCurrentPage={this.onSetCurrentPage}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                isFetch={this.props.isFetch}
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
        isFetch: state.usersPage.isFetch
    }
}

export default connect(mapStateToProps, {
    follow, unFollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetch
})
(UsersPage);