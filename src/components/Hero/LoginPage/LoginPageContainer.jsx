import React from "react";
import {connect} from "react-redux";
import {userLogin} from "../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import LoginPage from "./LoginPage";


const LoginPageContainer = (props) => {
    const onSubmit = (formData) => {
        props.userLogin(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return (
            <Redirect to="/profile"/>
        );
    }
    return (
        <LoginPage onSubmit={onSubmit}/>
    );
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {userLogin})(LoginPageContainer);