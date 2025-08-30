import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { StoreProvider } from "./context/StoreContext.jsx"; // ✅ import your context
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <StoreProvider>   {/* ✅ Wrap App inside context */}
        <App />
      </StoreProvider>
        </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
