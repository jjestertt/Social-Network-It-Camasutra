import React from "react";
import style from "./Hero.module.css";
import {Route} from "react-router-dom";
import Menu from "./Menu/Menu.jsx";
import withSuspense from "../../hoc/withSuspense";


//lazy load component
const LoginPageContainer = React.lazy(() => import("./LoginPage/LoginPageContainer"));
const ProfileContainer = React.lazy(() => import("./Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./Users/UsersContainer"));
const MessengerContainer = React.lazy(() => import("./Messenger/MessengerContainer"));
const News = React.lazy(() => import("./News/News"));
const Music = React.lazy(() => import("./Music/Music"));
const Settings = React.lazy(() => import("./Settings/Settings"));


const Hero = (props) => {
    return (
        <section className={style.hero}>
            <div className="container">
                <div className={style.wrapper}>
                    <Menu/>
                    <div className={style.content}>
                        {/*loginPage*/}
                        <Route path="/login" render={withSuspense(LoginPageContainer)}/>
                        {/*ProfilePage*/}
                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                        {/*UsersPage*/}
                        <Route path="/users" render={withSuspense(UsersContainer)}/>
                        {/*MessagePage*/}
                        <Route path="/messenger" render={withSuspense(MessengerContainer)}/>
                        {/*NewsPage*/}
                        <Route path="/news" render={withSuspense(News)}/>
                        {/*MusicPage*/}
                        <Route path="/music" render={withSuspense(Music)}/>
                        {/*SettingsPage*/}
                        <Route path="/settings" render={withSuspense(Settings)}/>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;