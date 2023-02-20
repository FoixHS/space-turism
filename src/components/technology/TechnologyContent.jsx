import { Title } from '../Title'
import { TechnologyDetail } from './TechnologyDetail'

export const TechnologyContent = () => {
  return (
    <div className='xl:max-w-[1400px] lg:mx-auto flex flex-col space-y-4 md:space-y-12'>
      <Title number='03' title='Space launch 101' className='mt-6 md:mt-11 md:px-10 ' />
      <TechnologyDetail />
    </div>
  )
}
