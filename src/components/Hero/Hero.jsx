import React from "react";
import style from "./Hero.module.css";
import {Switch, Route, Redirect} from 'react-router-dom'
import Menu from "./Menu/Menu.jsx";
import withSuspense from "../../hoc/withSuspense";
import ProfileContainer from "./Profile/ProfileContainer";


//lazy load component
const LoginPageContainer = React.lazy(() => import("./LoginPage/LoginPageContainer"));
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
                        <Switch>
                            <Route exact={true} path="/" render={() => <Redirect to={'/profile'} />}/>
                            {/*loginPage*/}
                            <Route path="/login" render={withSuspense(LoginPageContainer)}/>
                            {/*ProfilePage*/}
                            <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
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
                            {/*404*/}
                            <Route path="*" render={() => <h1>404 NOT FOUND</h1>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;