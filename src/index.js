import store from "./redux/redux-store";
// import store from "./redux/store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <App
      state={store.getState()}
      dispatch={store.dispatch.bind(store)}
      store={store}
    />,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
