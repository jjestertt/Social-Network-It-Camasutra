import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileStatusFromSever,
    getUsersProfile,
    setUserProfileStatusToServer
} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = this.props.authUserId;
        }

        this.props.getUsersProfile(userId);
        this.props.getUserProfileStatusFromSever(userId);
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        authUserId : state.auth.id,
        userProfile: state.profilePage.userProfile,
        userStatus: state.profilePage.userProfileStatus,
    }
}


//**********************************************************************************************************
export default compose(
    connect(mapStateToProps, {getUsersProfile, getUserProfileStatusFromSever, setUserProfileStatusToServer }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
//
// The same
// let profileRedirect = withAuthRedirect(ProfileContainer);
// let withRouterDataUrlComponent = withRouter(profileRedirect);
// export default connect(mapStateToProps, {getUsersProfile})(withRouterDataUrlComponent);
//**********************************************************************************************************