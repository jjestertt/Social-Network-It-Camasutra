import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile} from "../../../redux/profile-reducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        // let userId = this.props.match.params.userId;
        // if (!userId) {
        //     userId = '13007';
        // }
        // profileApi.getUserProfile(userId).then(data => {
        //     this.props.setUserProfile(data);
        // });
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
    return { userProfile: state.profilePage.userProfile }
}

let withRouterDataUrlComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUsersProfile})(withRouterDataUrlComponent);