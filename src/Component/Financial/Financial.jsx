import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './Financial.css'
// import ReadMoreButton from '../ReadMore/ReadMoreButton';

// Register necessary components and plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const dataSets = [
  { label: 'Asset Under Management(AUM)(₹ Cr)', data: [18495, 20694, 23617, 28512, 35499], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'Disbursal(₹ Cr)', data: [3255, 5436, 7684, 10061, 12861], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'Return on Equity(ROE)(%)', data: [13.8, 20.3, 24.9, 17.6,16.9], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'Return on Assets(ROA)(%)', data: [1.8, 2.7, 3.6, 3.9, 4.4], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'Gross Stage 3(%)', data: [1.6, 2.0, 3.1, 2.1, 1.5], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'Net Stage 3(%)', data: [1.2, 1.2, 2.1, 1.5,1.0], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'Revenue(₹ Cr)', data: [1803, 2068, 2225, 2709, 3317], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'Profit after Tax(PAT)(₹ Cr)', data: [245, 401, 593, 768, 1017], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
  { label: 'Capital to Risk (Weighted) Assets Ratio(CRAR)(%)', data: [23.7, 23.0, 30.5, 47.3, 42.8], years: ['FY20', 'FY21', 'FY22', 'FY23', 'FY24'] },
];

const Financial = () => {
  const renderCharts = () => {
    return dataSets.map((dataset, index) => {
      const data = {
        labels: dataset.years,
        datasets: [
          {
            label: dataset.label,
            backgroundColor: dataset.data.map((_, i) => i >= 3 ? (i === 3 ? 'rgba(221,162,165,1)' : 'rgba(135,40,62,1)') : 'rgba(240,218,209,1)'),
            borderColor: 'rgba(221,162,165,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(221,162,165,1)',
            hoverBorderColor: 'rgba(221,162,165,1)',
            borderRadius: 0, // Add rounded corners to bars
            data: dataset.data,
            barThickness: 30, // Adjust bar thickness for spacing
          },
        ],
      };

      const options = {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.raw;
              },
            },
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value) => value,
            color: 'black',
            font: {
              weight: 'bold',
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              display: false, // Hide the y-axis labels
            },
            grid: {
              display: false, // Remove y-axis grid lines
            },
          },
          x: {
            grid: {
              display: false, // Remove x-axis grid lines
            },
          },
        },
        layout: {
          padding: {
            top: 40,
            bottom:35,
          },
        },
        maintainAspectRatio: false,
      };

      return (
        <div key={index} style={{ padding: '8px', height: '380px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h4 className= 'text-2xl font-bold pt-4' style={{ textAlign: 'center', marginBottom: '10px'  }}>{dataset.label}</h4>
          <div style={{ flexGrow: 1, width: '80%' }}>
            <Bar data={data} options={options} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className='container-margin'>
      <h2 className='text-center text-5xl font-bold text-[#f47732] py-8'>Financial Highlights</h2>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        style={{ width: '70%' }} // Adjust the width as needed
      >
        {renderCharts()}
      </Carousel>
        {/* <div className='mb-4'>
            <a href="Progress"><ReadMoreButton/></a>
        </div> */}
           <div className='flex justify-center mt-16'>
              <img src="./Home/home_img-2.png" alt="" className='w-full' />
           </div>
    </div>
    
  );
};

export default Financial;
