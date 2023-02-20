import React from 'react'

export const DestinationMetadata = ({ title, stats }) => {
  return (
    <div className='flex flex-col space-y-3 items-center text-center lg:text-left'>
      <span className='w-full text-[#D0D6F9] font-barlow uppercase tracking-widest'>{title}</span>
      <span className='w-full text-3xl text-white font-bellefair uppercase'>{stats}</span>
    </div>
  )
}
