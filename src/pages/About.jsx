import React from "react";
import { motion } from "framer-motion";
import Nav from "../components/header/navbarapp.jsx";
import Footer from "../components/footer/footer.jsx";
import Anima from "../components/animated/anima.jsx";
import frame1 from "../assets/twoafrican.png";
import frame2 from "../assets/Service.png";
import frame3 from "../assets/Services.png";
import frame4 from "../assets/Services1.png";
import frame5 from "../assets/Services2.png";
import frame6 from "../assets/tom.png";
import frame7 from "../assets/emma.png";
import frame8 from "../assets/will.png";
import frame9 from "../assets/bus.png";
import frame10 from "../assets/headph.png";
import frame11 from "../assets/check.png";

import logoImg from "../assets/Exclusive.png";
import wishlist from "../assets/Wishlist.png";
import cart from "../assets/Cart1.png";
import user from "../assets/user.png";
import searchIcon from "../assets/Vector6.png";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Sign Up", path: "/signup" },
];

const icons = [
  { src: wishlist, alt: "Wishlist" },
  { src: cart, alt: "Cart" },
  { src: user, alt: "User" },
  { src: searchIcon, alt: "searchIcon" },
];

export const About = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full ">
      <Anima />
      <Nav
        logo={logoImg}
        links={links}
        bgColor="bg-white"
        textColor="text-black"
        showSearch={true}
        icons={icons}
      />

      {/* About description */}

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="mb-[7rem] flex items-center justify-between w-[90%] h-[550px] mt-[3rem]"
      >
        {/* left sec */}

        <div className="flex flex-col gap-[1.5rem] justify-center w-[40%] h-auto">
          <h1 className=" text-[3rem] font-semibold">Our Story</h1>

          <span className="flex flex-col items-center justify-center gap-[1.2rem] ">
            <p className="">
              Launched in 2015, Exclusive is South Asia's premier online
              shopping marketplace with an active presence in Bangladesh,
              Supported by wide ranbe of tailored marketing, data and service
              solutins, Exclusive has 10,500 sallers and 300 brands and serves 3
              millions custimers across the region.
            </p>

            <p className="">
              Exclusive has more than 1 million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </span>
        </div>

        {/* right sec */}

        <div className="flex items-center justify-centerw-[50%] h-[90%] ">
          <img src={frame1} alt="" className=" h-full " />
        </div>
      </motion.div>

      {/* About features */}

      <motion.div
        initial={{ opacity: 0, y: 60 }} // start hidden & pushed down
        whileInView={{ opacity: 1, y: 0 }} // animate when in view
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} // run once, trigger at 30% visibil
        className="flex items-center justify-center w-[90%]  mb-[10rem] "
      >
        <div className="grid-container ">
          <div className="flex flex-col items-center justify-center ">
            <img src={frame2} alt="" className="" />
            <span className="">
              <p className="text-[20px] font-medium">10.5k</p>
              <p className="text-[13px]">Sallers active our site</p>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <img src={frame3} alt="" className="" />

            <span className="">
              <p className="text-[20px] font-medium">33k</p>
              <p className=" text-[13px]">Monthly products Sale</p>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <img src={frame4} alt="" className="" />

            <span className="">
              <p className="text-[20px] font-medium">45.5k</p>
              <p className="text-[13px]">Customer active in our site</p>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <img src={frame5} alt="" className="" />

            <span className="">
              <p className="text-[20px] font-medium">25k</p>
              <p className="text-[13px]">Anual gross sales in our site</p>
            </span>
          </div>
        </div>
      </motion.div>

      {/* founders appartment */}

      <motion.div
        initial={{ opacity: 0, y: 60 }} // start hidden & pushed down
        whileInView={{ opacity: 1, y: 0 }} // animate when in view
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} // run once, trigger at 30% visibil
        className="flex items-center justify-center w-[90%] h-[500px] mb-[10rem]"
      >
        <div className="flex items-center justify-center w-[100%] h-full">
          <div className="gridcontainer">
            <div className="flex flex-col items-center justify-center gap-[1rem] ">
              <img src={frame6} alt="" className="w-[200px]" />

              <span className="">
                <p className="text-[20px] font-medium">Tom Cruise</p>
                <p className=" text-[13px]">Founder & Chairman</p>
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-[1rem]">
              <img src={frame7} alt="" className="w-[200px]" />

              <span className="">
                <p className="text-[20px] font-medium"> Emma Watson</p>
                <p className="text-[13px]">Managing Director</p>
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-[1rem]">
              <img src={frame8} alt="" className="w-[200px]" />

              <span className="">
                <p className="text-[20px] font-medium">Will Smith</p>
                <p className="text-[13px]">Product Designer</p>
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* qualification area */}

      <motion.div
        initial={{ opacity: 0, y: 60 }} // start hidden & pushed down
        whileInView={{ opacity: 1, y: 0 }} // animate when in view
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} // run once, trigger at 30% visibil
        className="flex items-center justify-center w-[90%]  mb-[10rem] "
      >
        <div className="qul-grid-container ">
          <div className="flex flex-col items-center justify-center ">
            <img src={frame9} alt="" className="" />
            <span className="">
              <p className="text-[20px] font-medium">Free And Fast Delivery</p>
              <p className="text-[13px]">
                Free delivery for all orders over $140
              </p>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <img src={frame10} alt="" className="" />

            <span className="">
              <p className="text-[20px] font-medium">24/7 Customer Service</p>
              <p className=" text-[13px]">Eriendly 24/7 customer support</p>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <img src={frame11} alt="" className="" />

            <span className="">
              <p className="text-[20px] font-medium">Money Back Guarantee</p>
              <p className="text-[13px]">
                We return money within 30 days of purchase
              </p>
            </span>
          </div>
        </div>
      </motion.div>

      <Footer />
    </section>
  );
};
