import { useTranslation } from 'react-i18next'
import { Title } from '../Title'
import { TechnologyDetail } from './TechnologyDetail'
import { staticTechnologies } from '../../helpers/static-resources'

export const TechnologyContent = () => {
  const { t } = useTranslation()
  return (
    <div className='xl:max-w-[1400px] lg:mx-auto flex flex-col space-y-4 md:space-y-12'>
      <Title number='03' title={t('technology.title')} className='mt-6 md:mt-11 md:px-10 ' />
      <TechnologyDetail technologies={staticTechnologies()} />
    </div>
  )
}
