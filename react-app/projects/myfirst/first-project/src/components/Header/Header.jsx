import React from 'react';
import { NavLink } from "react-router-dom";
import style from './Header.module.css';
import LogInContainer from "./LogIn/LogInContainer";

const Header = () => {
   return (
      <header className={style.header}>
         <div className="container">
            <div className={style.wrapper}>
               <NavLink to="/#s" className={style.logo}>
                  {/* <img src="" alt="" className={style.logo_img} logo-img">  */}
                  <p className={style.logo_text}>&#9731; SocialNetwork</p>
               </NavLink>
               <LogInContainer />
            </div>
         </div>
      </header>
   );
}

export default Header;