import { useState } from 'react'
import { DestinationMetadata } from './DestinationMetadata'
import { DestinationSelector } from './DestinationSelector'

export const DestinationDetail = () => {
  const options = [
    {
      id: 0,
      label: 'Moon',
      imageUrl: '/images/destination/moon.png',
      description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      distance: '384,400 KM',
      timeDuration: '3 DAYS'
    },
    {
      id: 1,
      label: 'Mars',
      imageUrl: '/images/destination/mars.png',
      description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      distance: '225 MIL. KM',
      timeDuration: '9 MONTHS'
    },
    {
      id: 2,
      label: 'Europa',
      imageUrl: '/images/destination/europa.png',
      description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      distance: '628 MIL. KM',
      timeDuration: '3 YEARS'
    },
    {
      id: 3,
      label: 'Titan',
      imageUrl:
      '/images/destination/titan.png',
      description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distance: '1.6 BIL. KM',
      timeDuration: '7 YEARS'
    }
  ]
  const [optionSelected, setOptionSelected] = useState(options[0].id)

  return (
    <div className='p-8 md:max-w-[595px] lg:max-w-full mx-auto lg:mx-0 flex flex-col lg:flex-row lg:items-end space-y-6 md:space-y-14 lg:space-y-0 lg:space-x-5'>
      <div className='w-[170px] md:w-[300px] lg:w-[445px] xl:w-[500px] mx-auto'>
        <img className='w-full object-cover' src={options[optionSelected].imageUrl} alt={options[optionSelected].imageUrl} />
      </div>
      <div className='lg:max-w-[445px] flex flex-col mx-auto lg:ml-auto space-y-6 md:space-y-14'>
        <DestinationSelector
          options={options}
          optionSelected={optionSelected}
          setOptionSelected={setOptionSelected}
        />
        <div className='divide-y divide-solid divide-[#383B4B]'>
          <div className='pb-8 md:pb-12'>
            <h2 className='text-center lg:text-left text-6xl md:text-8xl lg:text-[100px] font-bellefair text-white uppercase'>{options[optionSelected].label}</h2>
            <p className='max-w-[327px] md:max-w-full lg:pr-5 mt-3 text-center lg:text-left text-[#D0D6F9] text-sm md:text-lg lg:text-xl leading-6 md:leading-8 lg:leading-10 font-barlow tracking-wide'>{options[optionSelected].description}</p>
          </div>
          <div className='pt-8 md:pt-12 flex flex-col md:flex-row md:justify-evenly lg:justify-start md:items-center space-y-8 md:space-y-0 lg:space-x-20'>
            <DestinationMetadata title='Avg. distance' stats={options[optionSelected].distance} />
            <DestinationMetadata title='Est. travel time' stats={options[optionSelected].timeDuration} />
          </div>
        </div>
      </div>
    </div>
  )
}
