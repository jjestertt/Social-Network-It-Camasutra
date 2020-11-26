import {connect} from "react-redux";
import Message from "./Message";
import {addMessageCreator, messageChangeCreator} from "../../../../redux/messages-reducer";

const mapStateToProps = (state) => {
    return ({
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText
    });
}
const mapDispatchToProps = (dispatch) => {
    return({
        addMessage: () => {
            dispatch(addMessageCreator());
        },
        messageChange: (text) => {
            dispatch(messageChangeCreator(text));
        }
    });
}
const messageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default messageContainer;