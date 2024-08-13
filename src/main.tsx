import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { persistor, store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
