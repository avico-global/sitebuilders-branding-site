import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Image from 'next/image'
import Link from 'next/link'
import Paragraph1 from '../../ui/Paragraph1'
import Heading1 from '../../ui/Heading1'
export default function Banner() {
  return (
    <FullContainer spacing="default" className='mt-24 bg-[#f8f9fb]'>
      <Container spacing="none" className='grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
        <div className='w-full -mt-14 flex flex-col gap-5'>
          <Heading1>Build a Website with<br />Site Builderz</Heading1>
          <Paragraph1>
            Learn how to build a free website on Site Builderz, create an employee intranet, find an amazing theme or just login.
          </Paragraph1>
          <button className="bg-primary w-fit text-white  text-xl py-3 px-4 rounded-lg font-medium cursor-pointer mb-6 hover:bg-primary/80 transition">
            Browse Templates
          </button>
          <div className='flex flex-row flex-wrap items-center gap-2'><span className='text-base md:text-lg text-[#222]'>need a domain first?</span><Link href="#" className="text-primary font-bold text-base md:text-lg underline hover:text-primary transition">Search and buy available domain names</Link></div>
        </div>
        <div className='w-full'>
          <Image src="/st-images/newhero.png" alt="Google Sites Hero" className=" w-full" width={1000} height={1000} />
        </div>
      </Container>
    </FullContainer>
  )
}
