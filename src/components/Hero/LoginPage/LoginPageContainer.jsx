import React from "react";
import {connect} from "react-redux";
import {userLogin} from "../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import LoginPage from "./LoginPage";


const LoginPageContainer = (props) => {
    const onSubmit = (formData) => {
        props.userLogin(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return (
            <Redirect to="/profile"/>
        );
    }
    return (
        <LoginPage onSubmit={onSubmit} loginCaptchaUrl={props.loginCaptchaUrl}/>
    );
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    loginCaptchaUrl: state.auth.loginCaptchaUrl
});
export default connect(mapStateToProps, {userLogin})(LoginPageContainer);