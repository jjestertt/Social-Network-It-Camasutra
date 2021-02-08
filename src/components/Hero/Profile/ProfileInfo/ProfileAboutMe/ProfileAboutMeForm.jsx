import React from "react";
import style from "./ProfileAboutMe.module.css";
import {createField, CustomInput, Textarea} from "../../../../Common/FormControl/FormControl";
import {reduxForm} from "redux-form";

const ProfileAboutMeForm = (props) => {
    const contacts = props.contacts;
    const contactFormItems = Object.keys(contacts).map(key => {
            return (
                <div key={key}>
                    <span>{key} :</span>
                    {createField(Textarea, "",
                        "contacts." + key, key,
                        [])}
                </div>
            )
    });

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <div>Работа:</div>
                    {createField("input", "checkbox",
                        "lookingForAJob", "" ,
                        [], "Looking for a job")}
                </div>
                {createField(CustomInput, "",
                    "lookingForAJobDescription", "What do i looking?",
                    [])}
            </div>
            <div className={style.aboutMe}>
                <div className={style.aboutMeDescription}>Обо мне:</div>
                {createField(Textarea, "text",
                    "aboutMe", "About Me",
                    [])}
            </div>
            <div className={style.contacts}>
                <div className={style.contactListTitle}>Контакты:</div>
                {contactFormItems}
            </div>
            <button>Send</button>
        </form>
    )
}

const ProfileAboutMeReduxForm = reduxForm({
    form: "login",
})(ProfileAboutMeForm);

export default ProfileAboutMeReduxForm