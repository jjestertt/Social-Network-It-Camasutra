import React from "react";
import style from "./LoginPage.module.css"
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <Field name="userName" component="input" className={style.input} type="text" placeholder={"Name"}/>
            <Field name="userPassword" component="input" className={style.input} type="password" placeholder={"Password"}/>
            <label className={style.rememberLabel}>
                <Field name="rememberMe" component="input" className={style.rememberCheckbox} type="checkbox"/>
                <span className={style.rememberCheckboxText}>Remember me</span>
            </label>
            <button type={"submit"} className={style.submitButton}>Login</button>
        </form>)
}

let LoginReduxForm = reduxForm({
    form: 'login', // имя формы в state (state.form.post)
})(LoginForm);

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className={style.wrapper}>
            <h1 className={style.loginTitle}>Login Page</h1>
            <div className={style.loginForm}>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default LoginPage;