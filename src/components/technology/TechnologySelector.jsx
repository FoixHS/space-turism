export const TechnologySelector = ({ optionSelected, setOptionSelected, length }) => {
  const numbers = Array.from({ length }, (v, i) => i)

  return (
    <div className='flex justify-center'>
      <ul className='flex lg:flex-col space-x-4 md:space-x-6 lg:space-x-0 lg:space-y-8 text-white font-bellefair'>
        {numbers.map(number => (
          <li onClick={() => setOptionSelected(number)} key={number} className={`w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 flex justify-center items-center border rounded-full md:text-lg xl:text-3xl cursor-pointer ${optionSelected === number ? 'text-[#0B0D17] bg-white' : 'border-white border-opacity-25'}`}>
            {number + 1}
          </li>
        ))}
      </ul>
    </div>
  )
}
