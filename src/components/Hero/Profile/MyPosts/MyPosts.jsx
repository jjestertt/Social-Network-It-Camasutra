import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreator, requiredForm} from "../../../../utils/validate";
import {Textarea} from "../../../General/FormControl/FormControl";

const maxLength300 = maxLengthCreator(300);

const PostForm = (props) => {
    return (
        <form className="form" onSubmit={props.handleSubmit} action="">
            <div className={style.fieldWrapper}>
                <Field
                    name="postText"
                    component={Textarea}
                    placeholder="Add post"
                    validate={[requiredForm, maxLength300]}
                />
            </div>
            <div>
                <button type="submit" className={style.new_post}>New post</button>
            </div>
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
                         userPhoto={props.userPhoto}
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