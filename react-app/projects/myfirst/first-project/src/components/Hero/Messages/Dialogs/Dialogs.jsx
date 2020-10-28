import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./dialog_item/Dialog_item";


const Dialogs = () => {
    let dialogs = [
        {id: 1, name: "Макс" },{id: 2, name: "Саша" },{id: 3, name: "Лера" },{id: 4, name: "Инокентий" },{id: 5, name: "Днепр" },
    ]

    return (
            <div className={style.contacts}>
                <h2 className={style.title}>Contacts</h2>
                <ul className={style.list}>
                    {dialogs.map((el) =>
                        <DialogItem id={el.id} name={el.name} />
                    )}
                </ul>
            </div>
    );
}

export default Dialogs;