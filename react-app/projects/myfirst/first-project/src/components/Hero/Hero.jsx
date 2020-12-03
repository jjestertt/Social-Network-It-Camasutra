import React from 'react';
import { Route } from "react-router-dom";
import style from './Hero.module.css';
import Menu from './Menu/Menu.jsx';
import Profile from './Profile/Profile.jsx';
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import Messenger from "./Messenger/Messenger";
import UsersContainer from "./Users/UsersContainer";



const Hero = (props) => {
    return (
        <section className={style.hero}>
            <div className="container">
                <div className={style.wrapper}>
                    <Menu />
                    <div className={style.content}>
                        {/*ProfilePage*/}
                        <Route path="/profile" component={Profile} />
                        {/*UsersPage*/}
                        <Route path="/users"  component={UsersContainer}/>
                        {/*MessagePage*/}
                        <Route path="/messenger" component={Messenger} />
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