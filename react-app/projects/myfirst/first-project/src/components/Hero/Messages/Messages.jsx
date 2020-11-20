import React from 'react';
import style from './Messages.module.css';
import Dialogs from "./Dialogs/Dialogs";
import Message from "./Message/Message";

const Messages = (props) => {
    return (
        <div className={style.wrapper}>
            <Dialogs dialogs={props.dialogs}/>
            <Message
                dispatch={props.dispatch}
                newMessageText={props.messagePage.newMessageText}
                messages={props.messagePage.messages}
            />
        </div>
    );
}

export default Messages;