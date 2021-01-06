import React from "react";
import {connect} from "react-redux";
import LogIn from "./LogIn";
import {getAuth, logout,} from "../../../redux/auth-reduscer";

class LogInClassContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth();
    }

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

export default connect(mapStateToProps, {getAuth, logout})(LogInClassContainer)