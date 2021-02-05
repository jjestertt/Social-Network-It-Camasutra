import React from "react"
import {maxLengthCreator, requiredForm} from "../../../../utils/validate";
import style from "./LoginForm.module.css";
import {createField, CustomInput} from "../../../Common/FormControl/FormControl";
import {reduxForm} from "redux-form";

let maxLength20 = maxLengthCreator(20);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.input}>
                {createField(CustomInput, "text", "email", "Email", [requiredForm, maxLength20])}
            </div>
            <div className={style.input}>
                {createField(CustomInput, "password", "password", "Password", [requiredForm])}
            </div>
            <div className={style.remember}>
                <label className={style.rememberLabel}>
                    {createField("input" , "checkbox", "rememberMe", "", [])}
                    <span className={style.rememberCheckboxText}>Remember me</span>
                </label>
                <a className={style.signUp} href="https://social-network.samuraijs.com/signUp">SignUp</a>
            </div>
            <div className={style.formError}>{error}</div>
            <button type={"submit"} className={style.submitButton}>Login</button>
        </form>)
}

let LoginReduxForm = reduxForm({
    form: "login", // имя формы в state (state.form.post)
})(LoginForm);

export default LoginReduxForm;