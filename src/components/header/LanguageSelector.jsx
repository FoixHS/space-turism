import { useTranslation } from 'react-i18next'

export const LanguageSelector = ({ className }) => {
  const { i18n } = useTranslation()
  const onChangeLanguage = (locale) => {
    i18n.changeLanguage(locale)
  }

  return (
    <div className={`px-6 h-6 lg:h-14 flex justify-end text-white space-x-6 ${className}`}>
      <button
        className='flex justify-center items-center gap-x-4'
        onClick={() => onChangeLanguage('es')}
      >
        <img className='w-8 h-4' src='/icons/spain-flag.svg' alt='spain' />ES
      </button>
      <button
        className='flex justify-center items-center gap-x-4'
        onClick={() => onChangeLanguage('en')}
      >
        <img className='w-8 h-4' src='/icons/uk-flag.svg' alt='uk' />EN
      </button>
    </div>
  )
}
