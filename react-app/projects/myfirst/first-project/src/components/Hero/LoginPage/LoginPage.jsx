import React from "react";
import style from "./LoginPage.module.css"
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {userLogin} from "../../../redux/auth-reduscer";
import {Redirect} from "react-router-dom";
import {CustomInput} from "../../General/CustomInput/CustomTextarea";
import {maxLengthCreator, requiredForm} from "../../../utils/validate";

let maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>

            <div className={style.input}>
                <Field type="text" name={"email" } placeholder={"Name"}
                       validate={[requiredForm, maxLength20]} component={CustomInput}/>
            </div>

            <div className={style.input}>
                <Field type="password" name="password" placeholder={"Password"}
                       validate={[requiredForm]} component={CustomInput}  />
            </div>

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
        props.userLogin(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth){
        return (
            <Redirect to="/profile"/>
        )
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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {userLogin})(LoginPage);