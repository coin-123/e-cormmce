import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { StoreProvider } from "./context/StoreContext.jsx"; // ✅ import your context

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>   {/* ✅ Wrap App inside context */}
        <App />
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>
);
