import style from "./ProfileAboutMe.module.css"
import edit from "../../../../../assets/image/edit.svg";
import React from "react";
import {useState} from "react";
import {connect} from "react-redux";
import {setUserProfileAboutMe} from "../../../../../redux/profile-reducer";
import ReduxFormAboutMe from "./FormAboutMe/FormAboutMe";

const ProfileAboutMe = (props) => {
    let [editMode, setEditMode] = useState(false);

    const onEditMode = () => {
        setEditMode(true);
    }
    const offEditMode = () => {
        setEditMode(false);
    }
    const onSubmit = (formData) => {
        offEditMode();
        props.setUserProfileAboutMe(formData.aboutMe)
    }
    if (!editMode) {
        return (
            <div className={style.aboutMe}>
                <p className={style.aboutMeDescription}>Обо мне:</p>
                <div>
                    <img onClick={() => {
                        onEditMode()
                    }} className={style.editIcon} src={edit} alt=""/>
                    <p className={style.aboutMeText}>{props.aboutMe}</p>
                </div>
            </div>
        );
    }
    return (
        <ReduxFormAboutMe aboutMe={props.aboutMe}  onSubmit={onSubmit}/>
    )
}

const mapStateToProps = (state) => {
    return {
        aboutMe: state.profilePage.userProfile.aboutMe
    }
}
export default connect(mapStateToProps, {setUserProfileAboutMe})(ProfileAboutMe)