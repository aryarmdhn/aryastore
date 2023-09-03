import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// product provider
import ProductProvider from "./contexts/ProductContext";
// sidebar
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider, { CartContext } from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
