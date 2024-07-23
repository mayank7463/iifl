import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BodSlider.css";
const BodSlider = () => {
    const bodArray = [
        ["Mr. Suresh Narayanan", "Chairman and Managing Director", "./Bod/MD1.png"],
        [
          "Mr. R. V. Kanoria*",
          "Independent Non-Executive Director",
          "./Bod/MD2.png",
        ],
        ["Mr. P. R. Ramesh", "Independent Non-Executive Director", "./Bod/MD3.png"],
        [
          "Ms. Anjali Bansal",
          "Independent Non-Executive Director",
          "./Bod/MD4.png",
        ],
        [
          "Ms. Alpana Parida",
          "Independent Non-Executive Director",
          "./Bod/MD5.png",
        ],
        [
          "Ms. Svetlana Boldina",
          "Executive Director – F&C and CFO",
          "./Bod/MD6.png",
        ],
        [
          "Mr. Satish Srinivasana",
          "Executive Director - Technical",
          "./Bod/MD7.png",
        ],
        [
          "Ms. Suneeta Reddy*",
          "Independent Non-Executive Director",
          "./Bod/MD8.png",
        ],
        [
          "Mr. Sidharth Kumar Birla**",
          "Independent Non-Executive Director",
          "./Bod/sidhartji.png",
        ],
        [
          "Mr. Pramod Kumar Rai",
          "Company Secretary and Compliance Officer",
          "./Bod/MD9.png",
        ],
      ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container bod-sect mx-auto">
      <Slider {...settings}>
        {bodArray.map((data,key) => (
          <div key={key} className="bod-cont-main w-[320px] h-[580px]  border border-gray-200 rounded-lg shadow bg-rgb(146 211 200) border-pink-200 ml-4 ">
            <a href="#">
              <img
                className="rounded-t-lg h-[380px] w-[320px]"
                src={data[2]}
                alt="Noteworthy technology acquisitions 2021"
              />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold   bod-name">{data[0]}</h5>

              <p className="mb-2 bod-Desg">{data[1]}</p>
            </div>
          </div>
          //   <div key={card.id} className="p-4">
          //     <div className="cardx text-center border-0 bg-white shadow-lg rounded-lg overflow-hidden">
          //       <img src={card.img} className="w-full h-48 object-contain" alt={card.title} />
          //       <div className="p-4">
          //         <h5 className="text-gray-800 font-bold">{card.title}</h5>
          //         <p className="text-gray-600">{card.text}</p>
          //       </div>
          //     </div>
          //   </div>
        ))}
      </Slider>
    </div>
  );
};

export default BodSlider;
