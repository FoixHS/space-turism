import { useState } from 'react'
import { crew } from '../../helpers/static-resources'
import { CrewSelector } from './CrewSelector'

export const CrewDetail = () => {
  const [optionSelected, setOptionSelected] = useState(crew[0].id)
  return (
    <div className='md:h-full pt-8 flex flex-col md:flex-col-reverse lg:flex-row-reverse md:justify-between divide-y md:divide-none divide-solid divide-[#383B4B]'>
      <div className='max-w-[177px] md:max-w-[490px] lg:max-w-[525px] h-[265px] md:h-[575px] lg:h-full flex items-end mx-auto md:self-end'>
        <img className='object-cover' src={crew[optionSelected].imageUrl} />
      </div>
      <div className='pt-8 md:pt-0 lg:pb-24 flex flex-col md:flex-col-reverse'>
        <CrewSelector
          length={crew.length}
          optionSelected={optionSelected}
          setOptionSelected={setOptionSelected}
        />
        <div className='pt-8 lg:pb-32 xl:pb-56'>
          <div className='flex flex-col text-center lg:text-left text-white font-bellefair lg:space-y-4'>
            <span className='md:text-2xl lg:text-4xl opacity-50 uppercase'>
              {crew[optionSelected].rol}
            </span>
            <span className='text-2xl md:text-4xl lg:text-6xl uppercase'>
              {crew[optionSelected].name}
            </span>
          </div>
          <p className='pt-8 md:pb-8 px-2 md:px-6 lg:px-0 lg:pr-6 md:max-w-[590px] lg:max-w-[445px] md:mx-auto lg:mx-0 text-lg lg:text-xl text-center lg:text-left text-[#D0D6F9] leading-6 md:leading-7 font-barlow'>
            {crew[optionSelected].description}
          </p>
        </div>
      </div>
    </div>
  )
}
