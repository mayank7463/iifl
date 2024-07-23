import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ReadMoreButton from '../ReadMore/ReadMoreButton';
import { Link } from 'react-router-dom';

// Animation settings for text
const textAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8 },
};

// Animation settings for image
const imageAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

function ESGCommmitments() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const textInView = useInView(textRef, { once: false });
  const imageInView = useInView(imageRef, { once: false });

  return (
    <div className='mt-16 marginal'>
      <div className='py-12 px-6 bg-gray-50'>
        <motion.div 
          ref={textRef}
          initial={textAnimation.initial} 
          animate={textInView ? textAnimation.animate : {}} 
          transition={textAnimation.transition}
        >
          <p className='text-center text-6xl font-extrabold pt-8 text-[#f47732] my-8'>
            ESG Commitments
          </p>
        </motion.div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8 items-center'>
          <motion.div 
            ref={imageRef}
            initial={imageAnimation.initial} 
            animate={imageInView ? imageAnimation.animate : {}} 
            transition={imageAnimation.transition}
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
            initial={textAnimation.initial} 
            animate={textInView ? textAnimation.animate : {}} 
            transition={textAnimation.transition}
            className='p-8 mx-auto'
          >
            <p className='text-gray-700 text-4xl font-medium'>
              IIFL HFL is committed to reducing environmental impact while enhancing societal
              benefits. We employ energy management systems, green lending programs, and
              effective waste management practices to optimize our operations. Our initiatives
              promote green and affordable housing, contributing to the development of
              sustainable communities.
            </p>
          </motion.div>
        </div>
      </div>
      <div className='flex justify-center mt-4'>
        <Link to={'/esg-commitments'}>
          <ReadMoreButton />
        </Link>
      </div>
    </div>
  );
}

export default ESGCommmitments;
