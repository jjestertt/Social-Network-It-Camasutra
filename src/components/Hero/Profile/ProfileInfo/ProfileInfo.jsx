import React from "react";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileAboutMe from "./ProfileAboutMe/ProfileAboutMe";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";


const ProfileInfo = (props) => {


    let contacts = props.userProfile.contacts;
    let contactList = [];
    for (let key in contacts) {
        if (contacts[key]) {
            contactList.push(<li className={style.contactListItem} key={key}>
                <a className={style.contactListLink}
                   href={contacts[key]}>{key}</a></li>)
        }
    }

    return (
        <div className={style.ProfileInfo}>
            <div className={style.description}>
                <ProfilePhoto userProfile={props.userProfile}
                              myPage={props.myPage}
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
                    <div>
                        <span>Работа: </span>
                        <p className={style.lookJob}>{props.userProfile.lookingForAJob
                            ? props.userProfile.lookingForAJobDescription
                            : 'Трудоустроился'}</p>
                    </div>
                    <ProfileAboutMe/>
                    <div className={style.contacts}>
                        <div>Контакты:</div>
                        <ul className={style.contactList}>
                            {contactList}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;