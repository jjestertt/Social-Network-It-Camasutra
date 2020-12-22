import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm, reset} from "redux-form";

const PostForm = (props) => {
    return (
        <form className="form" onSubmit={props.handleSubmit} action="">
            <Field
                className={style.textarea}
                name="postText"
                component="textarea"
                placeholder="Add post"
            />
            <button type="submit" className={style.new_post}>New post</button>
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

    let onSubmit = (formData, dispatch) => {
        props.addPost(formData.postText);
        dispatch(reset('post'))
    }
    return (
        <div className={style.my_posts}>
            <PostReduxForm onSubmit={onSubmit}/>
            {postItem}
        </div>
    );
}

export default MyPosts;