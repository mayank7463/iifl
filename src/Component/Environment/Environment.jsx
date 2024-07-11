import React from 'react';
import { motion } from 'framer-motion';

function Environment() {
  return (
    <div className="relative flex flex-col-reverse lg:flex-col items-center justify-center">
      <div className='relative w-full'>
        <img src="./Home/home_img-8.svg" alt="" className="w-full m-auto lg:mt-0 mt-4"/>
        <motion.div
          className='absolute left-[70%] top-[-38%] w-[14%] h-full'
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <img src="./Home/home_img-9.svg" alt="" className="w-full h-full"/>
        </motion.div>
        <motion.div
          className='absolute left-[60%] top-[-42%] w-[9%] h-full'
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <img src="./Home/home_img-10.svg" alt="" className="w-full h-full"/>
        </motion.div>
        <motion.div
          className='absolute left-[82%] top-[-27%] w-[8%] h-full'
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <img src="./Home/home_img-11.svg" alt="" className="w-full h-full"/>
        </motion.div>
        <motion.div
          className='absolute left-[70%] top-[-20%] w-[6%] h-full'
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <img src="./Home/home_img-12.svg" alt="" className="w-full h-full"/>
        </motion.div>
        <motion.div
          className='absolute left-[43%] top-[-6%] w-[6%] h-full'
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <img src="./Home/home_img-13.svg" alt="" className="w-full h-full"/>
        </motion.div>
        <motion.div
          className='absolute left-[12%] top-[5%] w-[6%] h-full'
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        >
          <img src="./Home/home_img-14.svg" alt="" className="w-full h-full"/>
        </motion.div>
      </div>
      <div className="absolute top-[10%] left-[14%] hidden lg:block p-4">
        <p className="text-2xl lg:text-4xl max-w-[33%] font-bold text-[#f48172]">
          IIFL HFL is committed to reducing environmental impact while enhancing societal benefits. We employ energy management systems, green lending programs, and effective waste management practices to optimise our operations. Our initiatives promote green and affordable housing, contributing to the development of sustainable communities.
        </p>
      </div>
      <div className="lg:hidden p-4">
        <p className="text-2xl lg:text-4xl max-w-full font-bold text-[#f48172]">
          IIFL HFL is committed to reducing environmental impact while enhancing societal benefits. We employ energy management systems, green lending programs, and effective waste management practices to optimise our operations. Our initiatives promote green and affordable housing, contributing to the development of sustainable communities.
        </p>
      </div>
    </div>
  );
}

export default Environment;
