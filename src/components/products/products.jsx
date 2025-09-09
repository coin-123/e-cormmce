import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import frame5 from "../../assets/eye.png";
import frame9 from "../../assets/Wishlist.png";
import frame13 from "../../assets/cam.png";
import frame14 from "../../assets/benz.png";
import frame15 from "../../assets/dog.png";
import frame16 from "../../assets/boot.png";
import frame17 from "../../assets/jacket.png";
import frame18 from "../../assets/usbpad.png";
import frame19 from "../../assets/laptop.png";
import frame20 from "../../assets/cusmetics.png";

import { useStore } from "../../context/StoreContext.jsx";
import { useCart } from "./../../context/CartContext.jsx";


export default function Products() {
  const { addToWishlist } = useStore();
    const { addToCart } = useCart();
  
  const totalStars = 5;

  // Ratings state (save in localStorage)
  const [ratings, setRatings] = useState(() => {
    const saved = localStorage.getItem("productRatings");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("productRatings", JSON.stringify(ratings));
  }, [ratings]);

  const handleRating = (id, starIndex) => {
    setRatings((prev) => ({ ...prev, [id]: starIndex }));
  };

  // Put all products in an array
  const products = [
    { id: 1, name: "Camera", image: frame13, price: "$320" },
    { id: 2, name: "HV-G92 Gamepad", image: frame14, price: "$300" },
    { id: 3, name: "Dog Food", image: frame15, price: "$463" },
    { id: 4, name: "Boots", image: frame16, price: "$500" },
    { id: 5, name: "Jacket", image: frame17, price: "$230" },
    { id: 6, name: "USB Pad", image: frame18, price: "$230" },
    { id: 7, name: "Laptop", image: frame19, price: "$230" },
    { id: 8, name: "Cosmetics", image: frame20, price: "$230" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex items-center justify-center w-full py-12 border-t border-gray-300"
    >
      <div className="w-[90%]">
        {/* Heading */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-red-500">Our Products</h2>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition">
            View All Products
          </button>
        </div>

        {/* Grid for products */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center justify-between bg-gray-200 rounded-lg overflow-hidden group"
            >
              {/* Top icons */}
              <div className="flex items-center justify-end gap-[0.5rem] w-full px-2 py-2">
                <motion.img
                  src={frame5}
                  alt="View"
                  whileHover={{ scale: 1.2 }}
                  className="cursor-pointer "
                />
                <motion.img
                  src={frame9}
                  alt="Wishlist"
                  whileHover={{ scale: 1.2 }}
                  className="cursor-pointer "
                  onClick={() => addToWishlist(product)}
                />
              </div>

              {/* Product image */}
              <div className="flex items-center justify-center h-40 bg-white">
                <img src={product.image} alt={product.name} className="h-full object-contain" />
              </div>

              {/* Add to cart button */}
              <div className="w-full">
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-black text-white py-2 text-sm font-medium hover:bg-gray-800 transition 
             block md:hidden group-hover:md:block"
                >
                  Add To Cart
                </button>
              </div>

              {/* Product details */}
              <div className="p-3 bg-white w-full text-center">
                <p className="font-medium">{product.name}</p>
                <p className="text-red-500">{product.price}</p>

                {/* Ratings */}
                <div className="flex justify-center gap-1 mt-2 text-lg">
                  {[...Array(totalStars)].map((_, starIdx) => (
                    <FaStar
                      key={starIdx}
                      onClick={() => handleRating(product.id, starIdx)}
                      className={
                        ratings[product.id] !== undefined && starIdx <= ratings[product.id]
                          ? "text-yellow-400 cursor-pointer"
                          : "text-gray-400 cursor-pointer"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
