const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  messagesData: [
    { id: 1, message: "hi" },
    { id: 2, message: "How is your It kamasutra" },
    { id: 3, message: "yo" },
    { id: 4, message: "ааа" },
    { id: 5, message: "ввв" },
    { id: 6, message: "ыыы" },
  ],

  dialogsData: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ],

  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => { 
  if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    state.newMessageBody = action.body;
  } else if (action.type === SEND_MESSAGE) {
    let body = state.newMessageBody;
    state.messagesData.push({ id: 7, message: body });
    state.newMessageBody = "";
  }

  return state;
};

export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text,
});

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export default dialogsReducer;
