
import Marquee from 'react-fast-marquee';
import './Highlights.css';
import TextAnimation01 from '../../AnimateText/AnimatedText01';

const callouts = [
  { id: 1, title: '₹35,498.55 Cr[$4.33Bn]', text: 'Assets Under Management (AUM)' },
  { id: 2, title: '2,59,520+*', text: 'First Time Home Buyers' },
  { id: 3, title: '2,15,690+*', text: 'Women Borrowers/ Co-Borrowers' },
  { id: 4, title: '₹14.26 Lakh[$0.017Mn]', text: 'Average Ticket Size' },
  { id: 5, title: '1,38,120+*', text: 'Loans to Informal Segment' },
  { id: 6, title: '5,250+**', text: 'Permanent Employees' },
  { id: 7, title: '₹12,861 Cr[$ 1.57 Bn]', text: 'Value Disbursed' },
];


const Highlights = () => {
  return (
    <div className="marquee text-white py-4">
      <h1 className="high-head text-center text-[#f48172]"><TextAnimation01 text={'Key Highlights (As on March 31st, 2024)'}/> </h1>
      <Marquee gradient={false}>
        {callouts.map((callout, index) => (
          <div key={index} className="mx-8 marquee-content-box">
            <h1 className="font-bold marquee-content-h1 text-[#f48172]">{callout.title}</h1>
            <p className='marquee-content-p text-[#000]'>{callout.text}</p>
          </div>
        ))}
      </Marquee>
      <div className='flex justify-center mt-16 container-margin'>
         <img src="./Home/home_img-2.png" alt="" className='w-full' />
      </div>
    </div>
  );
};

export default Highlights;
