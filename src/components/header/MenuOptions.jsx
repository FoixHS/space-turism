import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { headers } from '../../helpers/static-resources'
import { LanguageSelector } from './LanguageSelector'

export const MenuOptions = ({ onCloseMenu, className }) => {
  const body = document.querySelector('body')
  const closeMenu = useCallback(() => {
    body.style.overflow = 'auto'
    if (onCloseMenu) {
      onCloseMenu()
    }
  }, [body.style, onCloseMenu])

  return (
    <div className={`z-100 fixed top-0 right-0 w-[300px] h-screen backdrop-blur-2xl backdrop-brightness-100 ${className}`}>
      <div className='w-full pt-10 pr-6 flex justify-end'>
        <img className='cursor-pointer' src='/icons/x-mark.svg' alt='x-mark' onClick={closeMenu} />
      </div>
      <LanguageSelector className='pt-12 justify-center' />

      <div className='pt-20 px-8'>
        <ul className='w-full flex flex-col text-white space-y-10'>
          {headers().map((header) => {
            return (
              <li className='flex items-center justify-start uppercase text-xl' key={header.id} onClick={closeMenu}>
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
