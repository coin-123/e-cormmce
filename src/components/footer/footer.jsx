import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineSend } from "react-icons/md";
import frame1 from '../../assets/qrcode.png'
import frame2 from '../../assets/apple.png'
import frame3 from '../../assets/playstore.png'
import frame4 from '../../assets/footer.png'

const Footer = () => {
  return (
    <motion.section className="flex flex-col items-center justify-between w-full bg-black">
      {/* Main content */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between w-[90%] py-10 text-white gap-8 md:gap-0">
        
        {/* first links */}
        <div className="flex flex-col justify-around h-auto md:h-[50%]">
          <p className="text-[2rem] font-bold">Exclusive</p>
          <span className="mt-4 flex flex-col gap-3">
            <p className="font-semibold">Subscribe</p>
            <p className="font-light text-[10px]">Get 10% off your first order</p>
            <div className="flex border w-[200px] justify-between pr-[5px]">
              <input placeholder='Enter your email' className='border-0 outline-0 w-[80%] pl-[3px] text-black' />
              <MdOutlineSend size={24} />
            </div>
          </span>
        </div>

        {/* second links */}
        <div className="flex flex-col justify-around h-auto md:h-[50%]">
          <p className="text-[1.3rem] font-bold">Support</p>
          <span className="mt-4 flex flex-col gap-2">
            <p>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</p>
            <p className="text-[13px]">exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </span>
        </div>

        {/* third links */}
        <div className="flex flex-col justify-around h-auto md:h-[65%] pt-[1.5rem]">
          <p className="text-[1.3rem] font-bold">Account</p>
          <span className="mt-4 flex flex-col gap-2">
            <p className="font-semibold">My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </span>
        </div>

        {/* fourth links */}
        <div className="flex flex-col h-auto items-start md:items-center">
          <p className="text-[1.3rem] font-bold">Quick Link</p>
          <span className="mt-4 flex flex-col gap-2">
            <p className="font-semibold">Privacy Policy</p>
            <p className="font-light text-[10px]">Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </span>
        </div>

        {/* fifth links */}
        <div className="flex flex-col justify-around h-auto md:h-[50%]">
          <p className="text-[1.3rem] font-bold">Download App</p>
          <span className="mt-4 flex flex-col gap-4">
            <p className="font-light text-[13px]">Save $3 with App New User Only</p>
            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
              <div className="w-[100px]">
                <img src={frame1} alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center border rounded-[5px] h-[45px] w-[150px] cursor-pointer">
                  <img src={frame3} alt="" className="h-[30px] ml-2" />
                  <span className="ml-2 flex flex-col">
                    <p className="text-[9px]">GET IT ON</p>
                    <p>Google Play</p>
                  </span>
                </div>
                <div className="flex items-center border rounded-[5px] h-[45px] w-[150px] cursor-pointer">
                  <img src={frame2} alt="" className="h-[30px] ml-2" />
                  <span className="ml-2 flex flex-col">
                    <p className="text-[9px]">Download on the</p>
                    <p className="text-[17px]">App Store</p>
                  </span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-6 text-2xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="hover:text-blue-600 cursor-pointer" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-blue-500 cursor-pointer" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-pink-500 cursor-pointer" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="hover:text-sky-400 cursor-pointer" /></a>
            </div>
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-[15%] flex items-center justify-center w-full bg-[#070707] py-4">
        <img src={frame4} alt="" />
      </div>
    </motion.section>
  )
}

export default Footer
