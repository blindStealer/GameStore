import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({
  updateNewMessageBody,
  sendMessage,
  messagesData,
  dialogsData,
  newMessageBody,
}) => {
  const dialogElements = dialogsData.map((item) => {
    return <DialogItem key={item.id} name={item.name} id={item.id} />;
  });

  const messagesElements = messagesData.map((item) => {
    return <Message key={item.id} message={item.message} />;
  });

  let onSendMessageClick = () => {
    sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    updateNewMessageBody(body);
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
