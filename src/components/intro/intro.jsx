import React from 'react'
import { motion } from "framer-motion";
import frame1 from '../../assets/shopnow2.png'
import frame2 from '../../assets/endframe.png'
import frame4 from '../../assets/apple.png'
import frame6 from '../../assets/Vector7.png'
import frame7 from '../../assets/iphone.png'
import frame8 from '../../assets/Vector8.png'
import frame9 from '../../assets/Up.png'
import frame10 from "../../assets/istockphoto.png"
import frame11 from "../../assets/istockphoto2.png"  
import frame12 from "../../assets/istockphoto3.png"


// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Intro = () => {

  



  return (
   <motion.section
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{  scale: 1, opacity: 1 }}
      transition={{ duration:0.9, }}
      className="flex items-center justify-center w-full h-[calc(100vh-128px)]"
    >
      
        <div className="flex items-center justify-between w-[80%] h-[90%]">
            <div className="flex items-center w-[18%] h-full bg-ink-500 border-r-[1px] border-gray-300">
                <div className="flex flex-col items-cente justify-between w-[90%] h-[72%] bg-lue-200">
                    <a href="" className="flex items-center gap-[1rem] justify-between"> Woman's Fashion                     <img src={frame6} alt="" className="" /></a>
                    <a href="" className="flex items-center gap-[1rem] justify-between">Men's Fashion                     <img src={frame6} alt="" className="" /></a>
                    <a href="" className=""> Electronics</a>
                    <a href="" className="">Home & Lifestyle</a>
                    <a href="" className="">Medicine</a>
                    <a href="" className="">Sports & Outdoor</a>
                    <a href="" className="">Baby's & Toy</a>
                    <a href="" className="">Groceries & Pets</a>
                    <a href="" className="">Health & Beauty</a>
                </div>
            </div>
          
            {/* <div className="flex items-center justify-center w-[80%] h-full"> */}


  {/* Swiper Carousel */}
        <div className="flex items-center justify-center w-[80%] h-full ">
          <div className="w-full h-[72%] relative">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              // pagination={{ clickable: true }}
              // navigation={true}
              loop={true}
              className="w-full h-full"
            >
              {/* Slide 1 */}
              <SwiperSlide>

                <div className="flex items-center justify-between w-full h-full bg-black">
                    {/* <img src={frame3} alt="" /> */}

                  

                    <div className=" w-[50%] h-full flex flex-col justify-center gap-[3rem] pl-[3rem]">
                   <div className="flex items-center  gap-[1.3rem]">
                     <img src={frame4} alt="" className="   object-cover" />
                    <img src={frame7} alt="" className="   object-cover" />
                   </div>


                <div className="flex items-center">    <img src={frame9} alt="" className="   object-cover" />   </div>

                   <div className="flex items-center w-[50%]  gap-[8px]">
                     <img src={frame1} alt="" className="   object-cover" />
                    <img src={frame8} alt="" className="   object-cover" />
                   </div>


                    </div>

                    <div className="">
                                          <img src={frame2} alt="" className="  object-cover" />

                    </div>

                  </div>
                
              </SwiperSlide>

              {/* Slide 2 (can be another image or layout) */}
               <SwiperSlide>

                <div className="flex items-center justify-between w-full h-full bg-black">
                    {/* <img src={frame3} alt="" /> */}

                  

                    <div className=" w-[50%] h-full flex flex-col justify-center gap-[3rem] pl-[3rem]">
                   <div className="flex items-center  gap-[1.3rem]">
                     <img src={frame4} alt="" className="   object-cover" />
                    <img src={frame7} alt="" className="   object-cover" />
                   </div>


                <div className="flex items-center">    <img src={frame9} alt="" className="   object-cover" />   </div>

                   <div className="flex items-center w-[50%]  gap-[8px]">
                     <img src={frame1} alt="" className="   object-cover" />
                    <img src={frame8} alt="" className="   object-cover" />
                   </div>


                    </div>

                    <div className="h-[100%] flex items-center justify-center">
                                          <img src={frame10} alt="" className="h-[100%] flex items-center  object-cover" />

                    </div>

                  </div>
                
              </SwiperSlide>
               <SwiperSlide>

                <div className="flex items-center justify-between w-full h-full bg-black">
                    {/* <img src={frame3} alt="" /> */}

                  

                    <div className=" w-[50%] h-full flex flex-col justify-center gap-[3rem] pl-[3rem]">
                   <div className="flex items-center  gap-[1.3rem]">
                     <img src={frame4} alt="" className="   object-cover" />
                    <img src={frame7} alt="" className="   object-cover" />
                   </div>


                <div className="flex items-center">    <img src={frame9} alt="" className="   object-cover" />   </div>

                   <div className="flex items-center w-[50%]  gap-[8px]">
                     <img src={frame1} alt="" className="   object-cover" />
                    <img src={frame8} alt="" className="   object-cover" />
                   </div>


                    </div>

                    <div className="">
                                          <img src={frame11} alt="" className="  object-cover" />

                    </div>

                  </div>
                
              </SwiperSlide>
               <SwiperSlide>

                <div className="flex items-center justify-between w-full h-full bg-black">
                    {/* <img src={frame3} alt="" /> */}

                  

                    <div className=" w-[50%] h-full flex flex-col justify-center gap-[3rem] pl-[3rem]">
                   <div className="flex items-center  gap-[1.3rem]">
                     <img src={frame4} alt="" className="   object-cover" />
                    <img src={frame7} alt="" className="   object-cover" />
                   </div>


                <div className="flex items-center">    <img src={frame9} alt="" className="   object-cover" />   </div>

                   <div className="flex items-center w-[50%]  gap-[8px]">
                     <img src={frame1} alt="" className="   object-cover" />
                    <img src={frame8} alt="" className="   object-cover" />
                   </div>


                    </div>

                    <div className="">
                                          <img src={frame12} alt="" className="  object-cover" />

                    </div>

                  </div>
                
              </SwiperSlide>
             
             
            </Swiper>
          </div>
        </div>



                   {/* </div> */}

 
                    

                 
            
        </div>
    </motion.section>
  )
}

export default Intro