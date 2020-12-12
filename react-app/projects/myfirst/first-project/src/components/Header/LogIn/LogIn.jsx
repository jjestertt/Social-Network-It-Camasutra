import React from "react";
import style from "./LogIn.module.css";
import {NavLink} from "react-router-dom";

const LogIn = (props) => {
    if (props.login) {
        return <NavLink to={`/profile/${props.id}`} className={style.auth}>
            <p className={style.signin}>login: {props.login} <br/> id: {props.id}<br/> email: {props.email}</p>
        </NavLink>
    }
    return <div className={style.auth}><p className={style.signin}>Sign In</p></div>
}

export default LogIn;