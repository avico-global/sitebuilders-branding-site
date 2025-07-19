import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading1 from '../../ui/Heading1'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Heading2 from '../../ui/Heading2'

export default function NeedHelp() {
    return (
        <FullContainer className="bg-white py-24">
            <Container>
                <Heading2 className="text-black mb-16 text-center md:text-left">Need more help?</Heading2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
                    {/* Card 1 */}
                    <div className="bg-white rounded-md group shadow-lg p-8 flex flex-col gap-4  border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                        <div className="mb-2">
                            <Image src="/st-images/download1.svg" alt="Site plans vs. Workspace plans" width={48} height={48} className='text-primary'/>
                        </div>
                        <div className="text-2xl font-bold text-black mb-1 group-hover:text-primary transition-colors duration-300">Site plans vs. Workspace plans</div>
                        <div className="text-gray-500 text-base mb-4">Check out this article explaining the different types of Sitebuilderz plans.</div>
                        <a href="#" className="mt-auto flex items-center font-semibold text-black  transition-colors group w-fit">
                            Read more <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
                        </a>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-md group shadow-lg p-8 flex flex-col gap-4 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                        <div className="mb-2">
                            <Image src="/st-images/download.svg" alt="Looking for support?" width={48} height={48} className='text-primary'/>
                        </div>
                        <div className="text-2xl font-bold group-hover:text-primary transition-colors duration-300 mb-1">Looking for support?</div>
                        <div className="text-gray-500 text-base mb-4">Visit our support portal for product or account help.</div>
                        <a href="#" className="mt-auto flex items-center font-semibold text-black transition-colors group w-fit">
                            Read more <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
                        </a>
                    </div>
                </div>
            </Container>
        </FullContainer>
    )
}
