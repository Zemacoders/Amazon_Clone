// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Add this
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import {store} from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
