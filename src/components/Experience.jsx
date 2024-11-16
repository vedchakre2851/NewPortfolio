import React from 'react'
import { EXPERIENCES } from '../constants'
import {motion} from "framer-motion"

const Experience = ({isDarkTheme}) => {
  return (
    <div className=" pb-4 ">
    <motion.h2 
    initial={{opacity:0 , y:0}}
    whileInView={{opacity:1 , y:-70}}
    transition={{duration:0.7}}
    className="m-10 mb-10 text-center  text-4xl">Experience</motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 pt-5 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                    <p 
                   
                    className="mb-2 text-lg  lg:ml-24 text-center underline decoration-2 underline-offset-8 decoration-purple-500 justify-center">{experience.year}</p>
                    </div>
                    <div className="w-full max-w-xl lg:w-2/4">
                    <h6
                    
                    className="mb-2  font-semibold text-lg items-center underline decoration-2 underline-offset-8 decoration-purple-500 lg:justify-center">
                      {experience.role} <span>:</span>{" "}
                      <span className=" ml-2 text-lg ">
                        {experience.company}
                      </span>
                    </h6>
                    <div className={`${isDarkTheme?"text-stone-400":"text-black"}`}><ul>
            {experience.description.map((point, idx) => (
              <li className='list-disc' key={idx}>{point}</li>
            ))}
          </ul></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
  );
}

export default Experience;
