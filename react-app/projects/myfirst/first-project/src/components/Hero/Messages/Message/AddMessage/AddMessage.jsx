import React from 'react';
import style from "./AddMessage.module.css";

const message = React.createRef();

const addMessage =  (e) =>{
    e.preventDefault();
    let messageText = message.current.value;
    alert(messageText);
}

const AddMessage = () => {
    return(
        <form className={style.newMessage} action="">
            <textarea ref={message} type="text" className={style.addMessage} placeholder="Add message"></textarea>
            <button onClick={addMessage} type="submit">Send</button>
        </form>
    )
}

export default AddMessage;