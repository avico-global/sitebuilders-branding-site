import React from 'react'

const Paragraph3 = ({ children, className }) => {
    return (
        <p className={`text-sm md:text-base ${className}`}>{children}</p>
    )
}
export default Paragraph3