import React from 'react'

const Heading3 = ({ children, className }) => {
    return (
        <h3 className={`text-2xl font-[600] ${className}`}>{children}</h3>
    )
}
export default Heading3
