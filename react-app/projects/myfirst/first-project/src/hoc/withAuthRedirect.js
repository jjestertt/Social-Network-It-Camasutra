import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const withAuthRedirect = (Component) => {
   let withAuthRedirectComponent = (props) => {
        if (!props.isAuth) {
            return <Redirect to="/login"/>
        }

        return <Component {...props}/>
    };
    let mapStateToProps = (state) => ({isAuth: state.auth.isAuth});
    let connectedWithAuthRedirect = connect(mapStateToProps)(withAuthRedirectComponent);
    return connectedWithAuthRedirect;

}

export default withAuthRedirect;

