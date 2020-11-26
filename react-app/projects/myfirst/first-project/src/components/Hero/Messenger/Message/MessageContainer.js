import {connect} from "react-redux";
import Message from "./Message";
import {addMessageCreator, messageChangeCreator} from "../../../../redux/messenger-reducer";

const mapStateToProps = (state) => {
    return ({
        messages: state.messengerPage.messages,
        newMessageText: state.messengerPage.newMessageText
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