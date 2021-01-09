import {connect} from "react-redux";
import Message from "./Message";
import {addMessage} from "../../../../redux/messenger-reducer";

const mapStateToProps = (state) => {
    return ({
        messages: state.messengerPage.messages,
    });
}
const mapDispatchToProps = (dispatch) => {
    return ({
        addMessage: (messageText) => {
            dispatch(addMessage(messageText));
        },
    });
}
const messageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default messageContainer;