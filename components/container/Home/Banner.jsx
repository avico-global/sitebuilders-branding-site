  import React from 'react'
  import FullContainer from '../../common/FullContainer'
  import Container from '../../common/Container'
  import Image from 'next/image'
  import Link from 'next/link'

  export default function Banner() {
    return (
      <FullContainer className='py-5 mt-16 bg-[#f8f9fb]'>   
      <Container className='grid grid-cols-1 md:grid-cols-2 items-start justify-between lg:py-12 '>
        <div className='w-full'>
        <h1 className="text-4xl md:text-6xl font-[600] m-0">Build a Website with<br />Google Sites</h1>
        <p className="text-xl mt-8 mb-10 text-[#222]">
          Learn how to build a free website on Google Sites, create an employee intranet, find an amazing theme or just login.
        </p>
        <button className="bg-primary text-white  text-xl py-3 px-4 rounded-lg font-medium cursor-pointer mb-6 hover:bg-primary/80 transition">
          Browse Google Sites Themes
        </button>
        <div className='flex flex-row flex-wrap items-center gap-2'><span className='text-base md:text-lg text-[#222]'>need a domain first?</span><Link href="#" className="text-primary font-bold text-base md:text-lg underline hover:text-primary transition">Search and buy available domain names</Link></div>
        </div>
        <div className='w-full'>
          <Image src="/st-images/newhero.png" alt="Google Sites Hero" className=" w-full" width={1000} height={1000}/>
        </div>
      </Container>
      </FullContainer>
    )
  }
