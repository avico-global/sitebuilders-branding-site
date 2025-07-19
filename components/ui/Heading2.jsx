import React from 'react'

const Heading2 = ({ children, className }) => {
    return (
        <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${className}`}>{children}</h2>
    )
}

export default Heading2