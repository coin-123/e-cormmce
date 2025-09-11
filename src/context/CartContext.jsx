import React, { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const { user } = useAuth(); 
  const [cart, setCart] = useState([]);

   // compute localStorage key per user
  const cartKey = user ? `cart_${user.email.toLowerCase()}` : "cart_guest";


  // load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, [cartKey]);

  // save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("cartKey", JSON.stringify(cart));
  }, [cart, cartKey]);

  // add to cart
  const addToCart = (product) => {
    let updatedCart = [...cart];
    let existing = updatedCart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
  };



  //   const removeItem = (id) => setCart((c) => c.filter((i) => i.id !== id));
  // const increaseQty = (id) =>
  //   setCart((c) => c.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)));
  // const decreaseQty = (id) =>
  //   setCart((c) =>
  //     c
  //       .map((i) => (i.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
  //       .filter((i) => i.quantity > 0)
  //   );





  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, user }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
