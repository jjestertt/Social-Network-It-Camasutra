import React from "react";
import style from "./CustomTextarea.module.css";

export const CustomTextarea = ({input, meta, ...props}) => {
    //Переменная проверяет было ли тронуто поле, и наличее ошибок в нем
    let hasError = meta.touched && meta.error;

    return (
        <div className={style.textareaWrapper}>
            <textarea className={style.textarea + " " + (hasError ? style.error : "")} {...input} {...props} />
            {hasError ? <span className={style.error}>{meta.error}</span> : ""}
        </div>
    )
}
export const CustomInput = ({input, meta, ...props}) => {
    //Переменная проверяет было ли тронуто поле, и наличее ошибок в нем
    let hasError = meta.touched && meta.error;

    return (
        <div>
            <input className={style.input + " " + (hasError ? style.error : "")} {...input} {...props} />
            {hasError ? <span className={style.error}>{meta.error}</span> : ""}
        </div>
    )
}
