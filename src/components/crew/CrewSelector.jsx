import React from 'react'

export const CrewSelector = ({ optionSelected, setOptionSelected, length }) => {
  const bullets = Array.from({ length }, (v, i) => i)

  return (
    <div className='flex justify-center lg:justify-start lg:justify-self-end'>
      <ul className='flex space-x-4'>
        {bullets.map(bullet => (
          <li onClick={() => setOptionSelected(bullet)} key={bullet} className='md:w-3 lg:w-4 xl:w-5 cursor-pointer'>
            <img className='w-full object-cover' src={`${optionSelected === bullet ? '/icons/bold-bullet.svg' : '/icons/bullet.svg'}`} alt={bullet} />
          </li>
        ))}
      </ul>
    </div>
  )
}
