import React from 'react'
import Image from 'next/image'
import DivOverFlow from '../../ui/DivOverFlow'
import Heading2 from '../../ui/Heading2'
import { ArrowDown, ChevronDown } from 'lucide-react'
import Button from '../../ui/Button'
import { Link } from 'react-scroll'

export default function HostingHero() {
  const theme = "dark"
  const top = [
    {
      title: 'CMS',
      desc: 'CMS is a platform that allows you to create, manage and publish content on your website.',
    }
  ]

  const left = (
    <div className='lg:min-h-screen '>
      <div className='grid grid-cols-3 lg:pr-24 gap-6 pt-12 lg:pt-[120px]'>
        <div className='flex flex-col gap-6 translate-y-1/5'>
          <Image src="/st-images/hosting/1.avif" width={1000} height={1000} />
          <Image src="/st-images/hosting/2.avif" width={1000} height={1000} />
        </div>
        <div className='flex flex-col gap-6 translate-y-8'>
          <Image src="/st-images/hosting/3.avif" width={1000} height={1000} />
          <Image src="/st-images/hosting/4.avif" width={1000} height={1000} />
        </div>
        <div className='flex flex-col gap-6 '>
          <Image src="/st-images/hosting/5.avif" width={1000} height={1000} className='rounded-md' />
          <Image src="/st-images/hosting/6.webp" width={1000} height={1000} className='rounded-md' />
        </div>
      </div>
    </div>
  )

  const right = (
    <div className='flex flex-col justify-between gap-4 lg:min-h-screen pt-[120px] lg:pb-[100px] lg:pr-16'>
      <button className='bg-black border border-white/10 text-white/30 w-fit px-6 py-3.5 rounded-sm flex items-center gap-2'>
        All Features
        <ChevronDown className='w-4 h-4' />
      </button>
      <div className='flex flex-col gap-4'>
        <Heading2>
          <span className='text-white/30'>Hosting</span><br />
          Without the hassles.
        </Heading2>
        <p className=' text-xl'>
        Enjoy reliable, scalable, fast, and secure hosting for your business — managed for you.
        </p>
        <Button>Get started __ its free</Button>

        <Link
          to="hostingprocess"
          smooth={true}
          duration={500}
          className='cursor-pointer text-white/40  hover:text-white transition-all duration-300 flex items-center gap-2 mt-16'
        >
          <ArrowDown className='w-4 h-4' /> <p className=' uppercase font-semibold'>learn more about hosting</p>
        </Link>
      </div>
    </div>

  )

  return (
    <>
      <DivOverFlow theme={theme} left={left} right={right} />
    </>
  )
}