//This is just container for component MyPost
//We need it for get and send information from state

import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import {addPost, deletePost} from "../../../../redux/profile-reducer";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
};


const myPostsContainer = connect(mapStateToProps, {addPost, deletePost})(MyPosts);
export default myPostsContainer;