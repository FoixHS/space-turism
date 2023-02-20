import { useEffect, useState } from 'react'
import { technologies } from '../../helpers/static-resources'
import { TechnologySelector } from './TechnologySelector'

export const TechnologyDetail = () => {
  const [optionSelected, setOptionSelected] = useState(technologies[0].id)
  const [isDesktop, setIsDesktop] = useState(true)

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1023)
  }

  useEffect(() => {
    updateMedia()
    window.addEventListener('resize', updateMedia)
    return () => window.addEventListener('resize', updateMedia)
  }, [])

  return (
    <div className='pt-8 flex flex-col lg:flex-row-reverse lg:justify-between space-y-8 lg:space-y-0'>
      <div className='w-full lg:max-w-[515px]'>
        <img className='w-full object-cover' src={`${isDesktop ? technologies[optionSelected].desktopImageUrl : technologies[optionSelected].imageUrl}`} />
      </div>
      <div className='lg:pl-20 flex flex-col lg:flex-row lg:space-x-20'>
        <TechnologySelector optionSelected={optionSelected} setOptionSelected={setOptionSelected} length={technologies.length} />
        <div className='pt-8 lg:pt-0 max-w-[335px] md:max-w-[465px] mx-auto lg:mx-0 flex flex-col space-y-8 text-center lg:text-left'>
          <div className='flex flex-col space-y-3'>
            <span className='block text-[#D0D6F9] md:text-lg xl:text-2xl tracking-widest font-barlow'>
              THE TERMINOLOGY…
            </span>
            <span className='block text-3xl md:text-4xl xl:text-5xl text-white font-bellefair uppercase'>
              {technologies[optionSelected].name}
            </span>
          </div>
          <p className='text-[#D0D6F9] md:text-lg xl:text-xl font-barlow leading-6 md:leading-7'>{technologies[optionSelected].description}</p>
        </div>
      </div>

    </div>
  )
}
