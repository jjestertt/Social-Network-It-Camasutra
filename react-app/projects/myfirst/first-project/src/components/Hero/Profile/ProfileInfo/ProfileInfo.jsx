import React from 'react';
import style from './ProfileInfo.module.css';
import user from './../../../../assets/image/user.png'
const ProfileInfo = (props) => {
    return (
        <div className={style.ProfileInfo}>
            {/*<div className={style.img}>*/}
            {/*    <img className={style.img_bg} src={props.imgURL} alt=""/>*/}
            {/*</div>*/}
            <div className={style.description}>
                <img src={props.userProfile.photos.large ? props.userProfile.photos.large : user} alt="" className={style.photo}/>
                <div className={style.name_wrapper}>
                    <p className={style.name}>
                        <span>Имя:</span> {props.userProfile.fullName}
                    </p>
                    <p className={style.description}>
                        <p>Обо мне: </p> {props.userProfile.aboutMe}
                    </p>
                    <p className={style.lookJob}>{props.userProfile.lookingForAJob
                        ? 'Работу ' + props.userProfile.lookingForAJobDescription
                        : ' не предлагать'}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;