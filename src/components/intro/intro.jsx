import React from "react";
import { motion } from "framer-motion";
import frame1 from "../../assets/shopnow2.png";
import frame2 from "../../assets/endframe.png";
import frame4 from "../../assets/apple.png";
import frame6 from "../../assets/Vector7.png";
import frame7 from "../../assets/iphone.png";
import frame8 from "../../assets/Vector8.png";
import frame9 from "../../assets/Up.png";
import frame10 from "../../assets/istockphoto.png";
import frame11 from "../../assets/istockphoto2.png";
import frame12 from "../../assets/istockphoto3.png";

// Swiper
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Intro = () => {
  return (
    <motion.section
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="flex items-center justify-center w-full min-h-[calc(100vh-128px)] p-2"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full h-full gap-4">
        {/* Sidebar (hidden on small screens) */}
        <div className="hidden md:flex flex-col w-[20%] h-full border-r border-gray-300 p-4">
          <a href="#" className="flex items-center justify-between py-2">
            Woman's Fashion <img src={frame6} alt="" />
          </a>
          <a href="#" className="flex items-center justify-between py-2">
            Men's Fashion <img src={frame6} alt="" />
          </a>
          <a href="#">Electronics</a>
          <a href="#">Home & Lifestyle</a>
          <a href="#">Medicine</a>
          <a href="#">Sports & Outdoor</a>
          <a href="#">Baby's & Toy</a>
          <a href="#">Groceries & Pets</a>
          <a href="#">Health & Beauty</a>
        </div>

        {/* Swiper Section */}
        <div className="w-full md:w-[80%] h-full">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
          >
            {/* Slide Template */}
            {[frame2, frame10, frame11, frame12].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col md:flex-row items-center justify-between w-full h-full bg-black p-4">
                  {/* Left Content */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 text-white">
                    <div className="flex items-center gap-4">
                      <img src={frame4} alt="" className="w-10 sm:w-16" />
                      <img src={frame7} alt="" className="w-10 sm:w-16" />
                    </div>
                    <div>
                      <img src={frame9} alt="" className="w-10 sm:w-16" />
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={frame1} alt="" className="w-20 sm:w-28" />
                      <img src={frame8} alt="" className="w-6 sm:w-10" />
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
                    <img src={img} alt="" className="w-full h-auto object-contain" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default Intro;
