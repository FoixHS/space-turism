export const DestinationSelector = ({ destinations, optionSelected, setOptionSelected }) => {
  return (
    <nav>
      <ul className='flex flex-1 justify-center lg:justify-start space-x-8 font-barlow md:text-lg tracking-widest uppercase'>
        {destinations.map(option => (
          <li onClick={() => setOptionSelected(option.id)} className={`py-2 cursor-pointer ${optionSelected === option.id ? 'text-white border-b-4 border-white' : 'text-[#D0D6F9]'}`} key={option.id}>
            {option.label}
          </li>
        ))}
      </ul>
    </nav>
  )
}
