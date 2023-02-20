export const Title = ({ number, title, className }) => {
  return (
    <div className={`flex flex-1 justify-center md:justify-start space-x-5 text-white font-barlow md:text-2xl tracking-widest ${className}`}>
      <span className='opacity-25'>{number}</span>
      <span className='uppercase'>{title}</span>
    </div>
  )
}
