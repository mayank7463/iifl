import React from 'react'
import './LandingPage.css'
import TextAnimation from '../../AnimateText/AnimatedText';
import TextAnimation01 from '../../AnimateText/AnimatedText01';
import { motion } from 'framer-motion';
function LandingPage() {
  return (
    <div>
          <motion.div initial={{opacity:0,y:"20%"}} animate={{opacity:1,y:0}} transition={{duration:0.8,ease:"easeInOut"}}  className='relative bg-[#faf3e9]'>
               <motion.img  src="./LandingPage/Main_img.png" alt="" className=' m-auto h-[93vh]'/>
               <div className='absolute top-[40%] left-[60%]'>
                       <p className='text-9xl font-bold'><span className='text-[#1b3281]'><TextAnimation text={'We,'}/></span><span className='text-[#f47f3d]'><TextAnimation text={'for you.'}/> </span></p>
                       <p className='text-5xl pt-10'><TextAnimation01 text={'Digital'}/>  | <TextAnimation01 text={'Resilient '}/> | <TextAnimation01 text={'Sustainable'}/> </p>
                       <div className='text-4xl pt-8'>
                           <motion.p initial={{opacity:0,translateX:"-50px"}} animate={{opacity:1,translateX:0}} transition={{delay:0.3}} className='pt-2'>IIFL Home Finance Ltd.</motion.p>
                           <motion.p initial={{opacity:0,translateX:"-50px"}} animate={{opacity:1,translateX:0}} transition={{delay:0.4}}  className='pt-2'>Integrated Annual</motion.p>
                           <motion.p initial={{opacity:0,translateX:"-50px"}} animate={{opacity:1,translateX:0}} transition={{delay:0.5}}  className='pt-2'>Report 2023-24</motion.p>
                       </div>
               </div>
          </motion.div>
    </div>
  )
}

export default LandingPage
