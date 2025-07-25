import React from 'react'

const Heading1 = ({ children, className }) => {
    return (
        <h1 className={`text-4xl md:text-6xl font-[600] m-0${className}`}>
            {children}
        </h1>
    )
}

export default Heading1