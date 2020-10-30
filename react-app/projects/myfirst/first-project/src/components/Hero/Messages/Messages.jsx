import React from 'react';
import style from './Messages.module.css';
import {NavLink} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import Message from "./Message/Message";

const Messages = (props) => {
    return (
        <div className={style.wrapper}>
            <Dialogs dialogs={props.dialogs} />
            <Message messages={props.messages} />
        </div>
    );
}

export default Messages;