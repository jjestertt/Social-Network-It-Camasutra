import React from 'react';
import style from './Dialog_item.module.css';
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
    return (
        <li className={style.item}>
            <NavLink to={"/messenger/" + props.id} className={style.link} activeClassName={style.link_active}>{props.name}</NavLink>
        </li>
    );
}

export default DialogItem;