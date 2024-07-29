import React from 'react';
import { motion } from 'framer-motion';
import './BuildingStrength.css'; // Import the CSS file for keyframe animations
import ReadMoreButton from '../ReadMore/ReadMoreButton';
import { Link } from 'react-router-dom';

function BuildingStrength() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className='marginal my-14'
    >
      <motion.div variants={itemVariants}>
        <h2 className='text-center text-5xl font-bold text-[#f47732] py-8'>
          Building Strength for Tomorrow
        </h2>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8 py-8'>
          <motion.div variants={itemVariants}>
            <motion.p initial={{x:"-40%"}} whileInView={{x:0}} transition={{duration:0.5,delay:0.3}} viewport={{once:true}} className='text-4xl font-bold text-[#1b3281]'>
              Empowering the Everyday Indian with Global Support.
            </motion.p>
            <motion.p initial={{x:"40%"}} whileInView={{x:0}} viewport={{once:true}} transition={{duration:0.5,delay:0.4}}  className='text-gray-700 text-2xl md:text-4xl  font-medium py-8'>
              At IIFL Home Loans, we believe everyone deserves the opportunity to build their dream home. We are committed to financial inclusion and expanding access to affordable housing finance, particularly for individuals from economically weaker sections of society.
            </motion.p>
            <motion.div variants={itemVariants} className='flex justify-start py-8'>
                <Link to={'/building-strength'}><ReadMoreButton/></Link>
            </motion.div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            style={{ zIndex: 10 }} 
            className='relative w-full lg:h-[445px] h-[200px] overflow-hidden flex justify-center'
          >
            <motion.div 
              variants={itemVariants}
              className='absolute top-[3%] w-[75%]' 
              style={{ zIndex: 1, animation: 'cloudAnimation 10s infinite' }}
            >
              <img src="./BuildingStrength/stren-2.svg" alt="" className="w-full object-contain" />
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className='absolute w-[75%]' 
              style={{ zIndex: 2 }} 
            >
              <img src="./BuildingStrength/stren-1.svg" alt="" className="w-full" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default BuildingStrength;
