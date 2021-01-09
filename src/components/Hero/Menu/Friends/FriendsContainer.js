import {connect} from "react-redux";
import Friends from './Friends'
import {getFriends} from "../../../../redux/friends-reduсer";
import React from "react";

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return <Friends friends={this.props.friends}/>
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends.friends
    }
}


export default connect(mapStateToProps, {getFriends})(FriendsContainer);