import React, { useState } from 'react';
import ReadMoreButton from '../ReadMore/ReadMoreButton';

const ValueCreationHome = () => {
  const [activeButton, setActiveButton] = useState('Input');

  return (
    <div className='marginal my-8'>
      <h2 className='text-center text-5xl font-bold text-[#f47732] py-8'>Our Approach to Value Creation</h2>
      <div className="flex flex-wrap gap-8 justify-center py-16">
        <button
          onClick={() => setActiveButton('Input')}
          className={`tab rounded-md font-bold text-white shadow-2xl px-9 py-3 w-fit pl-10 hover:pl-3 transition-all ease-in-out cursor-pointer text-xl hover:rounded-lg ${
            activeButton === 'Input' ? 'bg-[#f47732]' : 'bg-[#87283f]'
          }`}
        >
          Input
        </button>
        <button
          onClick={() => setActiveButton('Process')}
          className={`tab rounded-md font-bold text-white shadow-2xl px-9 py-3 w-fit pl-10 hover:pl-3 transition-all ease-in-out cursor-pointer text-xl hover:rounded-lg ${
            activeButton === 'Process' ? 'bg-[#f47732]' : 'bg-[#87283f]'
          }`}
        >
          Process
        </button>
        <button
          onClick={() => setActiveButton('Output')}
          className={`tab rounded-md font-bold text-white shadow-2xl px-9 py-3 w-fit pl-10 hover:pl-3 transition-all ease-in-out cursor-pointer text-xl hover:rounded-lg ${
            activeButton === 'Output' ? 'bg-[#f47732]' : 'bg-[#87283f]'
          }`}
        >
          Output
        </button>
      </div>

      {activeButton === 'Input' && (
        <div className="flex flex-wrap gap-8 justify-center">
          <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-16'>
            <div className='w-[85%]'>
              <img src="./ValueCreationHome/I1.png" alt="" />
            </div>
            <div className='w-[85%]'>
              <img src="./ValueCreationHome/I2.png" alt="" />
            </div>
            <div className='w-[85%]'>
              <img src="./ValueCreationHome/I3.png" alt="" />
            </div>
            <div className='w-[85%]'>
              <img src="./ValueCreationHome/I4.png" alt="" />
            </div>
            <div className='w-[85%]'>
              <img src="./ValueCreationHome/I5.png" alt="" />
            </div>
            <div className='w-[85%]'>
              <img src="./ValueCreationHome/I6.png" alt="" />
            </div>
          </div>
        </div>
      )}

      {activeButton === 'Process' && (
        <div className="flex flex-wrap gap-8 justify-center">
          <div className='w-[60%]'>
            <img src="./ValueCreationHome/Process.png" alt="" />
          </div>
        </div>
      )}

      {activeButton === 'Output' && (
        <div className="flex flex-wrap gap-8 justify-center">
          <div className='w-[80%]'>
            <img src="./ValueCreationHome/Output.png" alt="" />
          </div>
        </div>
      )}
    <div className='py-10 flex justify-center'>
        <ReadMoreButton/>
    </div>
    </div>
  );
};

export default ValueCreationHome;
