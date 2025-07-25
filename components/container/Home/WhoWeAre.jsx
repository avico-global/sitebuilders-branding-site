import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'

export default function WhoWeAre() {
    return (
        <FullContainer className=' bg-white'>
            <Container spacing="none">
                <div className='w-full flex flex-col items-center justify-center' >
                    <h2 className='text-4xl md:text-5xl font-[600] w-full text-center m-0'>What is SiteBuilderz?</h2>
                    <p className='text-lg mt-8 mb-10 text-[#222] text-center max-w-[850px] '>Site Builderz is a no-code website builder designed for speed and simplicity. Its mission is to help users "quickly launch beautiful, functional websites without coding." Anyone can use Site Builderz to create and host custom business websites with ease. Teams and individuals can build secure, responsive, and professional sites using built-in templates and real-time deployment tools.</p>
                    <button className="bg-primary text-white text-xl py-3 px-4 rounded-lg font-medium cursor-pointer mb-6 hover:bg-primary/80 transition">
                        Start a Site
                    </button>
                </div>
            </Container>
        </FullContainer>
    )
}
