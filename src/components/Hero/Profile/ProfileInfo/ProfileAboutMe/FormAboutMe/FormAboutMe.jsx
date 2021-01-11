import {Field, reduxForm} from "redux-form";
import React from "react";
import {useEffect} from "react";
import {CustomTextarea} from "../../../../../General/CustomInput/CustomTextarea";

const FormAboutMe = (props) => {

    useEffect(() => {
        props.initialize({ aboutMe: props.aboutMe});
    }, [props, props.aboutMe])

    return (
        <form onSubmit={props.handleSubmit}>
            <Field autoFocus={true} onBlur={() => {
                props.handleSubmit();
            }} name='aboutMe' type="text" component={CustomTextarea}/>
        </form>
    )
}

const ReduxFormAboutMe = reduxForm({
    form: 'aboutMe', // имя формы в state (state.form.post)
})(FormAboutMe);

export default ReduxFormAboutMe;