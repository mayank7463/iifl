import React from 'react'
import './WhoWeAre.css'
function WhoWeAre() {
  return (
    <div className='container-margin'>
          
            <div className='mt-16'>
                <p className='text-8xl font-bold text-[#f47732] py-4'>Who We Are</p>
                <p className='text-5xl font-bold text-[#dda29f] pt-16'>IIFL Home Finance Ltd. is dedicated to providing affordable home loans, empowering
                    the EWS/LIG segments to achieve homeownership. The company champions ecofriendly
                    building practices, promoting sustainable development. With a stateof-
                    the-art IT infrastructure offers a seamless loan experience, streamlining the
                    process from application to closure. The company’s asset-light model, enabled
                    by co-lending arrangements, allows expansion of their reach into deeper markets
                    across India. IIFL Home Finance Ltd. goes beyond financing homes. They contribute
                    to building a sustainable and inclusive future, one affordable home at a time.</p>
            </div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-16'>
                <div className='text-4xl  flex flex-col justify-end'>
                    <p>IIFL Home Finance Ltd., India’s leading
                    affordable housing finance company is
                    a subsidiary of IIFL Finance Ltd., with
                    79.59% shareholding, while Abu Dhabi
                    Investment Authority acquired 20.41%
                    stake in the company in 2022.</p>
                    <h1 className='text-6xl font-bold text-[#1b328a] py-8'>Who We Serve</h1>
                    <p className='py-8'>Our primary focus lies in empowering
                    the first-time home buyers,
                    particularly from the Economically
                    Weaker Sections (EWS) and Lower
                    Income Groups (LIG), across 17 states
                    across the country.</p>
                    <p className='py-4'>Through our co-lending initiatives, we
                    support the government’s objective
                    of enhancing credit availability
                    for marginalised communities at
                    accessible interest rates. Our extensive
                    pan-India distribution network,
                    spanning Tier 1, 2, 3 and 4 cities and
                    towns, ensures that our home loan
                    solutions are easily accessible across
                    the length and breadth of the country.</p>
                </div>
                

                <div className=''>
                     <img src="./WhoWeAre/img-1.svg" alt="" className='w-full'/>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 mt-8 gap-4'>
                 <div className=''>
                    <img src="./Home/home_img-4.png" alt="" />
                    <p className='font-bold text-[#1b328a] text-5xl pt-4'>Mission</p>
                    <p className='text-4xl pt-4'>To be the most
                    respected financial
                    services company
                    in India. Not
                    necessarily the largest
                    or most profitable.</p>
                 </div>
                 <div className=''>
                    <img src="./Home/home_img-5.png" alt="" />
                    <p className='font-bold text-[#1b328a] text-5xl pt-4'>Vision</p>
                    <p className='text-4xl pt-4'>Enabling sustainable
                    housing through
                    strong foundation of
                    innovation, sustainable
                    lending practices
                    and social impact.</p>
                 </div>
                 <div className=''>
                    <img src="./Home/home_img-6.png" alt="" />
                    <p className='font-bold text-[#1b328a] text-5xl pt-4'>Core Values Guiding Our Path</p>
                    <p className='text-4xl pt-4'>Our core values serve as a moral
                    compass in all our activities. Fairness,
                    Integrity and Transparency - FIT is the
                    driving force behind all that we do.</p>
                 </div>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 text-4xl mt-16 gap-4'>
                <div>
                    <p>Fairness in our transactions with all
                    stakeholders including employees,
                    customers, communities,
                    regulators, government, investors,
                    and vendors, bereft of fear or favour.</p>
                </div>
                <div>
                   <p>Integrity and honesty of the utmost
                    nature, in letter, in spirit, and in
                    all our dealings with people 
                    internal or external.</p>
                </div>
                <div>
                    <p>Transparency in all our dealings with
                    stakeholders, media, investors, and
                    the public at large.</p>
                </div>
            </div>
            <div className='mt-16'>
                 <p className='text-6xl text-[#1b328a] font-bold'>Key Highlights (As on March 31st, 2024)</p>
                 <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 pt-16 pb-16'>
                    <div>
                        <p className='text-7xl text-[#f48172] font-bold'>₹35,498.55 <sub>Cr[$4.33Bn]</sub></p>
                        <p className='text-4xl pt-6'>Assets Under Management (AUM)</p>
                    </div>
                    <div>
                        <p className='text-7xl text-[#f48172] font-bold'>2,59,520+*</p>
                        <p className='text-4xl pt-6'>First Time Home Buyers</p>
                    </div>
                    <div>
                        <p className='text-7xl text-[#f48172] font-bold'>2,15,690+*</p>
                        <p className='text-4xl pt-6'>Women Borrowers/
                        Co-Borrowers</p>
                    </div>
                 </div>
                 <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 pt-16 pb-16'>
                    <div>
                        <p className='text-7xl text-[#f48172] font-bold'>₹14.26 <sub>Lakh[$ 0.017 Mn]</sub></p>
                        <p className='text-4xl pt-6'>Average Ticket Size</p>
                    </div>
                    <div>
                        <p className='text-7xl text-[#f48172] font-bold'>1,38,120+*</p>
                        <p className='text-4xl pt-6'>Loans to Informal Segment</p>
                    </div>
                    <div>
                        <p className='text-7xl text-[#f48172] font-bold'>5,250+**</p>
                        <p className='text-4xl pt-6'>Permanent Employees</p>
                    </div>
                 </div>
                 <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 pt-16 pb-16'>
                    <div>
                        <p className='text-7xl text-[#f48172] font-bold'>₹12,861 <sub>Cr[$ 1.57 Bn]</sub></p>
                        <p className='text-4xl pt-6'>Value Disbursed</p>
                    </div>
                 </div>
            </div>
    </div>
  )
}

export default WhoWeAre