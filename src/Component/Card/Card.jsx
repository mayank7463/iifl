import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

function Card() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container-margin mx-auto mt-8 mb-8 px-4 p-16">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        {[{
          imgSrc: "./Home/home_img-4.png",
          title: "Mission",
          description: "To be the most respected financial services company in India. Not necessarily the largest or most profitable."
        },
        {
          imgSrc: "./Home/home_img-5.png",
          title: "Vision",
          description: "Enabling sustainable housing through strong foundation of  innovation, sustainable lending practices and social impact."
        },
        {
          imgSrc: "./Home/home_img-6.png",
          title: "Core Values",
          description: "Our core values serve as a moral compass in all our activities. Fairness, Integrity and Transparency - FIT is thedriving force behind all that we do."
        }].map((card, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#fef9f5] p-4 rounded-lg shadow-lg"
          >
            <div className="flex gap-4 items-center pl-14">
              <img src={card.imgSrc} alt="" className="w-[19%] h-[10%] object-cover" />
              <span className="flex justify-center items-center text-3xl font-bold">{card.title}</span>
            </div>
            <div className="m-16">
              <p className='text-3xl'>{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className='flex justify-center mt-16'>
         <img src="./Home/home_img-2.png" alt="" className='w-full' />
      </div>
    </div>
  );
}

export default Card;
