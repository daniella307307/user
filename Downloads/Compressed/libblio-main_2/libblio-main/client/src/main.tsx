import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles.css";
import "./main.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import globalReducer from "./state/index.tsx";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { api } from "./state/api.tsx";

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
