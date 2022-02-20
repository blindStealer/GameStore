import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
  return (
    <BrowserRouter BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/profile/:userID" element={<ProfileContainer />} />
            <Route path="/profile/" element={<ProfileContainer />} />
            <Route path="/users/*" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
