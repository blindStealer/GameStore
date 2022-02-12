import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import StoreContext from "./StoreContext";

let rerenderEntireTree = () => {

  ReactDOM.render(
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>,
    document.getElementById("root")
  );

};


rerenderEntireTree();


store.subscribe(() => {

  rerenderEntireTree(store.getState());
});
