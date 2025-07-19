import React from 'react'

const Button = ({ children,className }) => {
  return (
    <button className={`bg-[#E24E28] hover:bg-[#E86F50] transition-all duration-300 text-white px-5 py-3 w-fit  h-fit rounded-sm flex flex-row gap-1 font-semibold ${className}`}>
        {children}
    </button>
  )
}

export default Button