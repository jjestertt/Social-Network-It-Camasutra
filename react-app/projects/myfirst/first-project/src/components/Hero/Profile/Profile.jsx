import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className="Profile">
            <ProfileInfo
                name="Максим Сивак" description="Прирожденный мечтатель"
                photoURL="https://i.ytimg.com/vi/_YB8AoO0cAY/hqdefault_live.jpg"
                imgURL="https://school298.spb.ru/images/400/DSC100485581.jpg"
            />

            <MyPosts
                dispatch={props.dispatch}
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
            />
        </div>
    );
}

export default Profile;