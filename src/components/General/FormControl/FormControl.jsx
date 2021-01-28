import React from "react";
import style from "./FormControl.module.css";

const FormControl = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={style.inputWrapper + " " + (hasError ? style.error : "")}>
                {props.children}
            </div>
            <div>
                {hasError ? <span className={style.error}>{meta.error}</span> : ""}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea className={style.input} {...input} {...restProps} /></FormControl>

}
export const CustomInput = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input className={style.input} {...input} {...restProps} /></FormControl>
}
