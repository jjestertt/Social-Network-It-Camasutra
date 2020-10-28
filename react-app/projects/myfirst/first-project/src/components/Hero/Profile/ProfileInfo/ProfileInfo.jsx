import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={style.ProfileInfo}>
            <div className={style.img}>
                <img className={style.img_bg} src={props.imgURL} alt=""/>
            </div>
            <div className={style.description}>
                <img src={props.photoURL} alt="" className={style.photo}/>
                <div className={style.name_wrapper}>
                    <p className={style.name}>
                        <span>Имя:</span> {props.name}
                    </p>
                    <p className={style.description}>
                        <span>Описание профиля:</span> {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;