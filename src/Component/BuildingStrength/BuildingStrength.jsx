import React from 'react';
import './BuildingStrength.css'; // Import the CSS file for keyframe animations
import ReadMoreButton from '../ReadMore/ReadMoreButton';
import { Link } from 'react-router-dom';

function BuildingStrength() {
  return (
    <div className='marginal my-8'>
      <div>
        <h2 className='text-center text-5xl font-bold text-[#f47732] py-8'>
          Building Strength for Tomorrow
        </h2>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8 py-8'>
          <div>
            <p className='text-4xl font-bold text-[#1b3281]'>
              Empowering the Everyday Indian with Global Support.
            </p>
            <p className='text-gray-700 text-4xl font-medium py-8 fade-in-slide-up'>
              At IIFL Home Loans, we believe everyone deserves the opportunity to build their dream home. We are committed to financial inclusion and expanding access to affordable housing finance, particularly for individuals from economically weaker sections of society.
            </p>
            <div className='flex justify-start py-8'>
                <Link to={'./'}><ReadMoreButton/></Link>
            </div>
          </div>
          <div style={{ zIndex: 10 }} className='relative w-full lg:h-[445px] h-[200px] overflow-hidden flex justify-center'>
            <div className='absolute top-[3%] w-[75%]' style={{ zIndex: 1, animation: 'cloudAnimation 10s infinite' }}>
              <img src="./BuildingStrength/stren-2.svg" alt="" className="w-full object-contain" />
            </div>
            <div className='absolute w-[75%]' style={{ zIndex: 2 }} >
              <img src="./BuildingStrength/stren-1.svg" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildingStrength;
