import React from 'react'
import { motion } from 'framer-motion';
import frame1 from '../../assets/Frame702.png'

const Features = () => {
  return (
    <motion.section 
       initial={{ opacity: -10, y: 55 }}        // start hidden & pushed down
  whileInView={{ opacity: 1, y: 0 }}     // animate when in view
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }} // run once, trigger at 30% visibil
    className="flex items-center justify-center w-full h-[450px]">
        <div className="flex items-center justify-center w-[90%] h-full ">
            <img src={frame1} alt="" className="" />
        </div>
    </motion.section>
  )
}

export default Features