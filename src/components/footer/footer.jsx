import React from 'react'
import { motion } from 'framer-motion'
import { FaSadCry, FaSafari, FaStar, FaSubway, FaCentercode } from "react-icons/fa";

// Import from react-icons/fa (Font Awesome set)
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

import { MdOutlineSend } from "react-icons/md";
import frame1 from '../../assets/qrcode.png'
import frame2 from '../../assets/apple.png'
import frame3 from '../../assets/playstore.png'








const Footer = () => {
  return (
    <motion.section className="flex flex-col items-center justify-center w-full h-[450px] bg-black">
        <div className="flex items-center justify-between w-[90%] h-[350px]  text-white">

            {/* first links */}

            <div className="flex flex-col  justify-around  h-[50%] ">
                <p className="text-[2rem] font-bold ">Exclusive</p>

                <span className="h-[50%] justify-around flex flex-col">
                    <p className="font-semibold">Subscribe</p>

                    <p className="font-light text-[10px]">Get 10% off your first order</p>

                    <div className="flex border-1 w-[200px] justify-between pr-[5px]">
                        <input placeholder='Enter your email' id="" className='border-0 outline-0 w-[80%] pl-[3px]' />
                        {/* <FaSafari /> */}
                        <MdOutlineSend size={24} color='' font='' />

                    </div>
                </span>
            </div>

            {/* second links */}

            <div className="flex flex-col  justify-around    h-[50%]">
                <p className="text-[1.3rem] font-bold">Support</p>

                <span className="h-[65%] flex flex-col justify-around">
                    <p className="">111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</p>

                    <p className="text-[13px]">exclusive@gmail.com</p>

                    <p className="">+88015-88888-9999</p>
                </span>
            </div>

            {/* third links */}

            <div className="flex flex-col justify-around  h-[65%] pt-[1.5rem]">
                <p className="text-[1.3rem] font-bold">Account</p>

            <span className="h-[65%] flex flex-col justify-around">
                        <p className="font-semibold">My Account</p>

                    <p className="">Login / Restier</p>

                    <p className="">Cart</p>

                    <p className="">Wishlist</p>

                    <p className="">Shop</p>
                </span>
            </div>

            {/* fourt links */}
            
            <div className="flex flex-col items-center justify-center  h-[50%]">
                <p className="text-[1.3rem] font-bold">Quick Link</p>

                <span className="h-[65%] flex flex-col justify-around">
                    <p className="font-semibold">Privacy Policy</p>

                    <p className="font-light text-[10px]">Terms Of Use</p>

                    <p className="">FAQ</p>

                    <p className="">Contact</p>
                </span>
            </div>

            {/* fifth link */}

            <div className="flex flex-col justify-around  h-[50%]">
                <p className="text-[1.3rem] font-bold">Download App</p>

                <span className="h-[65%] flex flex-col justify-around">

                    <p className="font-light text-[13px] mb-[7px]">Save $3 with App New User Only</p>

                    <div className="flex items-center justify-between w-[260px] ">
                       <div className="flex items-center justify-center w-[100px] h-[95%] bg-rd-400">
                        <img src={frame1} alt="" className="w-full h-[100%]" />
                       </div>
                       <div className="flex flex-col items-center justify-center gap-[5px] ">


                        <div className="flex items-center justify-around border rounded-[5px] h-[45px] w-[150px] cursor-pointer">
                        <img src={frame3} alt="" className="h-[30px]" />
                        <span className="flex flex-col">
                            <p className="text-[9px]">GET IT ON</p>
                            <p className="">Goolgle Play</p>
                        </span>

                        </div>

                        <div className="flex items-center justify-around border rounded-[5px] h-[45px] w-[150px] cursor-pointer">
                        <img src={frame2} alt="" className="h-[33px]" />
                        <span className="flex flex-col">
                            <p className="text-[9px] ">Download on the</p>
                            <p className="text-[17px]">App Store</p>
                        </span>

                        </div>


                       </div>

                    </div>

                     <div className="flex gap-4 text-2xl">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="hover:text-blue-600 cursor-pointer" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="hover:text-sky-400 cursor-pointer" />
      </a>
    </div>
                </span>
            </div>

        </div>

        <div className="text-white">FOOTER GOES HERE</div>
    </motion.section>
  )
}

export default Footer