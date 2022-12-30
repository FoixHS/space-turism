import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuOptions } from './MenuOptions'
import { headers } from './static-resources'

export const Header = () => {
  const optionSelected = window.location.pathname.split('/')[1] || 'home'
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false)
  return (
    <>
      <div className='w-full px-6 pt-6 lg:px-10 lg:pt-14 flex justify-between items-center'>
        <div>
          <img src='/icons/star.svg' />
        </div>
        <div className='hidden w-full h-[96px] lg:flex justify-end'>
          <ul className='pl-32 pr-[20%] w-fit flex text-white gap-12 backdrop-blur-2xl backdrop-brightness-125 shadow-md shadow-black'>
            {headers.map((header) => {
              return (
                <li className={`py-10 h-full flex items-center justify-center uppercase ${optionSelected === header.title && 'border-b-2 border-white'}`} key={header.id}>
                  <Link to={header.path}>
                    <span className='pr-2 font-bold'>{header.id}</span>{header.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={`${isMenuCollapsed ? 'hidden' : 'md:hidden'} cursor-pointer`} onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}>
          <img src='/icons/menu.svg' />
        </div>
        {isMenuCollapsed && <MenuOptions onCollapse={() => setIsMenuCollapsed((_) => !_)} isMenuCollapsed={isMenuCollapsed} />}
      </div>
    </>
  )
}
