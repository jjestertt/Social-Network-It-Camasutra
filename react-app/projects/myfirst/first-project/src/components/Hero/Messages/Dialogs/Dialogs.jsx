import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./dialog_item/Dialog_item";


const Dialogs = (props) => {

    let dialogItem = props.dialogs.map( el => <DialogItem key={el.id} id={el.id} name={el.name} /> );

    return (
            <div className={style.contacts}>
                <h2 className={style.title}>Contacts</h2>
                <ul className={style.list}>
                    { dialogItem }
                </ul>
            </div>
    );
}

export default Dialogs;