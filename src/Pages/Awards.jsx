import React from 'react';

const Awards = () => {
  return (
    <div className=" p-10 relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/BG.svg')" }}>
      <div className="p-4 marginal">
        {/* Header */}
        <h1 className='text-center font-bold text-7xl text-orange mb-10'>
          Awards
        </h1>
        
        {/* Image */}
        <div className="flex justify-center w-full">
          <img className="w-full md:w-2/3 lg:w-4/5" src='./Awards/Awards.png' alt="Awards"/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
