import React from "react";
import {connect} from "react-redux";
import ProfileStatus from "./ProfileStatus";
import {getUserProfileStatus, setUserProfileStatus} from "../../../../../redux/profile-reducer";


class ProfileStatusContainer extends React.Component{
    componentDidMount() {
        getUserProfileStatus(2);
    }

    render() {
        return(<ProfileStatus {...this.props} />)
    }
}

let mapStateToProps = (state) => {
    return {
        userProfileStatus: state.profilePage.userProfileStatus
    }
}
export default connect(mapStateToProps, {setUserProfileStatus})(ProfileStatusContainer);