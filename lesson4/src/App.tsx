import { useState } from "react";
import "antd/dist/antd.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BaseLayout from "./components/layout/base";
import AdminLayout from "./components/layout/admin";
import Home from "./pages/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home/>}></Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
