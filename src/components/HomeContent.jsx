import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const HomeContent = () => {
  const { t } = useTranslation()
  return (
    <div className='absolute inset-0 top-32 flex flex-col lg:h-[calc(100%-155px)] lg:grid lg:grid-cols-2 lg:my-auto'>
      <div className='max-w-[450px] mx-auto px-6 pt-12 flex flex-col justify-center items-center space-y-4 text-white'>
        <div className='xl:text-xl font-light font-barlow text-[#D0D6F9]'>{t('home.title')}</div>
        <h1 className='text-8xl font-bellefair xl:text-[150px]'>{t('home.label')}</h1>
        <p className='xl:text-xl text-center font-light font-barlow text-[#D0D6F9] leading-7'>{t('home.description')}</p>
      </div>
      <div className='mt-20 flex justify-center items-center lg:mt-0'>
        <Link to='/destination'>
          <div className='w-[150px] xl:w-[250px] flex items-center justify-center bg-white rounded-full aspect-square text-black text-xl xl:text-3xl font-bellefair hover:scale-125 duration-300'>{t('home.explore')}</div>
        </Link>
      </div>
    </div>
  )
}
