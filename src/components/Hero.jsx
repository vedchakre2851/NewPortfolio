import React from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import heroimg from "../assets/heroimg.webp";
import Lottie from "lottie-react";
import animation from "../assets/Animation - 1728030782078.json";
import cv from "../assets/Ved_Chakre_cv.pdf";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = ({ isDarkTheme }) => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-medium bg-gradient-to-r from-fuchsia-500 via-amber-700 to bg-indigo-800 bg-clip-text text-transparent tracking-tight lg:mt-16 lg:text-8xl"
            >
              Ved Chakre
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="font-light pl-3 text-3xl tracking-tight"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-mono pl-3 tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>

          <div className="flex justify-center items-center lg:justify-start mt-4 w-full">
            <a
              href={cv}
              download="cv"
              className="bn632-hover bn24 font-mono inline-block text-center px-6 py-3 bg-blue-600 text-white rounded-lg"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <Lottie animationData={animation}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Hero;
