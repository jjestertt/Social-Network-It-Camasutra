import React from "react";
import style from "./LogIn.module.css";
import {NavLink} from "react-router-dom";

const LogIn = (props) => {
    if (props.isAuth) {
        return <div>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                props.logout();
            }} className={style.auth}>Logout</a>
        </div>

    }
    return <NavLink to="/login" className={style.auth}><p className={style.signin}>Sign In</p></NavLink>
}

export default LogIn;