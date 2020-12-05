import {connect} from "react-redux";
import Friends from './Friends'
import {setFriends} from "../../../../redux/friends-reduсer";

const mapStateToProps = (state) => {
    return {
        friends: state.friends.friends
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSetFriends: (users) => {
            dispatch(setFriends(users));
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;