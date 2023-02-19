import React from 'react'
import { Link } from 'react-router-dom'

export const HomeContent = () => {
  return (
    <div className='flex flex-col lg:h-full lg:grid lg:grid-cols-2 lg:my-auto'>
      <div className='max-w-[450px] mx-auto px-6 pt-12 flex flex-col justify-center items-center space-y-4 text-white'>
        <div className='xl:text-xl font-light font-barlow text-[#D0D6F9]'>SO, YOU WANT TO TRAVEL TO</div>
        <h1 className='text-8xl font-bellefair xl:text-[150px]'>SPACE</h1>
        <p className='xl:text-xl text-center font-light font-barlow text-[#D0D6F9] leading-7'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className='mt-20 flex justify-center items-center lg:mt-0'>
        <Link to='/destination'>
          <div className='w-[150px] xl:w-[250px] flex items-center justify-center bg-white rounded-full aspect-square text-black text-xl xl:text-3xl font-bellefair hover:scale-125 duration-300'>EXPLORE</div>
        </Link>
      </div>
    </div>
  )
}
