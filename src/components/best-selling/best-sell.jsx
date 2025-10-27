import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import frame1 from '../../assets/Rectangle.png'
import frame3 from '../../assets/clothes.png'
import frame4 from '../../assets/jbl.png'
import frame5 from '../../assets/eye.png'
import frame6 from '../../assets/best-selling.png'
import frame9 from '../../assets/Wishlist.png'
import frame10 from '../../assets/Frame606.png'
import frame11 from '../../assets/gamer.png'
import frame12 from '../../assets/sam.png'

import { useStore } from "../../context/StoreContext.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { useAuth } from "../../context/AuthContext";
import { showToast } from "../../context/Toast.jsx";



  // products Data
    const flashProducts = [
    { id: 1, name: "Sweater", image: frame3, price: 320 },
    { id: 2, name: "Lofers Bag", image: frame10, price: 300 },
    { id: 3, name: "LG Speaker", image: frame11, price: 463 },
    { id: 4, name: "Book Shelf", image: frame12, price: 500 },
    { id: 5, name: "JBL Speaker", image: frame4, price: 230 },
  ];
// Import  React components
// import { , Slide } from '/react';


// import '/css/pagination';




export default function Flash() {

   const { addToCart } = useCart();
    const { addToWishlist } = useStore();
       const { user } = useAuth();
   const navigate = useNavigate(); // from react-router
    

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
    setRatings(prev => ({ ...prev, [productIndex]: starIndex }));
  };

  // Handle adding to cart with auth check
    const handleAddToCart = (product) => {
    if (!user  ) {
      navigate("/signup"); // redirect if no account
    } else {
      addToCart(product); // allow adding if logged in
      showToast("✅ Operation successful!", "success");
    }
  };

  // handle add to wishlist
  const handleAddToWishlist = (product) => {
    if (!user  ) {
      navigate("/signup"); // redirect if no account
    } else {
      addToWishlist(product); // allow adding if logged in
      showToast("✅ Added Item to Wishlist", "success");
    }
  };



  return (
    <motion.section 
    initial={{ opacity: 0, y: 50 }}        // start hidden & pushed down
  whileInView={{ opacity: 1, y: 0 }}     // animate when in view
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }} // run once, trigger at 30% visibil
    className="flex items-center justify-center w-full bg-rd-900 pt-[3rem] mb-[3rem] border-t-[1px] border-gray-300">
      <div className="flex flex-col items-center justify-center w-[90%] h-full">
        <div className="flex items-center justify-between w-full bg-white h-[20%]">

          <div className="flex items-center justify-between w-[50%] h-full bg-yelow-300">
            <div className="flex bg-lue-500 items-center justify-center w-[]  ">
          <div className="flex flex-col item-center jusitfy-center w-full  gap-[2rem]">
              <div className="flex items-center justify- bg-red-00 gap-[1rem]">
              <img src={frame1} alt="" />
                        <p className="text-[rgba(219,68,68,1)] font-bold">This Month</p>
            </div>

            <div className="flex items-center">
              <img src={frame6} alt="" />
            </div>
          </div>
            
          </div>

          
          </div>

          <div className="flex items-center justify-center  bg-yello-500">
        <button className="flex items-center justify-center bg-[rgba(219,68,68,1)] text-[11px] text-white  px-[1.2rem] py-[0.6rem] cursor-pointer rounded-lg hover:bg-white hover:text-[rgba(219,68,68,1)] hover:border-[2px] hover:border-[rgba(219,68,68,1)] transition duration-300">View All Products</button>

      </div>
        </div>

          {/* all cart holder */}

        <div className="flex items-center justify-between w-full h-[73%]  bgblue-400 pt-[1rem]">
          

         {/* first cart product */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full mt-6">
  {flashProducts.map((product) => (
    <div
      key={product.id}
      className="flex flex-col items-center justify-between bg-gray-200 group relative rounded-lg shadow hover:shadow-lg transition"
    >
      {/* Top icons */}
      <div className="flex items-center justify-between w-[90%] mt-2">
        <div></div>
        <div className="flex gap-2 items-center">
          <motion.img
            src={frame5}
            alt="eye"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
           transition={{ type: "spring", stiffness: 600 }}
            className="cursor-pointer"
          />
          <motion.img
            src={frame9}
            alt="wishlist"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
           transition={{ type: "spring", stiffness: 600 }}
           onClick={() => handleAddToWishlist(flashProducts)}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Product Image */}
      <div className="flex items-center justify-center w-[90%] h-[180px]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain"
        />
      </div>

      {/* Add to Cart */}
      <div className="w-full">
                <button
                  onClick={() => handleAddToCart(flashProducts)}
                  className="w-full bg-black text-white py-2 text-sm font-medium hover:bg-gray-800 transition 
             block md:hidden group-hover:md:block"
                >
                  Add To Cart
                </button>
      </div>

      {/* Info */}
      <div className="w-full bg-white px-3 py-2 text-center">
        <p className="font-medium">{product.name}</p>
        <p className="text-[rgba(219,68,68,1)] font-bold">${product.price}</p>

        {/* Rating */}
        <div className="flex justify-center gap-1 mt-2">
          {[...Array(totalStars)].map((_, starIdx) => (
            <FaStar
              key={starIdx}
              onClick={() => handleRating(product.id, starIdx)}
              className={
                ratings[product.id] !== undefined &&
                starIdx <= ratings[product.id]
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
      </div>
    </motion.section>
  )
}

// export default Flash