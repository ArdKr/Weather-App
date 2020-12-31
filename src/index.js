import React from "react";
import ReactDOM from "react-dom";

// Redux
import { Provider } from "react-redux";
import { store } from "./services/redux/store/store";

import App from "./App.jsx";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
