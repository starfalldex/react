import React, { useId } from 'react'

function Select({
  label,
  options,
  className,
  ref,
  ...props
}) {
  const id = useId()
  return (
    <div className='w-full'>
      {label && <label htmlFor={id}></label>}
      <select
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full
          ${className}`}
        id={id}
        ref={ref}
        {...props}
      >
        {options?.map(option => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}

      </select>
    </div>
  )
}

export default Select