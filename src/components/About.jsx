import { ABOUT_TEXT } from "../constants";
import aboutimg from "../assets/img.jpeg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className=" pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl"
      >
        About<span className="text-neutral-600"> Me</span>
      </motion.h2>
      <div className="flex items-center flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex items-center justify-center">
            <motion.img
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="rounded-full border-violet-300 object-cover border-2 shadow-lg w-1/2 h-1/2 "
              src={aboutimg}
              alt="about"
            ></motion.img>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="my-2 max-w-xl py-6 font-light text-lg tracking-tighter"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
