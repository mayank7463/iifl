import React from 'react'
import './LandingPage.css'
function LandingPage() {
  return (
    <div>
          <div className='relative bg-[#faf3e9]'>
               <img src="./LandingPage/Main_img.png" alt="" className=' m-auto h-[93vh]'/>
               <div className='absolute top-[40%] left-[60%]'>
                       <p className='text-9xl font-bold'><span className='text-[#1b3281]'>We,</span><span className='text-[#f47f3d]'>for you.</span></p>
                       <p className='text-5xl pt-10'>Digital | Resilient | Sustainable</p>
                       <div className='text-4xl pt-8'>
                           <p className='pt-2'>IIFL Home Finance Ltd.</p>
                           <p className='pt-2'>Integrated Annual</p>
                           <p className='pt-2'>Report 2023-24</p>
                       </div>
               </div>
          </div>
    </div>
  )
}

export default LandingPage
