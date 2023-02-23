import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { DestinationSelector } from './DestinationSelector'
import { DestinationMetadata } from './DestinationMetadata'

export const DestinationDetail = ({ destinations }) => {
  const { t } = useTranslation()
  const [optionSelected, setOptionSelected] = useState(destinations[0].id)

  return (
    <div className='p-8 md:max-w-[595px] lg:max-w-full mx-auto lg:mx-0 flex flex-col lg:flex-row lg:items-end space-y-6 md:space-y-14 lg:space-y-0 lg:space-x-5'>
      <div className='w-[170px] md:w-[300px] lg:w-[445px] xl:w-[500px] mx-auto'>
        <img className='w-full object-cover' src={destinations[optionSelected].imageUrl} alt={destinations[optionSelected].imageUrl} />
      </div>
      <div className='lg:max-w-[445px] flex flex-col mx-auto lg:ml-auto space-y-6 md:space-y-14'>
        <DestinationSelector
          destinations={destinations}
          optionSelected={optionSelected}
          setOptionSelected={setOptionSelected}
        />
        <div className='divide-y divide-solid divide-[#383B4B]'>
          <div className='pb-8 md:pb-12'>
            <h2 className='text-center lg:text-left text-6xl md:text-8xl lg:text-[100px] font-bellefair text-white uppercase'>{destinations[optionSelected].label}</h2>
            <p className='max-w-[327px] md:max-w-full lg:pr-5 mt-3 text-center lg:text-left text-[#D0D6F9] text-sm md:text-lg lg:text-xl leading-6 md:leading-8 lg:leading-10 font-barlow tracking-wide'>{destinations[optionSelected].description}</p>
          </div>
          <div className='pt-8 md:pt-12 flex flex-col md:flex-row md:justify-evenly lg:justify-start md:items-center space-y-8 md:space-y-0 lg:space-x-20'>
            <DestinationMetadata title={t('destination.averageDistance')} stats={destinations[optionSelected].distance} />
            <DestinationMetadata title={t('destination.estimatedTime')} stats={destinations[optionSelected].timeDuration} />
          </div>
        </div>
      </div>
    </div>
  )
}
