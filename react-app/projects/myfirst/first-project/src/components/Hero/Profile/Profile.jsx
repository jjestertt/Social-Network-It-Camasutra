import React from 'react';
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

            <MyPostsContainer />
        </div>
    );
}

export default Profile;