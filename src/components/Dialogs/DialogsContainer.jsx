import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messagesData: state.messagesPage.messagesData,
    dialogsData: state.messagesPage.dialogsData,
    newMessageBody: state.messagesPage.newMessageBody,
  };
};

let MapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },

    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, MapDispatchToProps)(Dialogs);

export default DialogsContainer;
