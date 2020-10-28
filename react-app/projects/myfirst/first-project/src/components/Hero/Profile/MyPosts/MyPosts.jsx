import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
   return (
      <div className={style.my_posts}>
         <form className="form" action="">
            <textarea type="text" className={style.textarea} placeholder="Add post" />
            <button type="submit" className={style.new_post}>New post</button>
         </form>
         <Post text="Hey, how are you?" counter="20" buttonName="Лайкос"/>
         <Post text="My first messge" counter="10" buttonName="Like" />
      </div>
   );
}

export default MyPosts;