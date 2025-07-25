import React from 'react'

const Paragraph2 = ({ children, className }) => {
    return (
        <p className={`text-base md:text-lg ${className}`}>{children}</p>
    )
}
export default Paragraph2