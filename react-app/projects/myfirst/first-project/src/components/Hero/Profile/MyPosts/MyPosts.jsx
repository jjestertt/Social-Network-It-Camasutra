import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    //Пребираем элементы из массива posts state и создаем и добавляем на страницу компоненты на его основе;
    const postItem = props.posts
        .map(el => <Post key={el.id} id={el.id} userName={el.userName} postText={el.postText} likeCounter={el.likeCounter} />);

    //Получаем эллемент textarea с помощью React.createRef();
    let currentPost = React.createRef();

    //Добавление поста на страницу
    const addPost = (e) => {
        e.preventDefault();
        props.addPost();
    }
    // Обновление текста поста в state
    const newPostText = () =>{
        props.updateNewPostText(currentPost.current.value);
    }

   return (
      <div className={style.my_posts}>
         <form className="form" action="">
            <textarea
                onChange={newPostText}
                ref={currentPost}
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