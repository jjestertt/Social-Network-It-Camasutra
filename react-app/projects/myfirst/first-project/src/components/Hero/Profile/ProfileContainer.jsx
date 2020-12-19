import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersProfile(this.props.match.params.userId);
    }

    componentDidUpdate() {
        this.props.getUsersProfile(this.props.match.params.userId);
    }

    render() {
        return (
            <Profile {...this.props} userProfile={this.props.userProfile}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
    }
}


//**********************************************************************************************************
export default compose(
    connect(mapStateToProps, {getUsersProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
//
// The same
// let profileRedirect = withAuthRedirect(ProfileContainer);
// let withRouterDataUrlComponent = withRouter(profileRedirect);
// export default connect(mapStateToProps, {getUsersProfile})(withRouterDataUrlComponent);
//**********************************************************************************************************