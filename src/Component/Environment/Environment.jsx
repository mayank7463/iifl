import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Environment() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div ref={ref} className="relative flex flex-col-reverse lg:flex-col items-center justify-center">
      <motion.img
        src="./Home/home_img-7.png"
        alt=""
        className="w-full m-auto lg:mt-0 mt-4"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={imageVariants}
        transition={{ duration: 0.5 }}
        style={{ position: 'relative' }}
      />
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={textVariants}
        transition={{ duration: 0.5 }}
        className="absolute top-[10%] left-[14%] hidden lg:block p-4"
      >
        <p className="text-2xl lg:text-4xl max-w-[33%] font-bold text-[#f48172]">
          IIFL HFL is committed to reducing environmental impact while enhancing societal benefits. We employ energy management systems, green lending programs, and effective waste management practices to optimise our operations. Our initiatives promote green and affordable housing, contributing to the development of sustainable communities.
        </p>
      </motion.div>
      <div className="lg:hidden p-4">
        <motion.p
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={textVariants}
          transition={{ duration: 0.5 }}
          className="text-2xl lg:text-4xl max-w-full font-bold text-[#f48172]"
        >
          IIFL HFL is committed to reducing environmental impact while enhancing societal benefits. We employ energy management systems, green lending programs, and effective waste management practices to optimise our operations. Our initiatives promote green and affordable housing, contributing to the development of sustainable communities.
        </motion.p>
      </div>
    </div>
  );
}

export default Environment;
