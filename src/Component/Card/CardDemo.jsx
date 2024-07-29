
import React from 'react'
import { motion } from 'framer-motion'
import './Card.css'
const CardDemo = () => {
  return (
    <div className='bg-green-grad'>
                <div className='marginal'>
                    <motion.div initial={{ x:"-100%" ,opacity: 0 }}
        whileInView={{x:0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}  className='card-container md:flex-row flex-col'>
                       {
                        [{
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
                            <div className='card md:w-[24%]'>
                            <img src={card.imgSrc} alt="Vision Icon" />
                            <h3>{card.title}</h3>
                            <div className="card-content">
                                <p>{card.description}</p>
                            </div>
                        </div>
                          ))}
                       
                        {/* <div className='card'>
                            <img src="./Homepage/Artboard 14.svg" alt="Vision Icon" />
                            <h3>Vision</h3>
                            <div className="card-content">
                                <p>To deliver a New World of Communications<sup>TM </sup> to advance the reach and leadership of customers as a global digital ecosystem enabler.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img src="./Homepage/Artboard 15.svg" alt="Mission Icon" />
                            <h3>Mission</h3>
                            <div className="card-content">
                                <p>To enable enterprises to succeed in the new world of digital (technologies and business models) by being borderless and always available (to our customers and partners).</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img src="./Homepage/Artboard 16.svg" alt="Shared Ambition Icon" />
                            <h3>Shared Ambition</h3>
                            <div className="card-content">
                                <p>To achieve profitable growth and become a leading digital ecosystem enabler in the eyes of our customers and the industry.</p>
                            </div>
                        </div>
                         */}
                    </motion.div>
                </div>
            </div>
  )
}

export default CardDemo





