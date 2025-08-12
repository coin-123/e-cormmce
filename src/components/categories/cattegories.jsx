import React from 'react'
import frame1 from '../../assets/Rectangle.png'
import frame2 from '../../assets/browse.png'
import frame3 from '../../assets/Vector (10).png'
import frame4 from '../../assets/Vector (9).png'
import frame5 from '../../assets/Category-CellPhone.png'
import frame6 from '../../assets/Category-Computer.png'
import frame7 from '../../assets/Category-SmartWatch.png'    
import frame8 from '../../assets/Category-Camera.png'   
import frame9 from '../../assets/Category-Headphone.png'
import frame10 from '../../assets/Category-Gamepad.png'


import { motion } from 'framer-motion'

const Cattegories = () => {
  return (
    <motion.section
    initial={{ opacity: 0, y: 50 }}        // start hidden & pushed down
  whileInView={{ opacity: 1, y: 0 }}     // animate when in view
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }} // run once, trigger at 30% visibility
     className="flex w-full h-[500px] items-center justify-center bg-rd-600 border-t-[1px] borderb-[1px] mb-[3rem] border-gray-300">
        <div className="flex flex-col items-center justify-center w-[80%] h-full">
            <div className="flex items-center justify-between w-full h-[20%] ">
                <div className="flex-col flex ites-center justify-center ">
                    <div className="flex items-center jutify-center bg-blak gap-[1rem] ">
                        <div className="items-center flex">
                            <img src={frame1} alt="" className="" />
                        </div>
                        <p className="text-[rgba(219,68,68,1)] font-bold">Categories</p>
                    </div>

                    <div className="flex items-center justify-center ">
                        <img src={frame2} alt="" className="" />
                    </div>

                </div>


<div className="flex items-center justify-center bg-gree-500 w-[13%] h-full gap-[1.5em]">

            <div className="flex items-center w-[37%] bg-[#e2e2e2] justify-center h-[55%] rounded-[100%] cursor-pointer">  <img src={frame3} alt="" className='' /></div>
            <div className="flex items-center w-[37%] bg-[#e2e2e2] justify-center h-[55%] rounded-[100%] cursor-pointer">  <img src={frame4} alt="" className="" /></div>
          </div>           
          
           </div>




            <div className="bg-rd-200 flex items-center justify-center w-full h-[73%]">
                <div className="flex items-center justify-center w-full h-[55%] bggreen-500 gap-[2rem] ">
                    <div className="flex flex-col items-center justify-center border-[1px] border-gray-300 w-[20%] h-full rounded-[10px] cursor-pointer gap-[1rem] hover:bg-[rgba(219,68,68,1)] hover:text-white transition-all duration-300 ease-in-out">
                        <div className="flex items-center justify-center">
                            <img src={frame5} alt="" className="" />
                        </div>
                        <p className="">Phones</p>
                    </div>
                    <div className="flex flex-col items-center justify-center border-[1px] border-gray-300 w-[20%] h-full rounded-[10px] cursor-pointer gap-[1rem] hover:bg-[rgba(219,68,68,1)] hover:text-white transition-all duration-300 ease-in-out">
                        <div className="flex items-center justify-center">
                            <img src={frame6} alt="" className="" />
                        </div>
                        <p className="">Computer</p>
                    </div>
                    <div className="flex flex-col items-center justify-center border-[1px] border-gray-300 w-[20%] h-full rounded-[10px] cursor-pointer gap-[1rem] hover:bg-[rgba(219,68,68,1)] hover:text-white transition-all duration-300 ease-in-out">
                        <div className="flex items-center justify-center">
                            <img src={frame7} alt="" className="" />
                        </div>
                        <p className="">Smartwatch</p>
                    </div>
                    <div className="flex flex-col items-center justify-center border-[1px] border-gray-300 w-[20%] h-full rounded-[10px] cursor-pointer gap-[1rem] hover:bg-[rgba(219,68,68,1)] hover:text-white transition-all duration-300 ease-in-out">

                        <div className="flex items-center justify-center">
                            <img src={frame8} alt="" className="" />
                        </div>
                        <p className="">Camera</p>
                    </div>
                    <div className="flex flex-col items-center justify-center border-[1px] border-gray-300 w-[20%] h-full rounded-[10px] cursor-pointer gap-[1rem] hover:bg-[rgba(219,68,68,1)] hover:text-white transition-all duration-300 ease-in-out">
                        <div className="flex items-center justify-center">
                            <img src={frame9} alt="" className="" />
                        </div>
                        <p className="">Headphone</p>
                    </div>
                    <div className="flex flex-col items-center justify-center border-[1px] border-gray-300 w-[20%] h-full rounded-[10px] cursor-pointer gap-[1rem] hover:bg-[rgba(219,68,68,1)] hover:text-white transition-all duration-300 ease-in-out">
                        <div className="flex items-center justify-center">
                            <img src={frame10} alt="" className="" />
                        </div>
                        <p className="">Gamepad</p>
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default Cattegories