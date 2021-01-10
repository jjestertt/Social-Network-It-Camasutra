import React from 'react';
import style from './Post.module.css';
import user from "../../../../../assets/image/user.svg";


const Post = (props) => {

    return (
        <div className={style.post}>
            <div className={style.person}>
                <img src={props.userPhoto ? props.userPhoto : user} alt=""
                     className={style.photo}/>
                <span className={style.name}>{props.userName}</span>
            </div>
            <p className={style.text}>{props.postText}</p>
            <div className={style.like}>
                <button className={style.button}>Лайк</button>
                <span className={style.counter}>{props.likeCounter}</span>
                <button onClick={() => {
                    props.deletePost(props.id);
                }} className={style.button}>Delete post
                </button>
            </div>
        </div>
    );
}

export default Post;