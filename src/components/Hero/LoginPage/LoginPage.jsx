import React from "react";
import style from "./LoginPage.module.css"
import LoginReduxForm from "./LoginForm/LoginForm";

const LoginPage = ({onSubmit}) => {
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