import React from 'react'
import { motion } from "framer-motion";
import Countdown from 'react-countdown'
import frame1 from '../../assets/jbl.png'

const Adsec = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex items-center justify-center w-full min-h-[520px] mb-[3rem]"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] h-full bg-black rounded-[3px] overflow-hidden">
        
        {/* Text Section */}
        <div className="flex flex-col items-start justify-center w-full md:w-1/2 h-full px-6 py-8 gap-4 text-center md:text-left">
          {/* Logo / Category */}
          <span>
            <p className="text-[#31c831] font-bold">Categories</p>
          </span>

          {/* Heading */}
          <div className="text-white">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Enhance Your
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Audio Experience
            </p>
          </div>

          {/* Countdown */}
          <div>
            <Countdown
              date={Date.now() + 100000000}
              renderer={({ days, hours, minutes, seconds }) => (
                <span className="text-lg sm:text-2xl text-black bg-white px-4 py-1 rounded-[3px]">
                  {days}d {hours}h {minutes}m {seconds}s
                </span>
              )}
            />
          </div>

          {/* Button */}
          <div className="flex items-center justify-center md:justify-start w-full md:w-[40%] h-[50px] mt-4">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#46d846" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#31c831] text-white rounded-[5px] w-full h-full"
            >
              Buy Now
            </motion.button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center w-full md:w-1/2 h-[250px] md:h-full bg-[radial-gradient(circle_at_center,_black,gray,black,black)] animate-gradientMove rounded-[3px]">
          <img src={frame1} alt="Product" className="h-full object-contain" />
        </div>
      </div>
    </motion.section>
  )
}

export default Adsec
