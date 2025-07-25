import React from 'react'

const Heading2 = ({ children, className }) => {
    return (
        <h2 className={`text-4xl md:text-5xl font-[600] w-full m-0 ${className}`}>{children}</h2>
    )
}

export default Heading2