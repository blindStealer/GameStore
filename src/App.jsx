import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home-page/HomePage";
import Header from "./components/header/Header";

import "./index.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/store" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
