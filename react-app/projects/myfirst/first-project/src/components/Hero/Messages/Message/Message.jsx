import React from 'react';
import style from './Message.module.css';
import MessageItem from "./MessageItem/MessageItem";
import AddMessage from "./AddMessage/AddMessage";
import AddMessageContainer from "./AddMessage/AddMessageContainer";


const Messages = (props) => {

    let dialogItem = props.store.getState().messagesPage.messages
        .map(el => <MessageItem key={el.id} id={el.id} message={el.message}/>);

    return (
        <div className={style.message}>
            <h2 className={style.title}>Message</h2>
            <ul className={style.list}>
                {dialogItem}
            </ul>
            <AddMessageContainer
                store={props.store}
                dispatch={props.dispatch}
                newMessageText={props.newMessageText}
            />
        </div>
    );
}

export default Messages;