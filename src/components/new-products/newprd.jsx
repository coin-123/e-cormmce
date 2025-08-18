import React from 'react'
import {  motion } from 'framer-motion'
import frame1 from '../../assets/Rectangle.png'
import frame2 from '../../assets/new.png'
import frame3 from '../../assets/playstation.png'
import frame4 from '../../assets/woman.png'
import frame5 from '../../assets/echo.png'
import frame6 from '../../assets/gucci.png'






const Newprd = () => {
  return (
    <motion.section className="flex items-center justify-center w-full h-[550px] ">
      <div className="flex flex-col items-center justify-between w-[90%] h-full">


        <div className="flex items-center justify-between w-full bg-white h-[17%]">
                  <div className="flex items-center justify-between w-[50%] h-full bg-yelow-300">
                    <div className="flex bg-lue-500 items-center justify-center w-[]  ">
                  <div className="flex flex-col item-center jusitfy-center w-full  gap-[2rem]">
                      <div className="flex items-center justify- bg-red-00 gap-[1rem]">
                      <img src={frame1} alt="" />
                                <p className="text-[rgba(219,68,68,1)] font-bold">Featured</p>
                    </div>
        
                    <div className="flex items-center">
                      <img src={frame2} alt="" />
                    </div>
                  </div>
                    
                  </div>
        
                  
                  </div>
        
                  <div className="flex items-center justify-center  bg-yello-500">
                {/* <button className="flex items-center justify-center bg-[rgba(219,68,68,1)] text-[11px] text-white  px-[1.2rem] py-[0.6rem] cursor-pointer rounded-lg hover:bg-white hover:text-[rgba(219,68,68,1)] hover:border-[2px] hover:border-[rgba(219,68,68,1)] transition duration-300">View All Products</button> */}
        
              </div>
                </div>



                {/* display section */}

                <motion.div 
                  initial={{ opacity: 0, y: 50 }}        // start hidden & pushed down
                  whileInView={{ opacity: 1, y: 0 }}     // animate when in view
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }} // run once, trigger at 30% visibil
                
                className="flex items-center justify-between w-full h-[75%] ">

                  {/* left display section */}

                  <motion.div 
                  
                  className="flex items-center justify-center w-[49%] h-full bg-[#0d0d0d]  relative">
                    <img src={ frame3 } alt="" className="h-full  " />
                    <span className="text-white absolute top-[83%] left-[30%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center gap-[1rem]">
                      <p className="">PlayStation 5</p>
                      <p className="text-[10px]">Black and White version of the PS5 <br /> coming out on sale.</p>

                      <motion.button
                        whileHover={{ scale: 1.1 }} // scale up on hover
                        whileTap={{ scale: 0.9 }} // scale down on tap
                        transition={{ duration: 0.2,    }} // transition duration
                       className="border-b-[1px] text-[15px] text-white  w-[fit-content] py-[0.2rem] cursor-pointer ">
                        Shop Now
                        </motion.button>
                    </span>

                  </motion.div>

                  {/* right display section */}

                  <motion.div className="flex flex-col items-center justify-between w-[49%] h-full ">


                    {/* top section */}

                    <div 
                    
                    className="flex items-center justify-center h-[48%] w-full bg-[#0d0d0d] ">
                      <span className="text-white">
                        <p className="">Women's Collections</p>
                      <p className="text-[10px]">Featureed woman collections that give you vibe.</p>
                      <motion.button
                        whileHover={{ scale: 1.1 }} // scale up on hover
                        whileTap={{ scale: 0.9 }} // scale down on tap
                        transition={{ duration: 0.2,    }} // transition duration
                       className="border-b-[1px] text-[15px] text-white  w-[fit-content] py-[0.2rem] cursor-pointer ">
                        Shop Now
                        </motion.button>

                      </span>
                      <div className="flex items-center justify-center w-[50%] h-full">
                        <img src={ frame4 } alt="" className="h-full" />
                      </div>
                    </div>


                    {/* bottom section */}

                    <div className="flex items-center justify-between h-[48%] w-full  ">

                      {/* left bottom section */}
                      <div className="flex items-center justify-center w-[48%] h-full bg-[#0d0d0d] relative">
                        <img src={frame5} alt="" className="object-corver h-[80%]" />
                         <span className="text-white absolute top-[78%] left-[38%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center gap-[0.3rem]">
                      <p className="">Speakers</p>
                      <p className="text-[10px]">Amozon wireless speakers</p>

                      <motion.button
                        whileHover={{ scale: 1.1 }} // scale up on hover
                        whileTap={{ scale: 0.9 }} // scale down on tap
                        transition={{ duration: 0.2,    }} // transition duration
                       className="border-b-[1px] text-[15px] text-white  w-[fit-content] py-[0.2rem] cursor-pointer ">
                        Shop Now
                        </motion.button>
                    </span>
                      </div>

                      {/* right bottom section */}

                      <div className="flex items-center justify-center w-[48%] h-full bg-[#0d0d0d] relative">
                        <img src={frame6} alt="" className="h-[80%]" />
                         <span className="text-white absolute top-[78%] left-[37%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center gap-[0.3rem]">
                      <p className="">Perfume</p>
                      <p className="text-[10px]">GUCCI INTENSE OUD EDP</p>

                      <motion.button
                        whileHover={{ scale: 1.1 }} // scale up on hover
                        whileTap={{ scale: 0.9 }} // scale down on tap
                        transition={{ duration: 0.2,    }} // transition duration
                       className="border-b-[1px] text-[15px] text-white  w-[fit-content] py-[0.2rem] cursor-pointer ">
                        Shop Now
                        </motion.button>
                    </span>
                      </div>
                     
                    </div>

                    </motion.div>



                     {/* <motion.div
      className="flex gap-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="w-16 h-16 bg-red-500" />
      <motion.div variants={item} className="w-16 h-16 bg-blue-500" />
      <motion.div variants={item} className="w-16 h-16 bg-green-500" />
    </motion.div> */}



                </motion.div>


      </div>
    </motion.section>
  )
}

export default Newprd