import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "App";
import store from "store";
import reportWebVitals from "reportWebVitals";
import { SidebarProvider } from "context/SidebarProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SidebarProvider>
  </React.StrictMode>
);

reportWebVitals();
