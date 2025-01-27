import React from "react";
import { motion } from "framer-motion";
const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.4,
      staggerChildren: 0.2,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <motion.h1
      className={` ${className} `}
      variants={quote}
      initial="initial"
      animate="animate"
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          variants={singleWord}
          key={word + "-" + index}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedText;
