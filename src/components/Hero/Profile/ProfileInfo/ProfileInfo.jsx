import React from "react";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileAboutMe from "./ProfileAboutMe/ProfileAboutMe";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";


const ProfileInfo = (props) => {
    return (
        <div className={style.ProfileInfo}>
            <div className={style.description}>
                <ProfilePhoto userProfile={props.userProfile}
                              myOwnPage={props.myOwnPage}
                              updateUserPhoto={props.updateUserPhoto}/>
                <div className={style.nameWrapper}>
                    <p className={style.userName}>
                        {props.userProfile.fullName}
                    </p>
                    <ProfileStatus userStatus={props.userStatus}
                                   getUserProfileStatusFromSever={props.getUserProfileStatusFromSever}
                                   setUserProfileStatusToServer={props.setUserProfileStatusToServer}
                                   currentUserId={props.userProfile.userId}
                                   authUserId={props.authUserId}
                    />
                    <ProfileAboutMe userProfile={props.userProfile} myOwnPage={props.myOwnPage}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;