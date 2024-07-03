import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import ReadMoreButton from '../ReadMore/ReadMoreButton';

const Quote = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className='container mx-auto px-4'>
      <div className='quote-section pt-2'>
        <div className="carousel-container">
          <Slider {...settings}>
            <div className='p-4'>
              <h1 className='text-center lg:text-5xl mb-4 font-bold text-[#f47732]'>Message from MD & CEO</h1>
              <div className="slide">
                <img src="./Quote/quote_img-1.webp" className='object-contain mx-auto' alt="Quote 1" />
              </div>
              {/* <div className='flex justify-center mt-8 pb-4'>
                <a href="Chairman-message"> <ReadMoreButton/></a>
              </div> */}
            </div>
            <div className=' p-4'>
              <h1 className='text-center lg:text-5xl mb-4 font-bold text-[#f47732]'>Message from WTD & CFO</h1>
              <div className="slide">
                <img src="./Quote/quote_img-2.webp" className='object-contain mx-auto' alt="Quote 2" />
              </div>
              {/* <div className='flex justify-center mt-8 pb-4'>
                <a href="CFO"> <ReadMoreButton/></a>
              </div> */}
            </div>
          </Slider>
        </div>
      </div>
      <div className='flex justify-center mt-16'>
        <img src="./Home/home_img-2.png" alt="Home" className='w-full ' />
      </div>
    </div>
  );
};

export default Quote;
