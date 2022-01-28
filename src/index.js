
import state, { subscribe } from './redux/state'
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addPost, updateNewPostText } from './redux/state'



import "./index.css";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />,
        document.getElementById("root")
    );

}



rerenderEntireTree(state);


subscribe(rerenderEntireTree)




// ReactDOM.render(

//   <App state={state} addPost={addPost} />,

//   document.getElementById("root")
// );
