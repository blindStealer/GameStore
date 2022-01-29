import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import store from "../../redux/state";

import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogsReducer";


const Dialogs = ({ dialogsData, messagesData, newMessageBody }) => {
  // eslint-disable-next-line react/prop-types
  let dialogElements = dialogsData.map((item) => {
    return <DialogItem key={item.id} name={item.name} id={item.id} />;
  });

  let messagesElements = messagesData.map((item) => {
    return <Message key={item.id} message={item.message} />;
  });

  let onSendMessageClick = () => {
    store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>

      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              placeholder="Enter your message"
              onChange={onNewMessageChange}
            />
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
