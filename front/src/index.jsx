import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SessionContextProvider from "./contexts/SessionContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SessionContextProvider>
        {/* <-- Wrap your application with your context --> */}
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <App />
        </MantineProvider>
      </SessionContextProvider>
      {/* <-- Wrap your application with your context --> */}
    </BrowserRouter>
  </React.StrictMode>
);
