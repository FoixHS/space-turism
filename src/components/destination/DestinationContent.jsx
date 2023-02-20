import { Title } from '../Title'
import { DestinationDetail } from './DestinationDetail'

export const DestinationContent = () => {
  return (
    <div className='px-10 lg:max-w-[1110px] xl:max-w-[1400px] lg:mx-auto flex flex-col space-y-4 md:space-y-12'>
      <Title number='01' title='Pick your destination' className='mt-6 md:mt-11' />
      <DestinationDetail />
    </div>
  )
}
