import React from 'react';
import style from './Header.module.css';

const Header = () => {
   return (
      <header className={style.header}>
         <div className="container">
            <div className={style.wrapper}>
               <a href="#s" className={style.logo}>
                  {/* <img src="" alt="" className={style.logo_img} logo-img">  */}
                  <p className={style.logo_text}>Втантанте</p>
               </a>
               <div className={style.contacts}><a href="tel:8000000000" className={style.tel}>8(800)-555-65-65</a></div>
            </div>
         </div>
      </header>
   );
}

export default Header;