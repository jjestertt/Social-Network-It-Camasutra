import React from 'react';
import style from './Message.module.css';
import MessageItem from "./MessageItem/MessageItem";
import {Field, reduxForm, reset} from "redux-form";

const MessagesForm = (props) => {
    return (
        <form className={style.newMessage} onSubmit={props.handleSubmit}>
            <Field
                className={style.addMessage}
                name="messageText"
                component='textarea'
                placeholder="Add message"
            />
            <button type="submit">Send</button>
        </form>
    );
}

let MessagesReduxForm = reduxForm({
    form: 'message'
})(MessagesForm);

const Message = (props) => {
    let message = props.messages
        .map(el => <MessageItem key={el.id} id={el.id} message={el.message}/>);

    let onSubmit = (formData, dispatch) => {
        props.addMessage(formData.messageText);
        dispatch(reset('message'));
    }
    return (
        <div className={style.message}>
            <h2 className={style.title}>Message</h2>
            <ul className={style.list}>
                {message}
            </ul>
            <MessagesReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

export default Message;