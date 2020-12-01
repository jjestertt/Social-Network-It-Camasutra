import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../../redux/users-reducer";
import UsersPage from "./UsersPage";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);