import { useRouteError } from 'react-router-dom'

const Oops = () => {
  const error = useRouteError()
  return (
    <div className='w-[500px] h-screen mx-auto flex flex-col justify-center items-center space-y-8'>
      <h1 className='font-bold text-6xl'>Oops!</h1>
      <p className='font-bold'>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default Oops
