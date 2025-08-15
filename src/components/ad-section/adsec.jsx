import React from 'react'
import { motion } from "framer-motion";
import Countdown from 'react-countdown'
import frame1 from '../../assets/jbl.png'

const Adsec = () => {
  return (
    
        <motion.section
        initial={{ opacity: 0, y: 70 }}        // start hidden & pushed down
  whileInView={{ opacity: 1, y: 0 }}     // animate when in view
  transition={{ duration: 0.5, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }} // run once, trigger at 30% visibility
         className="  flex items-center justify-center w-full h-[520px]  mb-[3rem]"
        >

           <div className="flex items-center justify-center w-[90%] h-full bg-black rounded-[3px]">

            {/* Advert Test */}
            <div className="flex flex-col items-cener justify-center w-[50%] h-full bg-blac pl-[2.5rem]  gap-[1rem]">
               
               {/* Advert LOGO */}
                <span className="">
                    <p className="text-[#31c831] font-bold">Categoreis</p>
                </span>


                    {/* Advert Description */}
                <span className="bg-blue-40 w-[] text-white">
                    <p className=" text-[3.5rem] font-bold">Enhance Your </p>
                    <p className="text-[3.5rem] font-bold">Audio Experience</p>
                </span>

                {/* Advert count-down */}
                <div className="">

                    {/* <Countdown date={Date.now() + 100 * 60 * 60 * 60 * 60}   className='text-[3rem]'/> */}
                   
                    <Countdown date={Date.now() + 100000000} renderer={({ days, hours, minutes, seconds }) => (
                        <span className='text-[2rem] text-black bg-white px-[1rem] rounded-[3px]'>
                            {days}d {hours}h {minutes}m {seconds}s
                        </span>
                    )} />
                </div>

                {/* Advert Button */}
                <div className="flex items-center w-[40%] h-[50px]  justify-center mt-[1rem] bg-[#31c831] rounded-[5px] ">
                    <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "#46d846" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-white  cursor-pointer rounded-[5px] w-full h-full">
                        Buy Now

                    </motion.button>
                     
                </div>

                


            </div>

            {/* Advert Image */}
            {/* <div className="flex items-center justify-center w-[50%] h-full bg-amber-300"> */}
                
                 <div className="flex items-center justify-center w-[50%] h-full bg-[radial-gradient(circle_at_center,_black,gray,black,black)] animate-gradientMove rounded-[3px]">
      <img src={frame1} alt="" className="" />
      {/* <h1 className="text-white text-4xl font-bold flex items-center justify-center h-full">
        Animated Radial Gradient 🚀
      </h1> */}
    </div>
            </div>
           {/* </div/> */}
        </motion.section>
   
  )
}

export default Adsec