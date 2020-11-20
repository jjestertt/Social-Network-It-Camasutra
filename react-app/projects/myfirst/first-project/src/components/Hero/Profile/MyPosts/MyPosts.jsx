import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostCreator, onPostChangeCreator} from "../../../../redux/profile-reducer";

const MyPosts = (props) => {
    //Пребираем элементы из массива posts state и создаем и добавляем на страницу компоненты на его основе;
    const postItem = props.posts
        .map(el => <Post key={el.id} id={el.id} userName={el.userName} postText={el.postText} likeCounter={el.likeCounter} />);

    //Добавление поста на страницу
    const addPost = (e) => {
        e.preventDefault();
        //Send to dispatch function ActionCreator
        props.dispatch(addPostCreator());
    }
    // Обновление текста поста в state
    const onPostChange = (event) =>{
        let text = event.target.value;
        //Send to dispatch function ActionCreator
        props.dispatch(onPostChangeCreator(text));
    }

   return (
      <div className={style.my_posts}>
         <form className="form" action="">
            <textarea
                onChange={onPostChange}
                className={style.textarea} 
                placeholder="Add post"
                value={props.newPostText}
            />
            <button onClick={addPost} type="submit" className={style.new_post}>New post</button>
         </form>
          {postItem}
      </div>
   );
}

export default MyPosts;