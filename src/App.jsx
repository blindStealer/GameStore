import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import Header from "./components/header/Header";
import { Provider } from "react-redux";
import store from "./redux/redux";

import "./index.css";
import GamePage from "./pages/game-page/GamePage";
import OrderPage from "./pages/order-page/OrderPage";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app/:title" element={<GamePage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
