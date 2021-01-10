import React from 'react';
import style from './ProfileInfo.module.css';
import user from './../../../../assets/image/user.svg'
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {
    return (
        <div className={style.ProfileInfo}>
            <div className={style.description}>
                <img src={props.userProfile.photos.large ? props.userProfile.photos.large : user} alt=""
                     className={style.photo}/>
                <div className={style.name_wrapper}>
                    <p className={style.userName}>
                        {props.userProfile.fullName}
                    </p>
                    <ProfileStatus userStatus={props.userStatus}
                                   getUserProfileStatusFromSever={props.getUserProfileStatusFromSever}
                                   setUserProfileStatusToServer={props.setUserProfileStatusToServer}
                                   currentUserId={props.userProfile.userId}
                                   authUserId={props.authUserId}
                    />
                    <p className={style.lookJob}>{props.userProfile.lookingForAJob
                        ? props.userProfile.lookingForAJobDescription
                        : 'Работу не предлагать'}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;