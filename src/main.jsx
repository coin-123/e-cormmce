import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { StoreProvider } from "./context/StoreContext.jsx"; // ✅ import your context
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/Toast.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      
        <StoreProvider>   {/* ✅ Wrap App inside context */}
        <AuthProvider>
          <CartProvider>
      <App />
      <ToastProvider />
      </CartProvider>
    </AuthProvider>
      </StoreProvider>
        
    </BrowserRouter>
  </StrictMode>
);
