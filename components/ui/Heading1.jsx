import React from 'react'

const Heading1 = ({ children, className }) => {
    return (
        <h1 className={`text-[53px] sm:text-[70px] lg:text-[130px] leading-none  lg:leading-[135px] py-4 md:py-6 font-semibold ${className}`}>
            {children}
        </h1>
    )
}

export default Heading1