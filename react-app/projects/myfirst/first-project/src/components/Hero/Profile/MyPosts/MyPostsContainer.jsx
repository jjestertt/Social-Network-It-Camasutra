//This is just container for component MyPost
//We need it for get and send information from state

import React from "react";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostCreator, onPostChangeCreator} from "../../../../redux/profile-reducer";



const MyPostsContainer = (props) => {
    const state = props.store.getState().profilePage;
    //Add post to Wall
    const addPost = () => {
        props.store.dispatch(addPostCreator());
    }
    // Refresh post of state
    const postChange = (text) =>{
        //Send to dispatch function ActionCreator
        props.store.dispatch(onPostChangeCreator(text));
    }
   return (
      <MyPosts addPost={addPost} postChange={postChange}
               posts={state.posts}
               newPostText={state.newPostText}/>
   );
}


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        postChange: (text) => {
            dispatch(onPostChangeCreator(text));
        }
    }
};

let SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default SuperMyPostsContainer;