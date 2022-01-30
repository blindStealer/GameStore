import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import store from "../../redux/store";

import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = ({ store }) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const messagesData = store.getState().messagesPage.messagesData;
        const dialogsData = store.getState().messagesPage.dialogsData;
        const newMessageBody = store.getState().messagesPage.newMessageBody;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };
        return (
          <Dialogs
            updateNewMessageBody={onNewMessageChange}
            SendMessage={onSendMessageClick}
            messagesData={messagesData}
            dialogsData={dialogsData}
            newMessageBody={newMessageBody}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
