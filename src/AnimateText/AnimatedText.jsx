import React,{useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TextAnimation = ({ text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariantsodd = {
    hidden: {
      opacity: 0,
      y: '-100px',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const textVariantseven = {
    hidden: {
      opacity: 0,
      y: '100px',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Adjust the stagger duration as needed
      },
    },
  };

  return (
    <motion.span ref={ref} variants={textVariants} initial="hidden" animate={controls}>
      {text.split("").map((letter, index) => (
        <motion.span key={index} variants={index % 2 === 0 ? textVariantsodd : textVariantseven} style={{ display: "inline-block" }}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextAnimation;
