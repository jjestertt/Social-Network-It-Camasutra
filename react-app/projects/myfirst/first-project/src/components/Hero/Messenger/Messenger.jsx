import React from 'react';
import style from './Messenger.module.css';
import MessageContainer from "./Message/MessageContainer";
import DialogsContainer from './Dialogs/DialogsContainer';


const Messenger = () => {
    return (
        <div className={style.wrapper}>
            <DialogsContainer />
            <MessageContainer />
        </div>

    );
}

export default Messenger;
//