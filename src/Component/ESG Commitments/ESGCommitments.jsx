import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ReadMoreButton from '../ReadMore/ReadMoreButton';
import { Link } from 'react-router-dom';

function ESGCommmitments() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const textInView = useInView(textRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });

  return (
    <div className='mt-16 marginal'>
      <div className='py-12 px-6 bg-gray-50'>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <p className='text-center text-6xl font-extrabold pt-8 text-[#f47732] my-8'>
              ESG Commitments
          </p>
        </motion.div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8 items-center'>
          <motion.div 
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }} 
            animate={imageInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8 }}
            className='w-full max-w-lg mx-auto'
          >
            <img 
              src="./esg.jpg" 
              alt="HIL" 
              className='rounded-lg shadow-lg'
            />
          </motion.div>
          <motion.div 
            ref={textRef}
            initial={{ opacity: 0, x: 50 }} 
            animate={textInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8 }}
            className='p-8 mx-auto'
          >
            <p className='text-gray-700 text-4xl font-medium'>
                IIFL HFL is committed to reducing environmental impact while enhancing societal
                benefits. We employ energy management systems, green lending programs, and
                effective waste management practices to optimise our operations. Our initiatives
                promote green and affordable housing, contributing to the development of
                sustainable communities
            </p>
          </motion.div>
        </div>
      </div>
      <div className='flex justify-center mt-4'>
          <Link to={'/about'}><ReadMoreButton/></Link>
      </div>
    </div>
  );
}

export default ESGCommmitments;
