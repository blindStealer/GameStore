import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

//Hello

const App = ({ state, dispatch, store }) => {
  return (
    <BrowserRouter BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  dialogsData={state.messagesPage.dialogsData}
                  messagesData={state.messagesPage.messagesData}
                  newMessageBody={state.messagesPage.newMessageBody}
                  dispatch={dispatch}
                />
              }
            />

            <Route
              path="/profile/*"
              element={
                <Profile
                  posts={state.profilePage.posts}
                  dispatch={dispatch}
                  newPostText={state.profilePage.newPostText}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
