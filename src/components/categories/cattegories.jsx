import React from "react";
import frame1 from "../../assets/Rectangle.png";
import frame2 from "../../assets/browse.png";
import frame5 from "../../assets/Category-CellPhone.png";
import frame6 from "../../assets/Category-Computer.png";
import frame7 from "../../assets/Category-SmartWatch.png";
import frame8 from "../../assets/Category-Camera.png";
import frame9 from "../../assets/Category-Headphone.png";
import frame10 from "../../assets/Category-Gamepad.png";
import { motion } from "framer-motion";

const Cattegories = () => {
  const items = [
    { img: frame5, name: "Phones" },
    { img: frame6, name: "Computer" },
    { img: frame7, name: "Smartwatch" },
    { img: frame8, name: "Camera" },
    { img: frame9, name: "Headphone" },
    { img: frame10, name: "Gamepad" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full py-8 mb-12 flex justify-center"
    >
      <div className="w-[90%] flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src={frame1} alt="" />
              <p className="text-[rgba(219,68,68,1)] font-bold">Categories</p>
            </div>
            <div>
              <img src={frame2} alt="" />
            </div>
          </div>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-[rgba(219,68,68,1)] hover:text-white transition-all duration-300"
            >
              <img src={item.img} alt={item.name} className="w-12 h-12 object-contain" />
              <p className="mt-2 text-sm sm:text-base">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Cattegories;
