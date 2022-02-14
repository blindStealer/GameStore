/*
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "its my first post", likesCount: 11 },
        { id: 3, message: "its my second post", likesCount: 14 },
        { id: 4, message: "its my third post", likesCount: 16 },
        { id: 5, message: "its my fourth post", likesCount: 18 },
        { id: 6, message: "its my fifth post", likesCount: 21 },
      ],

      newPostText: "it-kamasutra.com",
    },

    messagesPage: {
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
    },

    sidebar: {},
  },

  _callSubscriber() {
    console.log("State is changes");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.messagesPage, action);
    sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;

// store OOP
*/
