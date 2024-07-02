import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import React from "react";

import "@mysten/dapp-kit/dist/index.css";
import { SocketProvider } from "./Context/SocketContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SocketProvider>
      <App />
    </SocketProvider>
  </React.StrictMode>
);
