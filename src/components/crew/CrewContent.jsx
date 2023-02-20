import React from 'react'
import { Title } from '../Title'
import { CrewDetail } from './CrewDetail'

export const CrewContent = () => {
  return (
    <div className='md:h-[calc(100%-75px)] lg:h-[calc(100%-155px)]  md:px-10 max-w-[327px] md:max-w-full lg:max-w-[1110px] xl:max-w-[1400px] mx-auto flex flex-col space-y-4 md:space-y-12'>
      <Title number='02' title='Meet your crew' className='mt-6 md:mt-11' />
      <CrewDetail />
    </div>
  )
}
