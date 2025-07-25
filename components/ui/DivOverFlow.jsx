import React from 'react'
import FullContainer from '../common/FullContainer'
import Container from '../common/Container'
import Heading1 from './Heading1'
import Button from './Button'
import Image from 'next/image'
import Heading2 from './Heading2'

export default function DivOverFlow({ top, theme, left, right }) {
    return (
        <>
         
                <FullContainer className={`pb-10  ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
                    {top?.map((item, index) => (

                    <FullContainer key={index} className={`${theme === "light" ? "bg-white text-black" : "bg-black text-white"} `}>
                        <Container spacing="medium">
                            <Heading2 className={`max-w-[1000px] ${theme === "light" ? "text-black" : "text-white"}`}>{item?.title}</Heading2>
                            <p className={`text-xl md:text-[26px] mb-8 ${theme === "light" ? "text-gray-900" : "text-gray-100"}`}>{item?.desc}</p>
                        </Container>
                    </FullContainer>

                    ))}
                    <FullContainer className={`relative max-w-[1850px] mx-auto  overflow-hidden ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
                        <Container className=' flex flex-col lg:flex-row h-full pt-12 lg:pt-0 items-stretch'>
                            <div className="lg:w-[54%] lg:pr-24 lg:h-full">
                                {right}
                            </div>
                            <div className='lg:w-[46%] relative w-full min-h-full'>
                                <div className='w-[100%] h-full p-0 m-0 lg:aspect-auto lg:absolute lg:w-[890px] lg:bottom-0 lg:left-0 rounded'>
                                    {left}
                                </div>
                            </div>
                        </Container>
                    </FullContainer>
                </FullContainer>
        </>
    )
}
