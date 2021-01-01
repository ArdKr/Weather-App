import React from "react";
import ReactDOM from "react-dom";

// Redux
import { Provider } from "react-redux";
import { store } from "./services/redux/store/store";
import { updateWeatherData } from "./services/redux/slices/weatherSlice";

// Api client
import { getWeatherInformation } from "./services/api/client";

import App from "./App.jsx";

import "./index.css";

// Get weather information about Berlin (default)
// and store it into redux store
getWeatherInformation(638242).then((response) => {
  store.dispatch(updateWeatherData(response));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
