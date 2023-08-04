import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Styles/index.css";
import "./Styles/App.css";
import "./Styles/Animations.css";
import "rsuite/dist/rsuite.min.css";

import { Provider } from 'react-redux';
import store from "./store/store.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
