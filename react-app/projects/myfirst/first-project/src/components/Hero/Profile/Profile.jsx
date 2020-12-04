import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../General/Preloader";

const Profile = (props) => {
    if(!props.userProfile) {
       return <Preloader />
    }
    return (
        <div className="Profile">
            <ProfileInfo userProfile={props.userProfile}/>

            <MyPostsContainer />
        </div>
    );
}

export default Profile;