import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
   return (
      <div className={style.post}>
         <div className={style.person}>
            <img src="https://i.ytimg.com/vi/_YB8AoO0cAY/hqdefault_live.jpg" alt="" className={style.photo} />
            <span className={style.name}> Сивак Максим</span>
         </div>
         <p className={style.text}>{props.text}</p>
         <div className={style.like}>
            <button className={style.button}>{props.buttonName}</button>
            <span className={style.counter}>{props.counter}</span>
         </div>
      </div >
   );
}

export default Post;