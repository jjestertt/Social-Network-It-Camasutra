import style from "./ProfileAboutMe.module.css"
import React from "react";
import {useState} from "react";
import {connect} from "react-redux";
import {setUserProfileAboutMe} from "../../../../../redux/profile-reducer";
import ProfileAboutMeReduxForm from "./ProfileAboutMeForm";
import Button from "../../../../Common/Buttons/Button";

const ProfileAboutMe = ({userProfile, myOwnPage, setUserProfileAboutMe}) => {
    const [editMode, setEditMode] = useState(false);

    const onEditMode = () => {
        setEditMode(true);
    }
    const offEditMode = () => {
        setEditMode(false);
    }
    const onSubmit = (formData) => {
        offEditMode();
        // setUserProfileAboutMe(formData.aboutMe)
        console.log(formData)
    }

    const contacts = userProfile.contacts;
    const contactList = Object.keys(contacts).map(key => {
        if (contacts[key]) {
            return (
                <li key={key} className={style.contactListItem}>
                    <a href={contacts[key]}>{key}</a>
                </li>
            );
        }
        return null
    });

    if (!editMode) {
        return (
            <div className={style.aboutMeWrapper}>
                <div className={style.changeProfileBtn}>
                    <Button innerText={"Редактировать"} onClick={onEditMode}/>
                </div>
                <div>
                    <div>Работа:</div>
                    <p className={style.lookJob}>{userProfile.lookingForAJob
                        ? userProfile.lookingForAJobDescription
                        : 'Трудоустроился'}</p>
                </div>
                <div className={style.aboutMe}>
                    <div className={style.aboutMeDescription}>Обо мне:</div>
                    <p className={style.aboutMeText}>{userProfile.aboutMe}</p>

                </div>
                <div className={style.contacts}>
                    <div className={style.contactListTitle}>Контакты:</div>
                    <ul className={style.contactList}>
                        {contactList}
                    </ul>
                </div>
            </div>

        );
    }
    return (
        <ProfileAboutMeReduxForm initialValues={userProfile} contacts={userProfile.contacts} onSubmit={onSubmit}/>
    )
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {setUserProfileAboutMe})(ProfileAboutMe);