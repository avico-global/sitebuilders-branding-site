import React from 'react'

const Paragraph1 = ({ children, className }) => {
    return (
        <p className={`text-lg md:text-xl  ${className}`}>{children}</p>
    )
}
export default Paragraph1