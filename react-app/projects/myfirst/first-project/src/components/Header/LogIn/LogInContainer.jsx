import React from "react";
import {connect} from "react-redux";
import LogIn from "./LogIn";
import {setUserData,} from "../../../redux/auth-reduscer";
import * as axios from "axios";

class LogInClassContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setUserData(response.data.data.id, response.data.data.login, response.data.data.email);
            }
        });
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
    }
}

export default connect(mapStateToProps, {setUserData})(LogInClassContainer)