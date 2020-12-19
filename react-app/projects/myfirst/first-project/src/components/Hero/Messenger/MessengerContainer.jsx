import {connect} from "react-redux";
import Messenger from "./Messenger";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";



//**********************************************************************************************************
let mapStateToProps = () => {
    return {
    }
}

export default compose(
    connect(mapStateToProps, {}),
    withAuthRedirect
)(Messenger);

//The same
// let authRedirect = withAuthRedirect(Messenger);
// export default connect(mapStateToProps, {})(authRedirect)
//**********************************************************************************************************