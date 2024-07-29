import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import TextAnimation from '../../AnimateText/AnimatedText';
import TextAnimation01 from '../../AnimateText/AnimatedText01';
import { motion } from 'framer-motion';
import Card from "../Card/Card";
import Highlights from '../Highlights/Highlights';
import Quote from '../Quote/Quote';
import Financial from '../Financial/Financial';
import HomeOwnership from '../HomeOwnership/HomeOwnership';
import WhoWeAreHome from '../WhoWeAreHome/WhoWeAreHome';
import Environment from '../Environment/Environment';
import LeftBorderImage from '../Border/LeftBorderImage';
import RightBorderImage from '../Border/RightBorderImage';
import CardDemo from '../Card/CardDemo';
import DownloadButton from '../DownloadButton/DownloadButton';
import BoardOfDirectorNew from '../Boardofdirector copy/BoardOfDirectorNew';
import ESGCommmitments from '../ESG Commitments/ESGCommitments';
import BuildingStrength from '../BuildingStrength/BuildingStrength';
import ValueCreationHome from '../ValueCreationHome/ValueCreationHome';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function LandingPage() {
  const imgarrurl = ['./Main_img.png', './Main_img2.png'];
  const [imgToShow, setImageToShow] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageToShow((prevIndex) => (prevIndex + 1) % imgarrurl.length);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  const handleClick = async (event, id, index) => {
    event.preventDefault();
    setActiveButton(index);

    const targetElement = document.querySelector(`#${id}`);
    if (targetElement) {
      const headerOffset = 100; // Adjust this value to ensure the heading is fully visible
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      navigate(`${window.location.pathname}#${id}`);
    }
  };

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        const headerOffset = 100; // Adjust this value to ensure the heading is fully visible
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <div>
     {window.innerWidth>=900? <div className='relative'>
        <motion.div initial={{ opacity: 0, y: "30px" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} className='relative bg-[#faf3e9] h-screen'>
          <div className="absolute text-black bottom-[1%] right-[30px] text-2xl">
            IIFL Home Finance Ltd. Integrated Annual Report 2023-24
          </div>
          <img src={imgarrurl[imgToShow]} alt="" className='object-contain h-full' />
          <div className='lg:absolute lg:top-[40%] lg:left-[60%] flex flex-col lg:flex-row items-center lg:items-start'>
            <div className='text-center lg:text-left'>
              <p className='lg:text-9xl font-bold text-8xl'>
                <span className='text-[#1b3281]'><TextAnimation text={'We,'} /></span>
                <span className='text-[#f47f3d]'><TextAnimation text={'for you.'} /></span>
              </p>
              <p className='lg:text-5xl!important pt-10 text-5xl'>
                <TextAnimation01 text={'Digital'} /> | <TextAnimation01 text={'Resilient'} /> | <TextAnimation01 text={'Sustainable'} />
              </p>
              <div className='pt-8 mt-10'>
                <DownloadButton />
              </div>
            </div>
          </div>
        </motion.div>
      </div>:
      <div className='relative'>
        <motion.div initial={{ opacity: 0, y: "30px" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} className='relative bg-[#faf3e9] overflow-hidden'>
          {/* <div className="absolute text-black bottom-[1%] right-[30px] text-sm">
            IIFL Home Finance Ltd. Integrated Annual Report 2023-24
          </div> */}
          <div className=' flex justify-center'>
          <img src={imgarrurl[imgToShow]} alt="" className='object-contain w-[90%] ml-[20%]' />
          </div>
          <div className='lg:absolute lg:top-[40%] lg:left-[60%] flex flex-col lg:flex-row items-center lg:items-start'>
            <div className='text-center lg:text-left'>
              <p className='lg:text-9xl font-bold text-8xl'>
                <span className='text-[#1b3281]'><TextAnimation text={'We,'} /></span>
                <span className='text-[#f47f3d]'><TextAnimation text={'for you.'} /></span>
              </p>
              <p className='lg:text-5xl text-2xl mb-[5%]'>
                <TextAnimation01 text={'Digital'} /> | <TextAnimation01 text={'Resilient'} /> | <TextAnimation01 text={'Sustainable'} />
              </p>
              <span className='text-sm'>IIFL Home Finance Ltd. Integrated Annual Report 2023-24</span>
              <div className='mb-10 mt-5 text-sm'>
                <DownloadButton />
              </div>
            </div>
          </div>
        </motion.div>
      </div>}

    {window.innerWidth>=900&&<div className='text-lg sticky-element'>
      <div className='relative w-full'>
        <div className="main-bg flex ">
          <img className='img-abs-nav' src="./navdemo/01.svg" alt="" />
          {[
            { id: 'who-we-are-home', label: "Who We Are" },
            { id: 'highlights', label: "Key Highlights" },
            { id: 'quote', label: "CEO's Message" },
            { id: 'esg-commitments', label: "ESG Commitments" },
            { id: 'value-creation-home', label: "Our Approach to Value Creations" },
            { id: 'building-strength', label: "Building Strength for Tomorrow" },
            { id: 'financial', label: "Financial Highlights" }
          ].map((item, index) => (
            <button key={index} className='flex flex-col justify-center align-middle' onClick={(e) => handleClick(e, item.id, index)}>
              <img src={`./navdemo/${activeButton === index ? '03.svg' : '02.svg'}`} alt="" />
              <p>{item.label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>}

      <div id="home-ownership">
        <HomeOwnership />
      </div>
      <div id="who-we-are-home">
        <WhoWeAreHome />
      </div>
      <div id="card-demo">
        <CardDemo />
      </div>
      <div id="highlights">
        <Highlights />
      </div>
      <div id="quote">
        <Quote />
      </div>
      <div id="esg-commitments">
        <ESGCommmitments />
      </div>
      <div id="value-creation-home">
        <ValueCreationHome />
      </div>
      <div id="building-strength">
        <BuildingStrength />
      </div>
      <div id="financial">
        <Financial />
      </div>
      <div id="environment">
        <Environment />
      </div>
    </div>
  );
}

export default LandingPage;
