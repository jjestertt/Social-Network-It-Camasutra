import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const withAuthRedirect = (Component) => {
   let withAuthRedirectComponent = (props) => {
           return props.isAuth ? <Component {...props}/> : <Redirect to="/login"/>
    };
    let mapStateToProps = (state) => ({isAuth: state.auth.isAuth});
    let connectedWithAuthRedirect = connect(mapStateToProps)(withAuthRedirectComponent);
    return connectedWithAuthRedirect;

}


export default withAuthRedirect;

