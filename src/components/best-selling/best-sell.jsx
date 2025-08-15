import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import frame1 from '../../assets/Rectangle.png'
import frame3 from '../../assets/clothes.png'
import frame5 from '../../assets/eye.png'
import frame6 from '../../assets/best-selling.png'
import frame9 from '../../assets/Wishlist.png'
import frame10 from '../../assets/Frame606.png'
import frame11 from '../../assets/gamer.png'
import frame12 from '../../assets/sam.png'

// Import  React components
// import { , Slide } from '/react';


// import '/css/pagination';




export default function Flash() {





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



  return (
    <motion.section 
    initial={{ opacity: 0, y: 50 }}        // start hidden & pushed down
  whileInView={{ opacity: 1, y: 0 }}     // animate when in view
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }} // run once, trigger at 30% visibil
    className="flex items-center justify-center w-full h-[630px] bg-rd-900 pt-[3rem] mb-[3rem] border-t-[1px] border-gray-300">
      <div className="flex flex-col items-center justify-center w-[90%] h-full">
        <div className="flex items-center justify-between w-full bg-white h-[20%]">

          <div className="flex items-center justify-between w-[50%] h-full bg-yelow-300">
            <div className="flex bg-lue-500 items-center justify-center w-[]  ">
          <div className="flex flex-col item-center jusitfy-center w-full  gap-[2rem]">
              <div className="flex items-center justify- bg-red-00 gap-[1rem]">
              <img src={frame1} alt="" />
                        <p className="text-[rgba(219,68,68,1)] font-bold">Categories</p>
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

          <div className="flex flex-col items-center justify-between bg-gray-200  group relative h-[75%]"> 
            <div className="flex items-center justify-between w-[90%]">

              <div className="flex items-center justify-center text-[9.6px]  rounded-[4px] w-[48px] h-[20px] text-white"> </div>
              <div className="flex items-center justify-center gap-[0.5rem] " >

                <motion.img 
                src={frame5} alt=""
                whileHover={{ scale: 1.35,   }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer  " />

                <motion.img 
                 whileHover={{ scale: 1.35,   }}
                 whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={frame9} alt="" 
                className="cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center justify-center w-[90%] bg-red500 h-[47%]">
              <img src={frame3} alt="" className='' />
            </div>
            <div className="flex items-center justify-center w-full h-[40px] bgred-400">
<button class="w-full bg-gray-500 hover:bg-black text-white  py-2 transition duration-300 rounded hidden group-hover:block">
  Add To Cart
</button>
            </div>

            <div className="flex items-center justify-center w-full bg-white">
              <div className="flex flex-col iems-center justify-center w-[90%]">
                <p className="">HAVIT HV-G92 Gamepad</p>
                <span className="flex gap-[0.5rem]">
                  <p className="text-[rgba(219,68,68,1)]">$320</p>
                  {/* <p className=" text-[#959595] line-through">$160</p> */}
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

           
          {/* second cart product */}

          <div className="flex flex-col items-center justify-between bg-gray-200 h-[75%] group relative"> 
            <div className="flex items-center justify-between w-[90%]">

              <div className="flex items-center justify-center text-[9.6px] g-[rgba(219,68,68,1)] rounded-[4px] w-[48px] h-[20px] text-white"> </div>
              <div className="flex items-center justify-center gap-[0.5rem]">

                <motion.img 
                src={frame5} alt=""
                whileHover={{ scale: 1.35,   }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer  " />

                <motion.img 
                 whileHover={{ scale: 1.35,   }}
                 whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={frame9} alt="" 
                className="cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center justify-center w-[90%]  h-[47%]">
              <img src={frame10} alt="" className='' />
            </div>
            <div className="flex items-center justify-center w-full h-[40px] bgred-400">
<button class="w-full bg-gray-500 hover:bg-black text-white  py-2 transition duration-300 rounded hidden group-hover:block">
  Add To Cart
</button>
            </div>

            <div className="flex items-center justify-center w-full bg-white">
              <div className="flex flex-col iems-center justify-center w-[90%]">
                <p className="">HAVIT HV-G92 Gamepad</p>
                <span className="flex gap-[0.5rem]">
                  <p className="text-[rgba(219,68,68,1)]">$300</p>
                  {/* <p className=" text-[#959595] line-through">$160</p> */}
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

         {/* third cart product */}

          <div className="flex flex-col items-center justify-between bg-gray-200 h-[75%] group relative"> 
            <div className="flex items-center justify-between w-[90%]">

              <div className="flex items-center justify-center text-[9.6px]  rounded-[4px] w-[48px] h-[20px] text-white"> </div>
              <div className="flex items-center justify-center gap-[0.5rem]">

                <motion.img 
                src={frame5} alt=""
                whileHover={{ scale: 1.35,   }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer  " />

                <motion.img 
                 whileHover={{ scale: 1.35,   }}
                 whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={frame9} alt="" 
                className="cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center justify-center w-[90%] bgred-500 h-[46%]">
              <img src={frame11} alt="" className='' />
            </div>
            <div className="flex items-center justify-center w-full h-[40px] bgred-400">
<button class="w-full bg-gray-500 hover:bg-black text-white  py-2 transition duration-300 rounded hidden group-hover:block">
  Add To Cart
</button>
            </div>

            <div className="flex items-center justify-center w-full bg-white">
              <div className="flex flex-col iems-center justify-center w-[90%]">
                <p className="">HAVIT HV-G92 Gamepad</p>
                <span className="flex gap-[0.5rem]">
                  <p className="text-[rgba(219,68,68,1)]">$463</p>
                  {/* <p className=" text-[#959595] line-through">$160</p> */}
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
       
          {/* fourt cart products */}

          <div className="flex flex-col items-center justify-between bg-gray-200 h-[75%] group relative"> 
            <div className="flex items-center justify-between w-[90%]">

              <div className="flex items-center justify-center text-[9.6px]  rounded-[4px] w-[48px] h-[20px] text-white"> </div>
              <div className="flex items-center justify-center gap-[0.5rem]">

                <motion.img 
                src={frame5} alt=""
                whileHover={{ scale: 1.35,   }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer  " />

                <motion.img 
                 whileHover={{ scale: 1.35,   }}
                 whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={frame9} alt="" 
                className="cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center justify-center w-[90%] bgred-500 h-[47%]">
              <img src={frame12} alt="" className='w-ful h-full' />
            </div>
            <div className="flex items-center justify-center w-full h-[40px] bgred-400">
<button class="w-full bg-gray-500 hover:bg-black text-white  py-2 transition duration-300 rounded hidden group-hover:block">
  Add To Cart
</button>
            </div>

            <div className="flex items-center justify-center w-full bg-white">
              <div className="flex flex-col iems-center justify-center w-[90%]">
                <p className="">HAVIT HV-G92 Gamepad</p>
                <span className="flex gap-[0.5rem]">
                  <p className="text-[rgba(219,68,68,1)] ">$500</p>
                  {/* <p className=" text-[#959595] line-through">$160</p> */}
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

          {/* fifth cart product */}

           <div className="flex flex-col items-center justify-between bg-gray-200 h-[75%] group relative "> 
            <div className="flex items-center justify-between w-[90%]">

              <div className="flex items-center justify-center text-[9.6px]  rounded-[4px] w-[48px] h-[20px] text-white"> </div>
              <div className="flex items-center justify-center gap-[0.5rem] " >

                <motion.img 
                src={frame5} alt=""
                whileHover={{ scale: 1.35,   }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness:300 }}
                className="cursor-pointer  " />

                <motion.img 
                 whileHover={{ scale: 1.35,   }}
                 whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={frame9} alt="" 
                className="cursor-pointer" />


              </div>
            </div>

           <div className="flex items-center justify-center w-[90%] bg-ed-500 h-[47%]">
              <img src={frame3} alt="" className='' />
            </div>
            <div className="flex items-center justify-center w-full h-[40px] bgred-400">
<button class="w-full bg-gray-500 hover:bg-black text-white  py-2 transition duration-300 rounded hidden group-hover:block">
  Add To Cart
</button>
            </div>

            <div className="flex items-center justify-center w-full bg-white">
              <div className="flex flex-col iems-center justify-center w-[90%]">
                <p className="">HAVIT HV-G92 Gamepad</p>
                <span className="flex gap-[0.5rem]">
                  <p className="text-[rgba(219,68,68,1)]">$230</p>
                  {/* <p className=" text-[#959595] line-through">$160</p> */}
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
       
       
       
        
     

      



        </div>
      </div>
    </motion.section>
  )
}

// export default Flash