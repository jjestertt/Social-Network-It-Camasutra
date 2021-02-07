import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../Common/Preloader";


const Profile = (props) => {
    if (!props.userProfile) {
        return <Preloader/>
    }
    return (
        <div className="Profile">
            <ProfileInfo
                myPage={!props.match.params.userId}
                userProfile={props.userProfile}
                userStatus={props.userStatus}
                getUserProfileStatusFromSever={props.getUserProfileStatusFromSever}
                setUserProfileStatusToServer={props.setUserProfileStatusToServer}
                updateUserPhoto={props.updateUserPhoto}
                authUserId={props.authUserId}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;