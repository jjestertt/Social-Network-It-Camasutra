import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {deletePost} from "../../../../redux/profile-reducer";
import {reduxForm} from "redux-form";

const PostForm = (props) => {
    //Add post to wall
    const onAddPost = (e) => {
        e.preventDefault();
        //Send to dispatch function ActionCreator
        props.addPost();
    }
    // Refresh post of state
    const onPostChange = (event) => {
        let text = event.target.value;
        //Send to dispatch function ActionCreator
        props.postChange(text);
    }
    return (
        <form className="form" action="">
            <textarea
                onChange={onPostChange}
                className={style.textarea}
                placeholder="Add post"
                value={props.newPostText}
            />
            <button onClick={onAddPost} type="submit" className={style.new_post}>New post</button>
        </form>
    )
}

let PostReduxForm = reduxForm({
    form: 'post', // имя формы в state (state.form.post)
})(PostForm);

const MyPosts = (props) => {
    //Пребираем элементы из массива posts state и создаем и добавляем на страницу компоненты на его основе;
    const postItem = props.posts
        .map(el => <Post key={el.id}
                         id={el.id}
                         userName={el.userName}
                         postText={el.postText}
                         likeCounter={el.likeCounter}
                         deletePost={props.deletePost}
        />);
    return (
        <div className={style.my_posts}>
            <PostReduxForm addPost={props.addPost} postChange={props.postChange} newPostText={props.newPostText}/>
            {postItem}
        </div>
    );
}

export default MyPosts;