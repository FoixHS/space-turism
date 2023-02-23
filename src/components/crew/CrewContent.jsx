import { useTranslation } from 'react-i18next'
import { Title } from '../Title'
import { CrewDetail } from './CrewDetail'
import { staticCrew } from '../../helpers/static-resources'

export const CrewContent = () => {
  const { t } = useTranslation()
  return (
    <div className='md:h-[calc(100%-75px)] lg:h-[calc(100%-155px)]  md:px-10 max-w-[327px] md:max-w-full lg:max-w-[1110px] xl:max-w-[1400px] mx-auto flex flex-col space-y-4 md:space-y-12'>
      <Title number='02' title={t('crew.title')} className='mt-6 md:mt-11' />
      <CrewDetail crew={staticCrew()} />
    </div>
  )
}
