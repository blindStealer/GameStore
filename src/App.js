import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = ({ state, addPost, updateNewPostText, }) => {

  return (

    <BrowserRouter BrowserRouter >
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs dialogsData={state.messagesPage.dialogsData} messagesData={state.messagesPage.messagesData} />} />
            <Route path='/profile/*' element={<Profile posts={state.profilePage.posts} addPost={addPost} newPostText={state.profilePage.newPostText} updateNewPostText={updateNewPostText} />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter >
  );
};

export default App;


