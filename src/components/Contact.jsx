import React from 'react'
import { CONTACT } from '../constants'
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <div className=" pb-20   ">
      <motion.h2 
      whileInView={{opacity:1 , y:0}}
      initial={{opacity:0 ,y:100}}
      transition={{duration: 0.8}}
      className=" my-10 text-4xl text-center justify-center font tracking-tight">Get in touch </motion.h2>
        <div className="py-10 text-center tracking-tighter">
            <motion.p 
            whileInView={{opacity:1 , x:0}}
            initial={{opacity:0 ,x:100}}
            transition={{duration: 0.8}}
            className="my-4">{CONTACT.address}</motion.p>
            <motion.p 
            whileInView={{opacity:1 , x:0}}
            initial={{opacity:0 ,x:-100}}
            transition={{duration: 0.8}}
            className="my-4">{CONTACT.phoneNo}</motion.p>
            <a href="#" className="border-b">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact

