import React from 'react'
import { Link } from 'react-router-dom'
import { headers } from './static-resources'

export const MenuOptions = ({ onCollapse, className }) => {
  return (
    <div className={`absolute top-0 right-0 h-screen w-[300px] backdrop-blur-2xl backdrop-brightness-125 ${className}`}>
      <div className='w-full pt-10 pr-6 flex justify-end'>
        <img className='cursor-pointer' src='/icons/x-mark.svg' alt='x-mark' onClick={onCollapse} />
      </div>
      <div className='pt-20 px-8'>
        <ul className='w-full flex flex-col text-white space-y-10'>
          {headers.map((header) => {
            return (
              <li className='flex items-center justify-start uppercase text-xl' key={header.id} onClick={onCollapse}>
                <Link to={header.path}>
                  <span className='pr-2 font-bold'>{header.id}</span>{header.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
