import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BoardOfDirectorNew = () => {
  const bodArray = [
    ["Mr. Srinivasan Sridhar", "(Chairman and Independent Director)", "./assets/b1.png"],
    ["Mr. Arun Kumar Purwar", "(Independent Director)", "./assets/b2.png"],
    ["Mr. Kabir Mathur", "(Nominee Director)", "./assets/b3.png"],
    ["Mr. Mathew Joseph", "(Independent Director)", "./assets/b4.png"],
    ["Mr. Monu Ratra", "(Executive Director and Chief Executive Officer)", "./assets/b5.png"],
    ["Ms. Mohua Mukherjee", "(Independent Director)", "./assets/b6.png"],
    ["Mr. Nirmal Jain", "(Non-Executive Director)", "./assets/b7.png"],
    ["Mr. Rajamani Venkataraman", "(Non-Executive Director)", "./assets/b8.png"],
    ["Mr. Venkataramanan Anantharaman", "(Independent Director)", "./assets/b9.png"],
  ];

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: window.innerWidth>=900? 0.5:0,
  });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
          duration:0.5,
          ease:"easeInOut"
        },
      }));
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className='flex flex-wrap m-auto w-[90%] gap-5 justify-center my-16 marginal'>
      {bodArray.map((data, key) => (
        <motion.div
          key={key}
          custom={key}
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[15%] h-[370px] border border-gray-200 shadow border-pink-200 ml-4 rounded-lg"
        >
          <div className='h-[200px] w-auto m-auto red-orange-bg'>
            <img
              className="rounded-t-lg h-[250px] m-auto object-contain"
              src={data[2]}
              alt={data[0]}
            />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-3xl  font-bold bod-name text-[#f47732]">{data[0]}</h5>
            <p className="mb-2 text-xl">{data[1]}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BoardOfDirectorNew;
