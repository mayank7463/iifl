import React from 'react'

function OneHome() {
  return (
    <div className='container-margin mt-16 mb-16'>
         <p className='text-6xl font-bold pt-8 text-[#f47732]'>IIFL One Home</p>
         <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-8 mb-16'>
            <div className=''>
                 <p className='text-4xl pt-16'>In August 2023, we
                    introduced ‘One Home,’ an
                    innovative and pioneering
                    B2C and B2B real estate
                    platform designed to
                    facilitate the property
                    journey for individuals
                    and partners alike. This
                    fully digitised platform
                    enables potential buyers
                    to list properties and
                    participate in e-auctions
                    efficiently and effectively.
                    One Home empowers
                    property seekers through
                    its website, while also
                    simplifying auction
                    processes for banks and
                    non-banking financial
                    companies (NBFCs),
                    facilitating the sale of
                    their non-performing
                    assets (NPAs).</p>
              </div>
            <div className=' flex justify-center'>
                  <img src="./OneHome/one_img-1.png" alt="" className='w-[30%]'/>
            </div>
         </div>
         <div className='grid lg:grid-cols-5 sm:grid-cols-1'>
            <div>
                <img src="./OneHome/one_img-2.svg" alt="" />
            </div>
             <div>
                 <img src="./OneHome/one_img-3.svg" alt="" />
            </div> 
            <div>
                 <img src="./OneHome/one_img-4.svg" alt="" />
            </div> 
            <div>
                 <img src="./OneHome/one_img-5.svg" alt="" />
            </div> 
            <div>
                 <img src="./OneHome/one_img-6.svg" alt="" />
            </div>
         </div>
    </div>
  )
}

export default OneHome
