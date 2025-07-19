import React, { useRef, useEffect } from 'react'
import FullContainer from '../common/FullContainer'
import Container from '../common/Container'
import Image from 'next/image'

const images = [
    '/st-images/bs1.avif',
    '/st-images/bs2.avif',
    '/st-images/bs3.avif',
    '/st-images/bs4.avif',
    '/st-images/bs5.avif',
    '/st-images/bs6.avif',
    '/st-images/bs7.avif',
]

const ImageSlider = () => {
    const sliderRef = useRef(null)

    useEffect(() => {
        const slider = sliderRef.current
        let animationFrameId
        let pos = 0
        const speed = 0.3 // Adjust for slower/faster movement
        const slideWidth = slider.scrollWidth / 2

        function animate() {
            pos -= speed
            if (Math.abs(pos) >= slideWidth) {
                pos = 0
            }
            slider.style.transform = `translateX(${pos}px)`
            animationFrameId = requestAnimationFrame(animate)
        }
        animate()
        return () => cancelAnimationFrame(animationFrameId)
    }, [])

    return (
        <>
            <FullContainer className='bg-black text-white'>
                <Container className='flex flex-row gap-10 py-4 pb-16 border-t border-white/10 items-center justify-between'>
                    <h2 className='text-sm md:text-lg lg:text-xl font-bold'>Over 3M sites running on Webflow</h2>
                    <div className='flex flex-row  items-center justify-center gap-2 bg-white text-black px-3 py-1 w-fit min-w-[150px] rounded-sm'>
                        <Image src='/st-images/logo192.png' alt='logo' width={100} height={100} className='w-5 h-5 md:w-7 md:h-7' />
                        <p className='text-[10px] shrink-0 pr-2'>Made in sitebuilderz</p>
                    </div>
                </Container>
            </FullContainer>
            <div className="overflow-hidden w-full bg-[#111] h-[320px] relative ">
                <div
                    ref={sliderRef}
                    className="flex w-max will-change-transform"
                    style={{ transition: 'transform 0.1s linear' }}
                >
                    {/* Duplicate images for seamless looping */}
                    {[...images, ...images].map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt={`slide-${idx}`}
                            className="w-[400px] h-[320px] object-cover flex-shrink-0 mr-2 rounded-sm shadow-lg"
                        />
                    ))}
                </div>
                <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent' />
                <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent' />

            </div>
        </>

    )
}

export default ImageSlider