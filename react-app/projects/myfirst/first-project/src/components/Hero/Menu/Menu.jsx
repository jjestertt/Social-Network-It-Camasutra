import React from 'react';
import style from './Menu.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Menu = (props) => {
    return (
        <aside className={style.menu}>
            <ul className={style.list}>
                <li className={style.item}><NavLink to="/profile" activeClassName={style.active} className={style.link}>Profile</NavLink></li>
                <li className={style.item}><NavLink to="/messages" activeClassName={style.active} className={style.link}>Messages</NavLink></li>
                <li className={style.item}><NavLink to="/news" activeClassName={style.active} className={style.link}>News</NavLink></li>
                <li className={style.item}><NavLink to="/music" activeClassName={style.active} className={style.link}>Music</NavLink></li>
                <li className={style.item}><NavLink to="/settings" activeClassName={style.active} className={style.link}>Settings</NavLink></li>
            </ul>

            <Friends friends={props.friends}/>
        </aside>
    );
}

export default Menu;