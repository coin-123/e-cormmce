import React from 'react'
import { motion } from 'framer-motion';
import frame1 from '../../assets/Frame702'

const Features = () => {
  return (
    <motion.section className="flex items-center jusstify-center w-full h-[450px]">
        <div className="flex items-center justify-center w-[90%] h-full">
            <img src={frame1} alt="" className="" />
        </div>
    </motion.section>
  )
}

export default Features