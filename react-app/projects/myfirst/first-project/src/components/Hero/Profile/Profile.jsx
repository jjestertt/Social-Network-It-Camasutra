import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../General/Preloader";
import style from "./Profile.module.css"

const Profile = (props) => {
    if (!props.userProfile) {
        return <div className={style.preloaderWrapper}><Preloader /></div>
    }
    return (
        <div className="Profile">
            <ProfileInfo userProfile={props.userProfile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;