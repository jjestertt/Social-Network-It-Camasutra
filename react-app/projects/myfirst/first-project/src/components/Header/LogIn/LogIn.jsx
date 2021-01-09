import React from "react";
import style from "./LogIn.module.css";
import {NavLink} from "react-router-dom";

const LogIn = (props) => {
    if (props.isAuth) {
        return <div>
            <span onClick={(e) => {
                e.preventDefault();
                props.logout();
            }} className={style.auth}> &#10060; Logout</span>
        </div>
    }
    return <NavLink to="/login" className={style.auth}><p className={style.signin}>&#128274; Sign in</p></NavLink>
}

export default LogIn;