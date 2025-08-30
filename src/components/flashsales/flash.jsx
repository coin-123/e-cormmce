import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Countdown from "react-countdown";
import { FaStar } from "react-icons/fa";
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

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css/pagination";
import { useStore } from "../../context/StoreContext.jsx";

// for cart
import  { useContext } from "react";
import { CartContext } from "../..context/CartContext.jsx";

const products = [
  { id: 1, image: "src{frame3}", name: "Laptop", price: 2000 },
  { id: 2, name: "Phone", price: 1000 },
  { id: 3, name: "Headphones", price: 500 },
];

export default function Flash() {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useStore();

  const swiperRef = useRef(null);

  const totalStars = 5;

  // Track ratings for each product by index
  const [ratings, setRatings] = useState(() => {
    // Try to load from localStorage
    const saved = localStorage.getItem("productRatings");
    return saved ? JSON.parse(saved) : {};
  });

  // Save ratings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("productRatings", JSON.stringify(ratings));
  }, [ratings]);
  
  // Set rating for a specific product
  const handleRating = (productIndex, starIndex) => {
    setRatings((prev) => ({ ...prev, [productIndex]: starIndex }));
  };

  // const [slideDirection, setSlideDirection] = useState(null); // 'left' or 'right'

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // start hidden & pushed down
      whileInView={{ opacity: 1, y: 0 }} // animate when in view
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // run once, trigger at 30% visibil
      className="flex items-center justify-center w-full h-[630px] bg-rd-900 mb-[3rem]"
    >
      <div className="flex flex-col items-center justify-center w-[90%] h-full">
        <div className="flex items-center justify-between w-full bg-white h-[20%]">
          <div className="flex items-center justify-between w-[50%] h-full bg-yelow-300">
            <div className="flex bg-lue-500 items-center justify-center w-[]  ">
              <div className="flex flex-col item-center jusitfy-center w-full  gap-[2rem]">
                <div className="flex items-center justify- bg-red-00 gap-[1rem]">
                  <img src={frame1} alt="" />
                  <img src={frame2} alt="" />
                </div>

                <div className="flex items-center">
                  <img src={frame6} alt="" />
                </div>
              </div>
            </div>

            <div className=" flex flex-col justify-cnter w-[50%] h-full pt-[1.9em]">
              <div className="flex items-center justify-between w-[90%]">
                <p className="text-[10px]">Days</p>
                <p className="text-[10px]">Hours</p>
                <p className="text-[10px]">Minutes</p>
                <p className="text-[10px]">Seconds</p>
              </div>

              <Countdown
                date={Date.now() + 100 * 60 * 60 * 60 * 60}
                className="text-[3rem]"
              />
            </div>
          </div>

          <div className="flex items-center justify-center bg-gree-500 w-[13%] h-full gap-[1.5em]">
            <div
              className="flex items-center w-[37%] bg-[#e2e2e2] justify-center h-[45%] rounded-[100%] cursor-pointer"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src={frame8} alt="" className="" />
            </div>
            <div
              className="flex items-center w-[37%] bg-[#e2e2e2] justify-center h-[45%] rounded-[100%] cursor-pointer"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src={frame7} alt="" className="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between w-full h-[73%]  bg-blue400 pt-[1rem]">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[]}
            className=" h-hull w-full"
          >
            {/* first cart slide */}
{products.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="flex flex-col items-center justify-center bg-[#f2f2f2] w-[] group relative ">
                <div className="flex items-center justify-between w-[90%]">
                  <div className="flex items-center justify-center text-[9.6px] bg-[rgba(219,68,68,1)] rounded-[4px] w-[48px] h-[20px] text-white">
                    {" "}
                    -30%
                  </div>
                  <div className="flex items-center justify-center gap-[0.5rem] ">
                    <motion.img
                      src={frame5}
                      alt=""
                      whileHover={{ scale: 1.35 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer  "
                    />

                    {/* <p> {product.name} </p> */}

                    <motion.img
                      whileHover={{ scale: 1.35 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      src={frame9}
                      alt=""
                      className="cursor-pointer"
                      onClick={() =>
                        addToWishlist({
                          id: 1,
                          name: "HV-G92 Gamepad",
                          image: frame3,
                          price: "$120",
                        })
                      }
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center w-[90%] h-[141px]">
                  <img src={frame3} alt="" className="" />
                </div>
                <div className="flex items-center justify-center w-full h-[40px] bgred-400">
                  <button
                  onClick={() => addToCart(p)}
                   class="w-full bg-gray-500 hover:bg-black text-white  py-2 transition duration-300 rounded hidden group-hover:block">
                    Add To Cart
                  </button>
                </div>

                <div className="flex items-center justify-center w-full bg-white">
                  <div className="flex flex-col iems-center justify-center w-[90%]">
                    <p className="">HV-G92 Gamepad  {p.name}</p>
                    <span className="flex gap-[0.5rem]">
                      <p className="text-[rgba(219,68,68,1)]">$120  {p.price}</p>
                      <p className=" text-[#959595] line-through">$160</p>
                    </span>

                    <div className="flex gap-2 text-3xl cursor-pointer">
                      {[...Array(totalStars)].map((_, starIdx) => (
                        <FaStar
                          key={starIdx}
                          onClick={() => handleRating(3, starIdx)}
                          className={
                            ratings[3] !== undefined && starIdx <= ratings[3]
                              ? "text-yellow-400"
                              : "text-gray-400"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
                ))}

            {/* second cart slide */}

            <SwiperSlide>
              <div className="flex flex-col items-center justify-center bg-[#f2f2f2] w-[] group relative">
                <div className="flex items-center justify-between w-[90%]">
                  <div className="flex items-center justify-center text-[9.6px] bg-[rgba(219,68,68,1)] rounded-[4px] w-[48px] h-[20px] text-white">
                    {" "}
                    -30%
                  </div>
                  <div className="flex items-center justify-center gap-[0.5rem]">
                    <motion.img
                      src={frame5}
                      alt=""
                      whileHover={{ scale: 1.35 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer  "
                    />

                    <motion.img
                      whileHover={{ scale: 1.35 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      src={frame9}
                      alt=""
                      className="cursor-pointer"
                       onClick={() =>
                        addToWishlist({
                          id: 2,
                          name: "Wireless Keyboard",
                          image: frame10,
                          price: "$1,520",
                        })
                      }
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center w-[90%] h-[141px]">
                  <img src={frame10} alt="" className="" />
                </div>
                <div className="flex items-center justify-center w-full h-[40px] bgred-400">
                  <button class="w-full bg-gray-500 hover:bg-black text-white  py-2 transition duration-300 rounded hidden group-hover:block">
                    Add To Cart
                  </button>
                </div>

                <div className="flex items-center justify-center w-full bg-white">
                  <div className="flex flex-col iems-center justify-center w-[90%]">
                    <p className="">Wireless Keyboard</p>
                    <span className="flex gap-[0.5rem]">
                      <p className="text-[rgba(219,68,68,1)]">$1,520</p>
                      <p className=" text-[#959595] line-through">$2,260</p>
                    </span>

                    <div className="flex gap-2 text-3xl cursor-pointer">
                      {[...Array(totalStars)].map((_, starIdx) => (
                        <FaStar
                          key={starIdx}
                          onClick={() => handleRating(4, starIdx)}
                          className={
                            ratings[4] !== undefined && starIdx <= ratings[4]
                              ? "text-yellow-400"
                              : "text-gray-400"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* third cart slide */}

            <SwiperSlide>
              <div className="flex flex-col items-center justify-center bg-[#f2f2f2] w-[] group relative">
                <div className="flex items-center justify-between w-[90%]">
                  <div className="flex items-center justify-center text-[9.6px] bg-[rgba(219,68,68,1)] rounded-[4px] w-[48px] h-[20px] text-white">
                    {" "}
                    -30%
                  </div>
                  <div className="flex items-center justify-center gap-[0.5rem]">
                    <motion.img
                      src={frame5}
                      alt=""
                      whileHover={{ scale: 1.35 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer  "
                    />

                    <motion.img
                      whileHover={{ scale: 1.35 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      src={frame9}
                      alt=""
                      className="cursor-pointer"
                       onClick={() =>
                        addToWishlist({
                          id: 3,
                          name: "Samsung Smart-Screen",
                          image: frame11,
                          price: "$20-520",
                        })
                      }
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center w-[90%] h-[141px]">
                  <img src={frame11} alt="" className="" />
                </div>
                <div className="flex items-center justify-center w-full h-[40px] bgred-400">
                  <button class="w-full bg-gray-500 hover:bg-black text-white  py-2 transition duration-300 rounded hidden group-hover:block">
                    Add To Cart
                  </button>
                </div>

                <div className="flex items-center justify-center w-full bg-white">
                  <div className="flex flex-col iems-center justify-center w-[90%]">
                    <div className="relative ">
                      {/* First paragraph */}
                      <p className="peer">Samsung Smart...</p>

                      {/* Second paragraph (hidden until hover) */}
                      <p className="text-[10px] font-bold hidden absolute top-3 left-0 bg-white shadow-[#855656] p-2 peer-hover:block">
                        Samsung Smart-Screen
                      </p>
                    </div>
                    <span className="flex gap-[0.5rem]">
                      <p className="text-[rgba(219,68,68,1)]">$20,520</p>
                      <p className=" text-[#959595] line-through">$30,460</p>
                    </span>

                    <div className="flex gap-2 text-3xl cursor-pointer">
                      {[...Array(totalStars)].map((_, starIdx) => (
                        <FaStar
                          key={starIdx}
                          onClick={() => handleRating(5, starIdx)}
                          className={
                            ratings[5] !== undefined && starIdx <= ratings[5]
                              ? "text-yellow-400"
                              : "text-gray-400"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* fourth cart slide */}

            <SwiperSlide>
              <div className="flex flex-col items-center justify-center bg-[#f2f2f2] w-[] group relative">
                <div className="flex items-center justify-between w-[90%]">
                  <div className="flex items-center justify-center text-[9.6px] bg-[rgba(219,68,68,1)] rounded-[4px] w-[48px] h-[20px] text-white">
                    {" "}
                    -30%
                  </div>
                  <div className="flex items-center justify-center gap-[0.5rem]">
                    <motion.img
                      src={frame5}
                      alt=""
                      whileHover={{ scale: 1.35 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer  "
                    />

                    <motion.img
                      whileHover={{ scale: 1.35 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      src={frame9}
                      alt=""
                      className="cursor-pointer"

                       onClick={() =>
                        addToWishlist({
                          id: 4,
                          name: "Comfort Chair",
                          image: frame12,
                          price: "$220",
                        })
                      }
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center w-[90%] h-[141px] bg-ed-500">
                  <img src={frame12} alt="" className="h-[100%]" />
                </div>
                <div className="flex items-center justify-center w-full h-[40px] bgred-400">
                  <button class="w-full bg-gray-500 hover:bg-black text-white  py-2 transition duration-300 rounded hidden group-hover:block">
                    Add To Cart
                  </button>
                </div>

                <div className="flex items-center justify-center w-full bg-white">
                  <div className="flex flex-col iems-center justify-center w-[90%]">
                    <p className="">Comfort Chair</p>
                    <span className="flex gap-[0.5rem]">
                      <p className="text-[rgba(219,68,68,1)]">$220</p>
                      <p className=" text-[#959595] line-through">$460</p>
                    </span>

                    <div className="flex gap-2 text-3xl cursor-pointer">
                      {[...Array(totalStars)].map((_, starIdx) => (
                        <FaStar
                          key={starIdx}
                          onClick={() => handleRating(6, starIdx)}
                          className={
                            ratings[6] !== undefined && starIdx <= ratings[6]
                              ? "text-yellow-400"
                              : "text-gray-400"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* fifth cart slide */}

            <SwiperSlide>
              <div className="flex flex-col items-center justify-center bg-[#f2f2f2] w-[] group relative">
                <div className="flex items-center justify-between w-[90%]">
                  <div className="flex items-center justify-center text-[9.6px] bg-[rgba(219,68,68,1)] rounded-[4px] w-[48px] h-[20px] text-white">
                    {" "}
                    -30%
                  </div>
                  <div className="flex items-center justify-center gap-[0.5rem]">
                    <motion.img
                      src={frame5}
                      alt=""
                      whileHover={{ scale: 1.35 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer  "
                    />

                    <motion.img
                      whileHover={{ scale: 1.35 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      src={frame9}
                      alt=""
                      className="cursor-pointer"
                       onClick={() =>
                        addToWishlist({
                          id: 5,
                          name: "Echo-Peaker",
                          image: frame13,
                          price: "$120",
                        })
                      }
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center w-[90%] h-[141px]">
                  <img src={frame13} alt="" className="" />
                </div>
                <div className="flex items-center justify-center w-full h-[40px] bgred-400">
                  <button class="w-full bg-gray-500 hover:bg-black text-white  py-2 transition duration-300 rounded hidden group-hover:block">
                    Add To Cart
                  </button>
                </div>

                <div className="flex items-center justify-center w-full bg-white">
                  <div className="flex flex-col iems-center justify-center w-[90%]">
                    <p className=""> Echo-Speaker</p>
                    <span className="flex gap-[0.5rem]">
                      <p className="text-[rgba(219,68,68,1)]">$120</p>
                      <p className=" text-[#959595] line-through">$160</p>
                    </span>

                    <div className="flex gap-2 text-3xl cursor-pointer">
                      {[...Array(totalStars)].map((_, starIdx) => (
                        <FaStar
                          key={starIdx}
                          onClick={() => handleRating(7, starIdx)}
                          className={
                            ratings[7] !== undefined && starIdx <= ratings[7]
                              ? "text-yellow-400"
                              : "text-gray-400"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* sixt cart slide */}

            <SwiperSlide>
              <div className="flex flex-col items-center justify-center bg-[#f2f2f2] w-[] group relative">
                <div className="flex items-center justify-between w-[90%]">
                  <div className="flex items-center justify-center text-[9.6px] bg-[rgba(219,68,68,1)] rounded-[4px] w-[48px] h-[20px] text-white">
                    {" "}
                    -30%
                  </div>
                  <div className="flex items-center justify-center gap-[0.5rem]">
                    <motion.img
                      src={frame5}
                      alt=""
                      whileHover={{ scale: 1.35 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer  "
                    />

                    <motion.img
                      whileHover={{ scale: 1.35 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      src={frame9}
                      alt=""
                      className="cursor-pointer"
                       onClick={() =>
                        addToWishlist({
                          id: 6,
                          name: "Siant Jacket",
                          image: frame4,
                          price: "$50",
                        })
                      }
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center w-[90%] h-[140px]">
                  <img src={frame4} alt="" className="h-[100%]" />
                </div>
                <div className="flex items-center justify-center w-full h-[40px] bgred-400">
                  <button class="w-full bg-gray-500 hover:bg-black text-white  py-2 transition duration-300 rounded hidden group-hover:block">
                    Add To Cart
                  </button>
                </div>

                <div className="flex items-center justify-center w-full bg-white">
                  <div className="flex flex-col iems-center justify-center w-[90%]">
                    <p className=""> Saint Jacket</p>
                    <span className="flex gap-[0.5rem]">
                      <p className="text-[rgba(219,68,68,1)]">$50</p>
                      <p className=" text-[#959595] line-through">$60</p>
                    </span>

                    {/*     

    */}
                    <div className="flex gap-2 text-3xl cursor-pointer">
                      {[...Array(totalStars)].map((_, starIdx) => (
                        <FaStar
                          key={starIdx}
                          onClick={() => handleRating(8, starIdx)}
                          className={
                            ratings[8] !== undefined && starIdx <= ratings[8]
                              ? "text-yellow-400"
                              : "text-gray-400"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* sevent cart slide */}

            <SwiperSlide>
              <div className="flex flex-col items-center justify-center bg-[#f2f2f2] w-[] group relative">
                <div className="flex items-center justify-between w-[90%]">
                  <div className="flex items-center justify-center text-[9.6px] bg-[rgba(219,68,68,1)] rounded-[4px] w-[48px] h-[20px] text-white">
                    {" "}
                    -30%
                  </div>
                  <div className="flex items-center justify-center gap-[0.5rem]">
                    <motion.img
                      src={frame5}
                      alt=""
                      whileHover={{ scale: 1.35 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer  "
                    />

                    <motion.img
                      whileHover={{ scale: 1.35 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      src={frame9}
                      alt=""
                      className="cursor-pointer"
                       onClick={() =>
                        addToWishlist({
                          id: 7,
                          name: "Kid Electric Car",
                          image: frame14,
                          price: "$1,020",
                        })
                      }
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center w-[90%] h-[141px]">
                  <img src={frame14} alt="" className="" />
                </div>
                <div className="flex items-center justify-center w-full h-[40px] bgred-400">
                  <button class="w-full bg-gray-500 hover:bg-black text-white  py-2 transition duration-300 rounded hidden group-hover:block">
                    Add To Cart
                  </button>
                </div>

                <div className="flex items-center justify-center w-full bg-white">
                  <div className="flex flex-col iems-center justify-center w-[90%]">
                    <p className=""> Kid Electric Car</p>
                    <span className="flex gap-[0.5rem]">
                      <p className="text-[rgba(219,68,68,1)]">$1020</p>
                      <p className=" text-[#959595] line-through">$1760</p>
                    </span>

                    <div className="flex gap-2 text-3xl cursor-pointer">
                      {[...Array(totalStars)].map((_, starIdx) => (
                        <FaStar
                          key={starIdx}
                          onClick={() => handleRating(9, starIdx)}
                          className={
                            ratings[9] !== undefined && starIdx <= ratings[9]
                              ? "text-yellow-400"
                              : "text-gray-400"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* eightey cart slide */}

            <SwiperSlide>
              <div className="flex flex-col items-center justify-center bg-[#f2f2f2] w-[] group relative">
                <div className="flex items-center justify-between w-[90%]">
                  <div className="flex items-center justify-center text-[9.6px] bg-[rgba(219,68,68,1)] rounded-[4px] w-[48px] h-[20px] text-white">
                    {" "}
                    -30%
                  </div>
                  <div className="flex items-center justify-center gap-[0.5rem]">
                    <motion.img
                      src={frame5}
                      alt=""
                      whileHover={{ scale: 1.35 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer  "
                    />

                    <motion.img
                      whileHover={{ scale: 1.35 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      src={frame9}
                      alt=""
                      className="cursor-pointer"
                       onClick={() =>
                        addToWishlist({
                          id: 8,
                          name: "Dry Dog Food",
                          image: frame15,
                          price: "$520",
                        })
                      }
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center w-[90%] h-[140px] bg-red-00">
                  <img src={frame15} alt="" className="h-[100%]" />
                </div>
                <div className="flex items-center justify-center w-full h-[40px] bgred-400">
                  <button class="w-full bg-gray-500 hover:bg-black text-white  py-2 transition duration-300 rounded hidden group-hover:block">
                    Add To Cart
                  </button>
                </div>

                <div className="flex items-center justify-center w-full bg-white">
                  <div className="flex flex-col iems-center justify-center w-[90%]">
                    <p className=""> Dry Dog Food</p>
                    <span className="flex gap-[0.5rem]">
                      <p className="text-[rgba(219,68,68,1)]">$520</p>
                      <p className=" text-[#959595] line-through">$760</p>
                    </span>

                    <div className="flex gap-2 text-3xl cursor-pointer">
                      {[...Array(totalStars)].map((_, starIdx) => (
                        <FaStar
                          key={starIdx}
                          onClick={() => handleRating(10, starIdx)}
                          className={
                            ratings[10] !== undefined && starIdx <= ratings[10]
                              ? "text-yellow-400"
                              : "text-gray-400"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="flex items-center justify-center w-full h-[50px] bg-yello-500">
            <button className="flex items-center justify-center bg-[rgba(219,68,68,1)] text-[15px] text-white px-[3.5rem] py-[0.8rem] cursor-pointer rounded-lg hover:bg-white hover:text-[rgba(219,68,68,1)] hover:border-[2px] hover:border-[rgba(219,68,68,1)] transition duration-300">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// export default Flash
