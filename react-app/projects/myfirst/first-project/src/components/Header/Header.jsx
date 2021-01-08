import React from 'react';
import { NavLink } from "react-router-dom";
import style from './Header.module.css';
import LogInContainer from "./LogIn/LogInContainer";

const Header = () => {
   return (
      <header className={style.header}>
         <div className="container">
            <div className={style.wrapper}>
               <NavLink to="/profile" className={style.logo}>
                  <p className={style.logo_text}>&#9731; MyNet</p>
               </NavLink>
               <LogInContainer />
            </div>
         </div>
      </header>
   );
}

export default Header;