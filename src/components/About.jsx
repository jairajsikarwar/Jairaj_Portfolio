import React from 'react'
import about from "../assets/about.jpg"
import { ABOUT_TEXT } from '../constants'

const About = () => {
  return <div className='border-b border-neutral-900 pb-4 '>
      <h2 className='my-10 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h2>
      <div className='flex flex-wrap'>
       <div className='w-full mx-20'>
          <div className='flex justify-center'>
          <p className='my-2 max-w-6xl font-light tracking-tight'>{ABOUT_TEXT}</p>
          </div>
       </div>
      </div>
  </div>
}

export default About