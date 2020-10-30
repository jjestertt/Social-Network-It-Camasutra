import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    const postItem = props.posts
        .map(el => <Post id={el.id} userName={el.userName} postText={el.postText} likeCounter={el.likeCounter} />);
   return (
      <div className={style.my_posts}>
         <form className="form" action="">
            <textarea  className={style.textarea} placeholder="Add post" />
            <button type="submit" className={style.new_post}>New post</button>
         </form>
          {postItem}
      </div>
   );
}

export default MyPosts;