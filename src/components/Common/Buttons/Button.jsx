import style from "./Button.module.css"
import React from "react";

const Button = (props) => {
    return (
        <span className={style.button} onClick={props.onClick}>{props.innerText}</span>
    )
}

export default Button;