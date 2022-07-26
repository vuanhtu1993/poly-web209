import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
