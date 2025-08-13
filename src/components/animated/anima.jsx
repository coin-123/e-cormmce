import React from 'react'
import frame3 from '../../assets/Frame549.png'
// import { motion } from "framer-motion";

const Anima = () => {
  return (
    <section className="flex items-center justify-center w-full h-[48px] bg-black">
        <div className="flex items-center justify-center h-full w-[60%]"> 
            <div className="flex items-center justify-center h-full gap-[10px]">
                  <p className="text-white"> Summer Sale For All Swim And Free Express Delivery - OFF 50%!</p>           
                 <div className="cursor-pointer"> <p className="text-white underline">Shop Now</p> </div>
            </div>
            <div className=" relative right-[-14rem] cursor-pointer">
                <img src={frame3} alt="" />
            </div>

           {/* <button className="bg-blue-500 text-white px-6 py-3 rounded-lg 
                       transition duration-300 ease-in-out 
                       transform hover:-translate-y-1 hover:scale-105 
                       hover:bg-blue-700">
      Hover Me
    </button>

     <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#1E40AF" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-blue-500 text-white px-6 py-3 rounded-lg"
    >
      Hover Me
    </motion.button> */}
        </div>
    </section>
  )
}

export default Anima