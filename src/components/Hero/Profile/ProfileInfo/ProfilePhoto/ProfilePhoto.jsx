import React from "react";
import style from "./ProfilePhoto.module.css";
import user from "../../../../../assets/image/user.svg";

const ProfilePhoto = (props) => {
    //imitation click on input *****************************
    const updateUserPhotoRef = React.createRef();
    const onClickCustomInput = () => {
        updateUserPhotoRef.current.click();
    }
    //*******************************************************

    const updateUserPhoto = (event) => {
        if (event.target.files[0]) {
            props.updateUserPhoto(event.target.files[0])
        }
    }

    return (
        <div className={style.profilePhoto}>
            <img src={props.userProfile.photos.large ? props.userProfile.photos.large : user} alt=""
                 className={style.photo}/>
            {props.myPage
            && <div>
                <input style={{display: "none"}} ref={updateUserPhotoRef}
                       type="file" accept=".png, .jpg, .jpeg"
                       onChange={updateUserPhoto}/>
                <span className={style.updateUserPhotoBtn} onClick={onClickCustomInput}>Обновить фото</span>
            </div>
            }
        </div>
    )
}

export default ProfilePhoto;