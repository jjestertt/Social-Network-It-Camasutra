import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
   return (
      <footer className={style.footer}>
         <div className="container">
            <p className={style.text}>Copy by Max</p>
         </div>
      </footer>
   );
}


export default Footer;