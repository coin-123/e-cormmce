import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import Countdown from "react-countdown";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import frame1 from "../../assets/Rectangle.png";
import frame2 from "../../assets/Today.png";
import frame3 from "../../assets/game.png";
import frame4 from "../../assets/jacket.png";
import frame5 from "../../assets/eye.png";
import frame6 from "../../assets/FlashSales.png";
import frame7 from "../../assets/Vector9.png";
import frame8 from "../../assets/Vector10.png";
import frame9 from "../../assets/Wishlist.png";
import frame10 from "../../assets/keyboard.png";
import frame11 from "../../assets/television.png";
import frame12 from "../../assets/chair.png";
import frame13 from "../../assets/jbl.png";
import frame14 from "../../assets/benz.png";
import frame15 from "../../assets/dog.png";

import { useStore } from "../../context/StoreContext.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { useAuth } from "../../context/AuthContext";

const products = [
  { id: 1, name: "HV-G92 Gamepad", image: frame3, price: 120 },
  { id: 2, name: "Wireless Keyboard", image: frame10, price: 1520 },
  { id: 3, name: "Samsung Smart-Screen", image: frame11, price: 20520 },
  { id: 4, name: "Comfort Chair", image: frame12, price: 220 },
  { id: 5, name: "Echo-Speaker", image: frame13, price: 120 },
  { id: 6, name: "Saint Jacket", image: frame4, price: 50 },
  { id: 7, name: "Kid Electric Car", image: frame14, price: 1020 },
  { id: 8, name: "Dry Dog Food", image: frame15, price: 520 },
];

export default function Flash() {

  const { addToCart } = useCart();
  const { addToWishlist } = useStore();
   const { user } = useAuth();
   const navigate = useNavigate(); // from react-router


  const swiperRef = useRef(null);

  const totalStars = 5;

  const [ratings, setRatings] = useState(() => {
    const saved = localStorage.getItem("productRatings");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("productRatings", JSON.stringify(ratings));
  }, [ratings]);

  const handleRating = (productId, starIndex) => {
    setRatings((prev) => ({ ...prev, [productId]: starIndex }));
  };

  // Handle adding to cart with auth check
    const handleAddToCart = (product) => {
    if (!user  ) {
      navigate("/signup"); // redirect if no account
    } else {
      addToCart(product); // allow adding if logged in
      alert("Cart Added");
    }
  };
  




  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex items-center justify-center w-full min-h-screen bg-white py-6 px-2"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-7xl">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full bg-white  pb-3 mb-4">
          {/* Left: Flash Sale title */}
          <div className="flex  sm:flex-row items-center gap-3 flex-col">
            <div className="flex items-center gap-3 flex-col">
              <div className="flex gap-2 items-center ">
                <img src={frame1} alt="rectangle" />
                <img src={frame2} alt="today" />
              </div>
              <div className="items-center">
                <img src={frame6} alt="flash sales" />
              </div>
            </div>
          </div>

          {/* Middle: Countdown */}
          <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
            <div className="flex gap-4 text-xs">
              <p>Days</p>
              <p>Hours</p>
              <p>Minutes</p>
              <p>Seconds</p>
            </div>
            <Countdown
              date={Date.now() + 1000 * 60 * 60 * 24 * 3}
              className="text-2xl sm:text-4xl font-bold"
            />
          </div>

          {/* Right: Navigation */}
          <div className="flex gap-3 mt-4 md:mt-0">
            <div
              className="flex items-center w-10 h-10 bg-gray-200 justify-center rounded-full cursor-pointer"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src={frame8} alt="prev" />
            </div>
            <div
              className="flex items-center w-10 h-10 bg-gray-200 justify-center rounded-full cursor-pointer"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src={frame7} alt="next" />
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
          className="w-full"
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="flex flex-col items-center bg-gray-100 group relative rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                {/* Discount + Wishlist */}
                <div className="flex items-center justify-between w-[90%] mt-2">
                  <div className="text-xs bg-[rgba(219,68,68,1)] text-white rounded px-2 py-1">
                    -30%
                  </div>
                  <div className="flex gap-2 items-center">
                    <motion.img
                      src={frame5}
                      alt="eye"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 600 }}

                    />
                    <motion.img
                      src={frame9}
                      alt="wishlist"
                      className="cursor-pointer"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 600 }}

                      onClick={() => addToWishlist(p)}
                    />
                  </div>
                </div>

                {/* Product Image */}
                <div className="flex items-center justify-center w-full h-40">
                  <img src={p.image} alt={p.name} className="max-h-full" />
                </div>

                {/* Add to Cart */}
                <button
                  onClick={() => handleAddToCart(p)}
                  className="w-full bg-black text-white py-2 text-sm font-medium hover:bg-gray-800 transition 
             block md:hidden group-hover:md:block"
                >
                  Add To Cart
                </button>

                {/* Details */}
                <div className="flex flex-col w-full bg-white p-3">
                  <p className="font-medium">{p.name}</p>
                  <div className="flex gap-2 text-sm">
                    <p className="text-[rgba(219,68,68,1)]">${p.price}</p>
                    <p className="text-gray-400 line-through">
                      ${p.price + 200}
                    </p>
                  </div>

                  {/* Ratings */}
                  <div className="flex gap-1 mt-1 text-lg cursor-pointer">
                    {[...Array(totalStars)].map((_, starIdx) => (
                      <FaStar
                        key={starIdx}
                        onClick={() => handleRating(p.id, starIdx)}
                        className={
                          ratings[p.id] !== undefined &&
                          starIdx <= ratings[p.id]
                            ? "text-yellow-400"
                            : "text-gray-400"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-[rgba(219,68,68,1)] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-red-600 border  transition">
            View All Products
          </button>
        </div>
      </div>
    </motion.section>
  );
};
