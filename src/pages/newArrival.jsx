import React from "react";
import { motion } from "framer-motion";
import frame1 from "../assets/Rectangle.png";
import frame2 from "../assets/new.png";
import frame3 from "../assets/playstation.png";
import frame4 from "../assets/woman.png";
import frame5 from "../assets/echo.png";
import frame6 from "../assets/gucci.png";

const NewArrival = () => {
  return (
    <motion.section className="flex items-center justify-center w-full px-4 py-6">
      <div className="flex flex-col items-center justify-between w-full max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full bg-white mb-6">
          <div className="flex items-center gap-4">
            <img src={frame1} alt="featured" className="w-8 h-8" />
            <p className="text-[rgba(219,68,68,1)] font-bold">Featured</p>
          </div>
          <div className="mt-4 md:mt-0">
            <img src={frame2} alt="new" className="w-28 md:w-40" />
          </div>
        </div>

        {/* Display section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row gap-6 w-full"
        >
          {/* Left (PlayStation) */}
          <div className="flex items-center justify-center w-full md:w-1/2 bg-[#0d0d0d] relative rounded-lg overflow-hidden">
            <img src={frame3} alt="ps5" className="object-cover w-full h-60 md:h-full" />
            <span className="text-white absolute bottom-6 left-6 flex flex-col gap-2">
              <p className="font-semibold">PlayStation 5</p>
              <p className="text-xs md:text-sm">Black and White version of the PS5 coming out on sale.</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="border-b text-sm md:text-base text-white w-fit cursor-pointer"
              >
                Shop Now
              </motion.button>
            </span>
          </div>

          {/* Right side (stacked) */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {/* Women's collection */}
            <div className="flex flex-col md:flex-row items-center bg-[#0d0d0d] p-4 rounded-lg">
              <span className="text-white flex-1">
                <p className="font-semibold">Women's Collections</p>
                <p className="text-xs md:text-sm">Featured woman collections that give you vibe.</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="border-b text-sm md:text-base text-white w-fit cursor-pointer"
                >
                  Shop Now
                </motion.button>
              </span>
              <div className="flex items-center justify-center mt-4 md:mt-0 md:w-1/2">
                <img src={frame4} alt="woman" className="h-40 md:h-full object-cover" />
              </div>
            </div>

            {/* Bottom row (Speakers + Perfume) */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Speakers */}
              <div className="flex items-center justify-center bg-[#0d0d0d] relative rounded-lg p-2 flex-1">
                <img src={frame5} alt="speakers" className="h-32 md:h-48 object-contain" />
                <span className="text-white absolute bottom-4 left-4 flex flex-col gap-1">
                  <p className="font-semibold">Speakers</p>
                  <p className="text-xs">Amazon wireless speakers</p>
                  <motion.button className="border-b text-sm text-white w-fit cursor-pointer">
                    Shop Now
                  </motion.button>
                </span>
              </div>

              {/* Perfume */}
              <div className="flex items-center justify-center bg-[#0d0d0d] relative rounded-lg p-2 flex-1">
                <img src={frame6} alt="perfume" className="h-32 md:h-48 object-contain" />
                <span className="text-white absolute bottom-4 left-4 flex flex-col gap-1">
                  <p className="font-semibold">Perfume</p>
                  <p className="text-xs">GUCCI INTENSE OUD EDP</p>
                  <motion.button className="border-b text-sm text-white w-fit cursor-pointer">
                    Shop Now
                  </motion.button>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewArrival;
