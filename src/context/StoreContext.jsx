// context/StoreContext.jsx
import React, { createContext, useState, useContext } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // add item to wishlist
 const addToWishlist = (product) => {
  // check if this product is already in wishlist
  if (!wishlist.find((p) => p.id === product.id)) {
    setWishlist([...wishlist, product]); // add it if not already present
  }
};


  // remove from wishlist
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((p) => p.id !== id));
  };

  return (
    <StoreContext.Provider value={{ cart, setCart, wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
