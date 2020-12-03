import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchAC,
    unFollowAC
} from "../../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";

class UsersPage extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetch(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetch(false);
                // this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setTotalUsersCount(100);
                this.props.onSetUsers(response.data.items);
            });
    }
    onSetCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetch(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetch(false);
                this.props.onSetUsers(response.data.items);
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
                onUnFollow={this.props.onUnFollow}
                onFollow={this.props.onFollow}
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
const mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userId) => {
            dispatch(followAC(userId))
        },
        onUnFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        onSetUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },
        toggleIsFetch: (isFetch) => {
            dispatch(toggleIsFetchAC(isFetch));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);