import React from 'react'
import { Link } from 'react-router-dom'

export const HomeContent = () => {
  return (
    <>
      <div className='w-full px-6 pt-12 flex flex-col justify-center items-center space-y-4 text-white'>
        <div className='font-light font-barlow'>SO, YOU WANT TO TRAVEL TO</div>
        <h1 className='text-8xl font-bellefair'>SPACE</h1>
        <p className='text-center font-light font-barlow leading-7'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className='w-full mt-20 flex justify-center'>
        <Link to='/destination'>
          <div className='w-[150px] flex items-center justify-center bg-white rounded-full aspect-square text-black text-xl font-bellefair hover:scale-125 duration-300'>EXPLORE</div>
        </Link>
      </div>
    </>
  )
}
