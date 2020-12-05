import React from "react";
import style from "./LogIn.module.css";

const LogIn = (props) => {
    if (props.login) {
        return <div className={style.auth}><p className={style.signin}>{props.login}</p></div>
    }
    return <div className={style.auth}><p className={style.signin}>Sign In</p></div>
}

export default LogIn;