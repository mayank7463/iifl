import React from 'react'

function Environment() {
  return (
    <div>
          <div className="relative flex flex-col-reverse lg:flex-col items-center justify-center">
            <div className="lg:relative lg:w-full p-4">
              <img src="./Home/home_img-7.png" alt="" className="w-full m-auto lg:mt-0 mt-4" />
              <div className="absolute top-[10%] left-[14%] hidden lg:block p-4">
                <p className="text-2xl lg:text-4xl max-w-[33%] font-bold text-[#f48172]">
                  IIFL HFL is committed to reducing environmental impact while enhancing societal benefits. We employ energy management systems, green lending programs, and effective waste management practices to optimise our operations. Our initiatives promote green and affordable housing, contributing to the development of sustainable communities.
                </p>
              </div>
            </div>
            <div className="lg:hidden p-4">
              <p className="text-2xl lg:text-4xl max-w-full font-bold text-[#f48172]">
                IIFL HFL is committed to reducing environmental impact while enhancing societal benefits. We employ energy management systems, green lending programs, and effective waste management practices to optimise our operations. Our initiatives promote green and affordable housing, contributing to the development of sustainable communities.
              </p>
            </div>
          </div>
    </div>
  )
}

export default Environment
