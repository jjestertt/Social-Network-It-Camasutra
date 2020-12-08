import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import profileApi from "../../../api/profileApi";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '13007';
        }
        profileApi.getUserProfile(userId).then(data => {
            this.props.setUserProfile(data);
        })
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
export default connect(mapStateToProps, {setUserProfile})(withRouterDataUrlComponent);