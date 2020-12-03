import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC} from "../../../redux/users-reducer";
import UsersPage from "./UsersPage";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);