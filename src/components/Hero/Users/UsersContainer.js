import {connect} from "react-redux";
import {
    follow,
    unFollow,
    responseUsers
} from "../../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetch, getPagesCount,
    getTotalUsersCountReally,
    getUsers
} from "../../../redux/users-reselect";

class UsersPage extends React.Component {
    componentDidMount() {
        this.props.responseUsers(this.props.currentPage, this.props.pageSize);
    }

    onSetCurrentPage = (page) => {
        this.props.responseUsers(page, this.props.pageSize);
    }


    render() {
        return (
            <Users
                totalUsersCountReally={this.props.totalUsersCountReally}
                currentPage={this.props.currentPage}
                users={this.props.users}
                isFetch={this.props.isFetch}
                followingProgress={this.props.followingProgress}
                onSetCurrentPage={this.onSetCurrentPage}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                pages={this.props.pages}
            />

        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetch: getIsFetch(state),
        users: getUsers(state),
        totalUsersCountReally: getTotalUsersCountReally(state),
        pages: getPagesCount(state),
        currentPage: getCurrentPage(state),
        followingProgress: getFollowingProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {follow, unFollow, responseUsers}),
    withAuthRedirect
)(UsersPage);
