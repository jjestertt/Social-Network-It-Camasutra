import React from "react";
import style from "./LoginPage.module.css"
import LoginReduxForm from "./LoginForm/LoginForm";

const LoginPage = ({onSubmit, loginCaptchaUrl}) => {
    return (
        <div className={style.wrapper}>
            <h1 className={style.loginTitle}>Login Page</h1>
            <div className={style.loginForm}>
                <LoginReduxForm onSubmit={onSubmit} loginCaptchaUrl={loginCaptchaUrl}/>
            </div>
        </div>
    )
}
export default LoginPage;