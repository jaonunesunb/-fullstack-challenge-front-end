import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContactContextProvider from "./context/ContactContext";
import { UserProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <ContactContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContactContextProvider>
    </UserProvider>
  </React.StrictMode>
);
