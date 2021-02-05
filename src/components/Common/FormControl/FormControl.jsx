import React from "react";
import style from "./FormControl.module.css";
import {Field} from "redux-form";

const FormControl = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={style.wrapper}>
            <div className={style.inputWrapper + " " + (hasError ? style.error : "")}>
                {props.children}
            </div>
            <div className={hasError ? style.errorMessage : ""}>
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

export const createField = (component, type, name, placeholder, validators) => {
    return <Field component={component} type={type} name={name} placeholder={placeholder}
                  validate={validators} />
}
