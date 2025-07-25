import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-7xl w-[90%] py-8 md:py-12 sm:px-0 mx-auto h-full ${className}`}>{children}</div>
  )
}

export default Container