import React from 'react';
import { motion } from 'framer-motion';

function HomeOwnership() {
  return (

    <div className='bg-[#f8f9fa]'>
               <div className="container-margin my-8">
      <motion.div
        className=" rounded-lg p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="lg:text-3xl sm:text-2xl font-bold text-[#f16362] leading-relaxed">
              Recognizing the pivotal role women play in shaping India’s homeownership landscape, we understand their aspirations for a secure and stable home resonate deeply within our society. Empowering women to realize their homeownership dreams isn’t just a mission statement at IIFL Home Finance; it’s a deeply personal commitment. We stand beside them, offering support and guidance at every turn, ensuring they have the resources to turn their aspirations into reality. Because every woman deserves a place to call home, we’re dedicated to making that belief a reality for each of our clients.
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="./Home/home_img-1.png"
              alt="Homeownership"
              className="rounded-lg shadow-image"
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="flex justify-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="./Home/home_img-2.png"
          alt="Homeownership Banner"
          className="w-full rounded-lg shadow-image"
        />
      </motion.div>
    </div>
    </div>

  );
}

export default HomeOwnership;
