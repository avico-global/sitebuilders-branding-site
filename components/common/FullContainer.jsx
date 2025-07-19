import React from 'react'

const FullContainer = ({ children, className }) => {
  return (
    <div className={`w-full h-full ${className}`}>{children}</div>
  )
}

export default FullContainer