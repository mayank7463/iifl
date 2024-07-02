import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import LeftBorderImage from './Component/Border/LeftBorderImage'
import RightBorderImage from './Component/Border/RightBorderImage'
import LandingPage from './Component/LandingPage/LandingPage'
import Financial from './Component/Financial/Financial'
import Quote from './Component/Quote/Quote'
import Highlights from './Component/Highlights/Highlights'
import WhoWeAre from './Component/WhoWeAre/WhoWeAre'
import WeDo from './Component/WeDo/WeDo'
import Card from './Component/Card/Card'

import './App.css'
import Championingfuture from './Downwardpages/Championingfuture';

const App = ({ children }) => {
  return (
    <>
     <Navbar/>
      <div className="relative">
          <LeftBorderImage />
          <RightBorderImage />
          {/* Your navigation component */}
          {/* Your main content */}
         
          <LandingPage/>
          <div className='container-margin mt-8 mb-8'>
              <div className='grid lg:grid-cols-2 sm:grid-cols-1 '>
                   <div className='flex justify-center items-center'>
                       <p className='text-4xl font-bold text-[#f16362]'>Recognizing the pivotal role women play in shaping India’s homeownership landscape, we understand their aspirations for a secure and stable home resonate deeply within our society. Empowering women to realize their homeownership dreams isn’t just a mission statement at IIFL Home Finance; it’s a deeply personal commitment. We stand beside them, offering support and guidance at every turn, ensuring they have the resources to turn their aspirations into reality. Because every woman deserves a place to call home, we’re dedicated to making that belief a reality for each of our clients.</p>
                   </div>
                   <div className='flex justify-center'>
                       <img src="./Home/home_img-1.png" alt="" />
                   </div>
              </div>
              <div className='flex justify-center mt-16'>
                 <img src="./Home/home_img-2.png" alt="" className='w-full' />
              </div>
          </div>
          <div className='container-margin '>
               <p className='text-center text-6xl font-bold pt-8 text-[#f47732]'>Who We Are</p>
               <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                  <div>
                     <img src="./Home/home_img-3.png" alt="" />
                  </div>
                  <div className='flex justify-center items-center text-4xl text-[#d69933] font-bold'>
                     <p>IIFL Home Finance Ltd. is dedicated to providing affordable home loans, empowering the EWS/LIG segments to achieve homeownership. The company champions eco-friendly building practices, promoting sustainable development. With a state-of-the-art IT infrastructure offers a seamless loan experience, streamlining the process from application to closure. The company’s asset-light model, enabled by co-lending arrangements, allows expansion of their reach into deeper markets across India. IIFL Home Finance Ltd. goes beyond financing homes. They contribute to building a sustainable and inclusive future, one affordable home at a time</p>
                  </div>
               </div>
          </div>
          <Card/>
          <Highlights/>
          <Quote/>
          <Financial/>
          <div>
              <div className='relative'>
                    <img src="./Home/home_img-7.png" alt="" className='w-[95%] m-auto'/>
                    <div className='absolute top-[10%] left-[14%]'>
                       <p className='text-4xl max-w-[30%] font-bold text-[#f48172]'>IIFL HFL is committed to reducing environmental impact while enhancing societal benefits. We employ energy management systems, green lending programs, and effective waste management practices to optimise our operations. Our initiatives promote green and affordable housing, contributing to the development of sustainable communities</p>
                    </div>
              </div>
          </div>
          <WeDo/>
          <Championingfuture/>
          {children}
      </div></>
  );
};

export default App