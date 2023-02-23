import { useTranslation } from 'react-i18next'
import { Title } from '../Title'
import { DestinationDetail } from './DestinationDetail'
import { staticDestinations } from '../../helpers/static-resources'

export const DestinationContent = () => {
  const { t } = useTranslation()
  return (
    <div className='px-10 lg:max-w-[1110px] xl:max-w-[1400px] lg:mx-auto flex flex-col space-y-4 md:space-y-12'>
      <Title number='01' title={t('destination.title')} className='mt-6 md:mt-11' />
      <DestinationDetail destinations={staticDestinations()} />
    </div>
  )
}
