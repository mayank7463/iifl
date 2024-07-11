import React from 'react'
import "./mystyles.css"

const BuildingStrength = () => {
    return (
        <div className='marginal my-9'>
            <div className='flex flex-wrap justify-between'>
                <div className='w-full md:w-[48%]'>
                    <h1 className='font-bold lg:text-7xl text-4xl text-orange mb-10'>
                        Building Strength for<br />Tomorrow
                    </h1>
                    <h4 className='text-blue my-3 font-bold lg:text-4xl text-3xl'>
                        Empowering the Everyday <br /> Indian with Global Support.
                    </h4>
                    <p>
                        At IIFL Home Loans, we believe everyone deserves the opportunity to build their dream home. We are committed to financial inclusion and expanding access to affordable housing finance, particularly for individuals from economically weaker sections of society.
                        <br /><br />
                        We have recently secured significant loan from three major Development Finance Institutions (DFIs) to further this mission:
                    </p>

                </div>
                <div className='w-full md:w-[48%]'>
                    <img src="./pages/bl1.png" alt="" />
                </div>

                <div className='w-full md:w-[31%] my-10 justify-center'>
                    <img src="./pages/bl2.png" className='w-[30%]' alt="" />
                    <h4 className='text-orange my-5 font-bold lg:text-4xl text-3xl'>
                        International Finance Corporation (IFC)
                    </h4>
                    <p className='text-brown my-3'>Investment</p>
                    <p>$ <span className='text-orange font-semibold text-5xl'>100</span> Mn (₹ 820 Cr)</p>
                    <p className='text-brown my-3'>Purpose</p>
                    <ul>
                        <li>Develop and design loan products specifically tailored to meet the needs of EWS and LIG borrowers</li>
                        <li>Offer competitive rates and flexible repayment options to make home- ownership more attainable for low-income families.</li>
                        <li> Embrace technology to streamline application processes and enhance affordability.</li>
                        <li>Expand our reach to serve underserved markets across India.</li>
                    </ul>
                </div>
                <div className='w-full md:w-[31%] my-10'>
                    <img src="./pages/bl4.png" className='w-[30%]' alt="" />
                    <h4 className='text-orange my-5 font-bold lg:text-4xl text-3xl'>
                        U.S. International Development Finance Corporation (DFC)
                    </h4>
                    <p className='text-brown my-3'>Investment</p>
                    <p>$ <span className='text-orange font-semibold text-5xl'>50</span> Mn (₹ 410 Cr)</p>
                    <p className='text-brown my-3'>Purpose</p>
                    <ul>
                        <li>
                        Enhance financial inclusion by providing affordable housing finance to low-income families.
                        </li>
                        <li>
                        Develop loan products and services that cater specifically to the needs of underserved communities.
                        </li>

                        <li>
                        Expand our outreach programs to increase the accessibility of housing finance.
                        </li>
                    </ul>
                </div>
                <div className='w-full md:w-[31%] my-10'>
                    <img src="./pages/bl3.png" className='w-[30%]' alt="" />
                    <h4 className='text-orange my-5 font-bold lg:text-4xl text-3xl'>
                    Asian Development Bank (ADB)
                    </h4>
                    <p className='text-brown my-3'>Investment</p>
                    <p>$ <span className='text-orange font-semibold text-5xl'>68</span> Mn (₹ 557.60 Cr)</p>
                    <p>$ <span className='text-orange font-semibold text-5xl'>1</span> Mn Technical Assistance (₹ 8.2 Cr)</p>
                    <p className='text-brown my-3'>Purpose</p>
                    <ul>
                        <li>
                        Boost women’s access to affordable green housing in India.
                        </li>
                        <li>
                        Support the development of environmentally sustainable and affordable housing projects.
                        </li>
                        <li>
                        Enhance the availability of green housing finance for women borrowers.
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BuildingStrength