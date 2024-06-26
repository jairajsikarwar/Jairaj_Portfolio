import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import {SiMongodb} from "react-icons/si"
import { DiJavascript } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";


const Technology = () => {
  return <div className='border-b border-neutral-800 pb-24'>
    <h1 className='my-20 text-center text-4xl'>Technologies</h1>
    <div className='flex flex-wrap items-center justify-center gap-4'>
      <div className='rounded-2xl border-4 border-neutral-800  p-4'>
       <RiReactjsLine className='text-7xl text-cyan-400' />
      </div>
      <div className='rounded-2xl border-4 border-neutral-800  p-4'>
       <SiMongodb className='text-7xl text-green-500' />
      </div>
      <div className='rounded-2xl border-4 border-neutral-800  p-4'>
       <DiJavascript className='text-7xl text-yellow-400' />
      </div>
      <div className='rounded-2xl border-4 border-neutral-800  p-4'>
       <BiLogoTailwindCss className='text-7xl text-cyan-400' />
      </div>
    </div>
  </div>
}

export default Technology