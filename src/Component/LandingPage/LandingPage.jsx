import React,{useState,useEffect} from 'react'
import './LandingPage.css'
import TextAnimation from '../../AnimateText/AnimatedText';
import TextAnimation01 from '../../AnimateText/AnimatedText01';
import { motion } from 'framer-motion';
import Card from "../Card/Card"
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
function LandingPage() {
  const imgarrurl = ['./Main_img.png', './Main_img2.png'];
  const [imgToShow, setImageToShow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageToShow((prevIndex) => (prevIndex + 1) % imgarrurl.length);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative'>
        {/* <LeftBorderImage />
                <RightBorderImage /> */}
              
                <motion.div initial={{ opacity: 0, y: "30px" }} animate={{ opacity: 1, y: 0}} transition={{ duration: 0.8, ease: "easeInOut" }} className='relative bg-[#faf3e9] h-screen'>
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
      <p className='lg:text-5xl!important  pt-10 text-5xl'>
        <TextAnimation01 text={'Digital'} /> | <TextAnimation01 text={'Resilient'} /> | <TextAnimation01 text={'Sustainable'} />
       
      </p>
      {/* <div className='lg:text-4xl pt-8'>
        <motion.p initial={{ opacity: 0, translateX: "-50px" }} animate={{ opacity: 1, translateX: 0 }} transition={{ delay: 0.3 }} className='pt-2'>IIFL Home Finance Ltd.</motion.p>
        <motion.p initial={{ opacity: 0, translateX: "-50px" }} animate={{ opacity: 1, translateX: 0 }} transition={{ delay: 0.4 }} className='pt-2'>Integrated Annual</motion.p>
        <motion.p initial={{ opacity: 0, translateX: "-50px" }} animate={{ opacity: 1, translateX: 0 }} transition={{ delay: 0.5 }} className='pt-2'>Report 2023-24</motion.p>
      </div> */}
        <div className='pt-8 mt-10'>
           <DownloadButton/>
        </div>
    </div>
  </div>
</motion.div>

      <HomeOwnership/>
      <WhoWeAreHome/>
      <CardDemo/>
      <Highlights/>
      <Quote/>
      <ESGCommmitments/>
      {/* <BoardOfDirectorNew/> */}
      <ValueCreationHome/>
      <BuildingStrength/>
      <Financial/>
      <Environment/>
      
    </div>
  )
}

export default LandingPage
