//This is just container for component MyPost
//We need it for get and send information from state

import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import { addPostCreator, postChangeCreator} from "../../../../redux/profile-reducer";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        postChange: (text) => {
            dispatch(postChangeCreator(text));
        },
    }
};

const myPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default myPostsContainer;