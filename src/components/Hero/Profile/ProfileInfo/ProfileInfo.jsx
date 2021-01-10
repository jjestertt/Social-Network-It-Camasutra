import React from 'react';
import style from './ProfileInfo.module.css';
import user from './../../../../assets/image/user.svg'
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {

    let obj = props.userProfile.contacts;
    let arr = []
    for (let key in obj) {
        if (obj[key]) {
            arr.push(<li className={style.contactListItem} key={key}>
                <a className={style.contactListLink}
                   href={obj[key]}>{key}</a></li>)
        }
    }
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
                    <div>
                        <span>Работа: </span>
                        <p className={style.lookJob}>{props.userProfile.lookingForAJob
                            ? props.userProfile.lookingForAJobDescription
                            : 'Трудоустроился'}</p>
                    </div>
                    <div className={style.aboutMe}>
                        <p className={style.aboutMeDescription}>Обо мне:</p>
                        <p className={style.aboutMeText}>{props.userProfile.aboutMe}</p>

                    </div>
                    <div className={style.contacts}>
                        <div>Контакты:</div>
                        <ul className={style.contactList}>
                            {arr}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;