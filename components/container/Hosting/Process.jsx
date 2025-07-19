import React from 'react'
import FullContainer from '../../../components/common/FullContainer'
import Container from '../../../components/common/Container'
import Image from 'next/image'
import Heading1 from '../../ui/Heading1'
import Heading2 from '../../ui/Heading2'

export default function Process({ id }) {
    return (
        <div id={id}>
            <FullContainer className="py-16 bg-white">
                <Container className="">
                    {/* Headline and description */}
                    <Heading2 className=" mb-4">Reliable, fast hosting</Heading2>
                    <p className="text-lg md:text-2xl max-w-3xl text-gray-700 mb-12">
                        Our hosted sites feature world-class performance and reliability — and are fast for anyone, wherever they are.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-black rounded-xl p-6 md:p-16 gap-10 lg:gap-24 mb-12">
                        <Image width={1000} height={1000} src="/st-images/hosting/process1.webp" alt="Hosting Screenshot" className="w-full rounded-lg mb-6 md:mb-0 md:mr-10" />
                        <div className="text-white w-full ">
                            <h2 className="text-2xl font-bold mb-4">Don’t just take our word for it. Nursa experienced:</h2>
                            <div className="flex gap-12">
                                <div className='flex flex-col gap-4 items-start justify-start'>
                                    <div className=' p-2 h-16 w-full relative overflow-hidden'>
                                        <div className="text-4xl 6xl font-bold absolute bottom-0 left-0 ">70%</div>
                                    </div>
                                    <div className="text-base">Increase in website speed</div>
                                </div>
                                <div className='flex flex-col gap-4 items-start justify-start'>
                                    <div className=' p-2 h-16 relative overflow-hidden'>
                                        <Image width={1000} height={100} src="/st-images/hosting/99.png" alt="Hosting Screenshot" className="w-20 rounded-lg " />
                                        <div className="text-4xl 6xl font-bold absolute bottom-0 left-1/2 -translate-x-1/2 ">99</div>
                                    </div>
                                    <div className="text-base">Lighthouse performance score</div>
                                    <div className="text-xs text-gray-400">*Lighthouse scores may vary.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-gray-50 rounded-xl p-8 md:p-12 lg:p-14 text-start shadow-sm">
                            <div className="text-3xl md:text-5xl mb-4">⬆️</div>
                            <div className="font-bold text-lg md:text-2xl mb-2">99.99% hosting uptime</div>
                            <div className="text-gray-700 text-base md:text-lg">
                                Grow with uninterrupted momentum and peace of mind — select Enterprise customers are covered with a 99.99% uptime SLA.
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-8 md:p-12 lg:p-14 text-start shadow-sm">
                            <div className="text-3xl md:text-5xl mb-4">🌐</div>
                            <div className="font-bold text-lg md:text-2xl mb-2">Global CDN</div>
                            <div className="text-gray-700 text-base md:text-lg">
                                Your site will be fast and performant for everyone, everywhere.
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-8 md:p-12 lg:p-14 text-start shadow-sm">
                            <div className="text-3xl md:text-5xl mb-4">🔒</div>
                            <div className="font-bold text-lg md:text-2xl mb-2">HTTP/2 and HTTP/3 supported</div>
                            <div className="text-gray-700 text-base md:text-lg">
                                Webflow hosting meets HTTP/2 and HTTP/3 standards ensuring your site loads securely and as quickly as possible.
                            </div>
                        </div>
                    </div>

                    {/* Powered by section */}
                    <div className="bg-gray-100 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-6 md:mb-0">
                            <div className="font-bold text-base mb-2">Powered by Amazon Web Services & Cloudflare</div>
                            <div className="text-gray-700 text-base max-w-md">
                                AWS provides a global infrastructure supporting millions of sites, while Cloudflare’s global CDN delivers your content in milliseconds.
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <img src="/aws-logo-placeholder.png" alt="AWS Logo" className="h-10" />
                            <img src="/cloudflare-logo-placeholder.png" alt="Cloudflare Logo" className="h-10" />
                        </div>
                    </div>
                </Container>
            </FullContainer>
        </div>
    )
}