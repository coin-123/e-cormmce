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
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration:0.9 }}
      className="flex items-center justify-center w-full h-[calc(100vh-128px)] px-2"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[90%] h-full gap-4 md:gap-0">

        {/* Sidebar */}
        <div className="hidden md:flex items-center w-[18%] h-full border-r border-gray-300">
          <div className="flex flex-col justify-between w-[90%] h-[72%]">
            <a href="" className="flex items-center justify-between gap-4">Woman's Fashion <img src={frame6} alt="" /></a>
            <a href="" className="flex items-center justify-between gap-4">Men's Fashion <img src={frame6} alt="" /></a>
            <a href="">Electronics</a>
            <a href="">Home & Lifestyle</a>
            <a href="">Medicine</a>
            <a href="">Sports & Outdoor</a>
            <a href="">Baby's & Toy</a>
            <a href="">Groceries & Pets</a>
            <a href="">Health & Beauty</a>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="flex items-center justify-center w-full md:w-[80%] h-[72%] md:h-full">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {/* Slide 1 */}
            {[frame2, frame10, frame11, frame12].map((img, i) => (

            <SwiperSlide key={i}>
              <div className="flex flex-col md:flex-row items-center justify-between w-full h-[95%] bg-black text-white">
                {/* Left content */}
                <div className="w-full md:w-[50%] flex flex-col justify-center gap-8 p-4 md:pl-[3rem]">
                  <div className="flex items-center gap-4">
                    <img src={frame4} alt="" className="object-contain w-11 sm:w-10" />
                    <img src={frame7} alt="" className="object-contain w-12 sm:w-19" />
                  </div>
                  <div>
                    <img src={frame9} alt="" className="object-contain w-12 sm:w-20" />
                  </div>
                  <div className="flex items-center gap-2 w-[60%]">
                    <img src={frame1} alt="" className="object-contain w-24 sm:w-20" />
                    <img src={frame8} alt="" className="object-contain w-6 sm:w-5" />
                  </div>
                </div>

                {/* Right Image (consistent height) */}
                <div className="flex items-center justify-center w-full md:w-[50%] h-[250px] md:h-[450px]">
                  <img src={img} alt="" className="h-full object-contain" />
                </div>
              </div>
            </SwiperSlide>
            ))};

        
            {/* <SwiperSlide>
              <div className="flex flex-col md:flex-row items-center justify-between w-full h-full bg-black text-white">
                <div className="w-full md:w-[50%] flex flex-col justify-center gap-8 p-4 md:pl-[3rem]">
                  <div className="flex items-center gap-4">
                    <img src={frame4} alt="" className="object-contain w-12 sm:w-16" />
                    <img src={frame7} alt="" className="object-contain w-12 sm:w-16" />
                  </div>
                  <div>
                    <img src={frame9} alt="" className="object-contain w-12 sm:w-16" />
                  </div>
                  <div className="flex items-center gap-2 w-[60%]">
                    <img src={frame1} alt="" className="object-contain w-24 sm:w-32" />
                    <img src={frame8} alt="" className="object-contain w-6 sm:w-10" />
                  </div>
                </div>
                <div className="flex items-center justify-center w-full md:w-[50%] h-[250px] md:h-[450px]">
                  <img src={frame10} alt="" className="h-full object-contain" />
                </div>
              </div>
            </SwiperSlide>

        
            <SwiperSlide>
              <div className="flex flex-col md:flex-row items-center justify-between w-full h-full bg-black text-white">
                <div className="w-full md:w-[50%] flex flex-col justify-center gap-8 p-4 md:pl-[3rem]">
                  <div className="flex items-center gap-4">
                    <img src={frame4} alt="" className="object-contain w-12 sm:w-16" />
                    <img src={frame7} alt="" className="object-contain w-12 sm:w-16" />
                  </div>
                  <div>
                    <img src={frame9} alt="" className="object-contain w-12 sm:w-16" />
                  </div>
                  <div className="flex items-center gap-2 w-[60%]">
                    <img src={frame1} alt="" className="object-contain w-24 sm:w-32" />
                    <img src={frame8} alt="" className="object-contain w-6 sm:w-10" />
                  </div>
                </div>
                <div className="flex items-center justify-center w-full md:w-[50%] h-[250px] md:h-[450px]">
                  <img src={frame11} alt="" className="h-full object-contain" />
                </div>
              </div>
            </SwiperSlide>

          
            <SwiperSlide>
              <div className="flex flex-col md:flex-row items-center justify-between w-full h-full bg-black text-white">
                <div className="w-full md:w-[50%] flex flex-col justify-center gap-8 p-4 md:pl-[3rem]">
                  <div className="flex items-center gap-4">
                    <img src={frame4} alt="" className="object-contain w-12 sm:w-16" />
                    <img src={frame7} alt="" className="object-contain w-12 sm:w-16" />
                  </div>
                  <div>
                    <img src={frame9} alt="" className="object-contain w-12 sm:w-16" />
                  </div>
                  <div className="flex items-center gap-2 w-[60%]">
                    <img src={frame1} alt="" className="object-contain w-24 sm:w-32" />
                    <img src={frame8} alt="" className="object-contain w-6 sm:w-10" />
                  </div>
                </div>
                <div className="flex items-center justify-center w-full md:w-[50%] h-[250px] md:h-[450px]">
                  <img src={frame12} alt="" className="h-full object-contain" />
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </motion.section>
  )
}

export default Intro
