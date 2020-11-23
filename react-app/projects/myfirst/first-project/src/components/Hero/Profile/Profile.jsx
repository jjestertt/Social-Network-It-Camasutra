import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className="Profile">
            <ProfileInfo
                name="Максим Сивак" description="Прирожденный мечтатель"
                photoURL="https://i.ytimg.com/vi/_YB8AoO0cAY/hqdefault_live.jpg"
                imgURL="https://school298.spb.ru/images/400/DSC100485581.jpg"
            />

            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
}

export default Profile;