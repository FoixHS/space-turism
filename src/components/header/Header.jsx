import { Link } from 'react-router-dom'
import { useCallback, useState } from 'react'
import { MenuOptions } from './MenuOptions'
import { headers } from '../../helpers/static-resources'
import { LanguageSelector } from './LanguageSelector'

export const Header = () => {
  const optionSelected = window.location.pathname.split('/')[1] || 'home'
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false)

  const onCloseMenu = useCallback(() => {
    setIsMenuCollapsed(false)
  }, [])

  return (
    <>
      <LanguageSelector className='hidden lg:flex' />
      <nav className='relative w-full px-6 pt-6 lg:pl-10 lg:pr-0 lg:pt-0 flex justify-between items-center'>
        <div className={`hover:backdrop-brightness-150 ${isMenuCollapsed && 'invisible'}`}>
          <img src='/icons/star.svg' />
        </div>
        <div className='hidden pl-32 pr-[20%] w-fit h-[96px] lg:flex justify-between backdrop-blur-2xl backdrop-brightness-125 shadow-md shadow-black'>
          <ul className='flex text-white gap-12'>
            {headers().map((header) => {
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
        <div className={`${isMenuCollapsed ? 'hidden' : 'lg:hidden'} cursor-pointer`} onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}>
          <img src='/icons/menu.svg' />
        </div>
        <MenuOptions onCloseMenu={onCloseMenu} className={`${isMenuCollapsed ? 'lg:hidden' : 'hidden'}`} />
      </nav>
    </>

  )
}
