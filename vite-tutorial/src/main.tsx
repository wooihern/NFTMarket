import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import store from "./redux/slices/store";
import { render } from "react-dom";

const bootstrapApp = async (): Promise<void> => {
  const container = document.getElementById("root") as HTMLElement;
  render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
    container
  );
};
bootstrapApp;
