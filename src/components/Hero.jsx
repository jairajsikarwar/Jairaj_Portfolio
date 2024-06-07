import React from 'react'
import { HERO_CONTENT } from '../constants';
import image from "../assets/image.jpeg"
import { motion } from "framer-motion"


const Hero = () => {
  return <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-sta'> 
            <motion.h1  animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }} className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Jairaj Sikarwar</motion.h1>
           <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Frontend Developer</span>
           <p className='my-2 max-w-6xl ml-20 py-6 font-light tracking-tight'>{HERO_CONTENT}</p> 
           </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className=' h-96 flex justify-center '>
            <img src={image} alt="Jairaj Sikarwar" className='rounded-full'/>
          </div>
        </div>
      </div>
  </div>
}

export default Hero