import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
   return (
      <div className={style.post}>
         <div className={style.person}>
            <img src="https://i.ytimg.com/vi/_YB8AoO0cAY/hqdefault_live.jpg" alt="" className={style.photo} />
            <span className={style.name}>{props.userName}</span>
         </div>
         <p className={style.text}>{props.postText}</p>
         <div className={style.like}>
            <button className={style.button}>Лайк</button>
            <span className={style.counter}>{props.likeCounter}</span>
         </div>
      </div >
   );
}

export default Post;