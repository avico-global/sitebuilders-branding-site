import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Button from '../../ui/Button'
import { ArrowRightIcon } from 'lucide-react'
import Heading1 from '../../ui/Heading1'
import Link from 'next/link'

const Hero = () => {
    return (
        <FullContainer className='py-20 mt-10 md:mt-16'>
            <Container>
                <div className='flex flex-col items-start'>
                    <div className='flex flex-col justify-between md:col-span-2 '>
                        <h3 className='text-gray-500 tracking-2 uppercase'>More than a website builder
                        </h3>
                        <Heading1 className=''>
                        Turn Sites <br /> Into Success
                        </Heading1>
                    </div>
                    <div className='w-full flex flex-col md:flex-row  justify-between items-end gap-4 min-w-0'>
                        {/* LEFT TEXT */}
                        <h5 className='text-gray-700 text-lg leading-6 pt-4 md:pt-2 flex-1 min-w-0'>
                            With Sitebuilderz’s all-in-one platform, you can create, manage, and optimize web experiences that convert — without sacrificing brand consistency.
                        </h5>

                        {/* RIGHT CTA SECTION */}
                        <div className='flex flex-row  w-full md:w-fit items-center gap-4 flex-shrink-0'>
                            <Button className='px-4'>
                                <span>Start building</span>
                            </Button>
                            <div className='flex flex-row gap-2 items-center group cursor-pointer whitespace-nowrap'>
                                <span>Contact sales</span>
                                <ArrowRightIcon className='w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-2' />
                            </div>
                        </div>
                    </div>


                </div>
            </Container>
        </FullContainer>
    )
}

export default Hero