import React from 'react';
import style from './Messages.module.css';
import Dialogs from "./Dialogs/Dialogs";
import Message from "./Message/Message";

const Messages = (props) => {
    return (
        <div className={style.wrapper}>
            <Dialogs dialogs={props.store.getState().messagesPage.dialogs}/>
            <Message
                store={props.store}
            />
        </div>
    );
}

export default Messages;