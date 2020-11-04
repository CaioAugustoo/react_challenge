import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MenuList from "./pages/MenuList/MenuList";

import Global from "./style/Global";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuList />} />
      </Routes>
      <Global />
    </BrowserRouter>
  );
};

export default App;
