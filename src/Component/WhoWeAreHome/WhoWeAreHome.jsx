import React from 'react'
import ReadMoreButton from '../ReadMore/ReadMoreButton'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
function WhoWeAreHome() {
  return (
    <div>
         <div className='container-margin '>
                
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10'>
                    <motion.div initial={{x:"-10%",opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.6,ease:"easeInOut"}}  >
                        <img className='object-contain h-[400px]' src="./Home/home_img-3.png" alt="" />
                    </motion.div>
                    <motion.div initial={{x:"10%",opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.6,ease:"easeInOut"}}  className='flex justify-start items-start text-4xl text-[#d69933] font-bold flex-col'>
                    <p className=' text-6xl font-bold pt-8 text-[#f47732] my-8'>Who We Are</p>
                        <p>IIFL Home Finance Ltd. is dedicated to providing affordable home loans, empowering the EWS/LIG segments to achieve homeownership. The company champions eco-friendly building practices, promoting sustainable development. With a state-of-the-art IT infrastructure offers a seamless loan experience, streamlining the process from application to closure. The company’s asset-light model, enabled by co-lending arrangements, allows expansion of their reach into deeper markets across India. IIFL Home Finance Ltd. goes beyond financing homes. They contribute to building a sustainable and inclusive future, one affordable home at a time</p>
                        <div className='mt-8'>
                    <Link to={'/who-we-are'}><ReadMoreButton/></Link>
                </div>
                    </motion.div>
                   
                </div>
               
            </div>
    </div>
  )
}

export default WhoWeAreHome
