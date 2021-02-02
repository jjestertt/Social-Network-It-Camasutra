import React from 'react';
import { Route } from "react-router-dom";
import style from './Hero.module.css';
import Menu from './Menu/Menu.jsx';
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import MessengerContainer from "./Messenger/MessengerContainer";
import LoginPageContainer from "./LoginPage/LoginPageContainer";



const Hero = (props) => {
    return (
        <section className={style.hero}>
            <div className="container">
                <div className={style.wrapper}>
                    <Menu />
                    <div className={style.content}>
                        {/*loginPage*/}
                        <Route path="/login" component={LoginPageContainer} />
                        {/*ProfilePage*/}
                        <Route path="/profile/:userId?" component={ProfileContainer} />
                        {/*UsersPage*/}
                        <Route path="/users" component={UsersContainer} />
                        {/*MessagePage*/}
                        <Route path="/messenger" component={MessengerContainer} />
                        {/*NewsPage*/}
                        <Route path="/news" component={News} />
                        {/*MusicPage*/}
                        <Route path="/music" component={Music} />
                        {/*SettingsPage*/}
                        <Route path="/settings" component={Settings} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;