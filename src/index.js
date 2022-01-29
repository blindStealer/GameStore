
import store from './redux/state'
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";




import "./index.css";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()}
            dispatch={store.dispatch.bind(store)}
            store={store} />,
        document.getElementById("root")
    );

}



rerenderEntireTree(store.getState());


store.subscribe(rerenderEntireTree)




// ReactDOM.render(

//   <App state={state} addPost={addPost} />,

//   document.getElementById("root")
// );
