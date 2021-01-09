import React from "react";
import {connect} from "react-redux";
import LogIn from "./LogIn";
import {logout,} from "../../../redux/auth-reducer";

class LogInClassContainer extends React.Component {
    render() {
        return <LogIn {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isFetch: state.auth.isFetch,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {logout})(LogInClassContainer)