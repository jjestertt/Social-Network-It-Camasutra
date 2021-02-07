import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileStatusFromSever,
    getUsersProfile,
    setUserProfileStatusToServer, updateUserPhoto
} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
        }
        this.props.getUsersProfile(userId);
        this.props.getUserProfileStatusFromSever(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        authUserId: state.auth.id,
        userProfile: state.profilePage.userProfile,
        userStatus: state.profilePage.userProfileStatus,
    }
}


//**********************************************************************************************************
export default compose(
    connect(mapStateToProps, {
        getUsersProfile, getUserProfileStatusFromSever,
        setUserProfileStatusToServer, updateUserPhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);


// The same
// let profileRedirect = withAuthRedirect(ProfileContainer);
// let withRouterDataUrlComponent = withRouter(profileRedirect);
// export default connect(mapStateToProps, {getUsersProfile})(withRouterDataUrlComponent);
//**********************************************************************************************************