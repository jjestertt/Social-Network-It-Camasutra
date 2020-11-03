import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import style from './Hero.module.css';
import Menu from './Menu/Menu.jsx';
import Profile from './Profile/Profile.jsx';
import Messages from './Messages/Messages.jsx';
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const Hero = (props) => {
    return (
        <BrowserRouter>
            <section className={style.hero}>
                <div className="container">
                    <div className={style.wrapper}>
                        <Menu friends={props.state.friends}/>
                        <div className={style.content}>
                            {/*ProfilePage*/}
                            <Route path="/profile" render={() => <Profile
                                addPost={props.addPost}
                                newPostText={props.state.profilePage.newPostText}
                                updateNewPostText={props.updateNewPostText}
                                posts={props.state.profilePage.posts}/>
                            }/>

                            {/*MessagePage*/}
                            <Route path="/messages" render={() => <Messages
                                dialogs={props.state.messagesPage.dialogs}
                                messages={props.state.messagesPage.messages}/>}
                            />

                            {/*NewsPage*/}
                            <Route path="/news" component={News}/>

                            {/*MusicPage*/}
                            <Route path="/music" component={Music}/>

                            {/*SettingsPage*/}
                            <Route path="/settings" component={Settings}/>
                        </div>
                    </div>
                </div>
            </section>
        </BrowserRouter>
    );
}

export default Hero;