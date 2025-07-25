import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading2 from '../../ui/Heading2'
import { useEffect, useRef, useState } from 'react'

const Translate = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const desktopItemRefs = useRef([]);
    
    const data = [
        {
            title: "Collaboration and control",
            desc: "Work better together and avoid unauthorized changes with advanced roles and permissions, publishing workflows, design approvals, and more.",
            video: "/videos/scale-collaboration.mp4"
        },
        {
            title: "Secure hosting by design",
            desc: "Scale securely with reliable, fast hosting, managed for you — plus launch with peace of mind thanks to Sitebuilderz's robust security and compliance features, so you can grow with uninterrupted momentum.",
            video: "/videos/scale-collaboration2.mp4"
        },
        {
            title: "APIs and integrations",
            desc: "TConnect your site to the tools your team uses every day with native integrations and APIs — plus find and launch apps in Sitebuilderz.",
            video: "/videos/scale-collaboration3.mp4"
        },
    ]

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', // Only trigger when item is in center 20% of viewport
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.dataset.index);
                    setCurrentIndex(index);
                }
            });
        }, observerOptions);

        // Observe only desktop items
        desktopItemRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            desktopItemRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);
  return (
    <FullContainer className='bg-[#F0F0F0]'>
            <Container spacing="medium">
        <div className='flex flex-col lg:flex-row items-start lg:items-end justify-center pt-20 md:pt-32 lg:pt-40 gap-6 lg:gap-0'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-[80px] leading-tight font-bold lg:w-[120%] lg:pr-10 xl:pr-0'>Scale your site and business</h2>
            <div className='lg:pl-28 text-sm sm:text-base md:text-lg lg:text-[18px] lg:w-[90%] lg:pt-10'>
                Tools to support your growth — without sacrificing speed, quality, or security.
            </div>
        </div>
                     <div className='hidden lg:flex flex-row items-start justify-center '>
            <div className='flex flex-col items-center justify-center w-[88%] pr-24'>
                {data.map((item, index) => (
                    <div 
                        key={index} 
                        ref={el => desktopItemRefs.current[index] = el}
                        data-index={index}
                        className='py-16 md:py-20'
                    >
                        <Heading2 className=' !text-[40px] pb-5'>{item.title}</Heading2>
                        <p className='text-[18px]'>{item.desc}</p>
                    </div>
                ))}
            </div>
            <div className='w-[122%] sticky top-[120px] border h-screen overflow-hidden items-start rounded-lg bg-black'>
                <div className=' w-full sticky top-[30px] '>
                    <video 
                        src={data[currentIndex].video} 
                        autoPlay 
                        loop 
                        muted 
                        className='w-full h-full object-cover' 
                    />
                </div>
            </div>
        </div>
        <div>
        <div className='flex lg:hidden flex-col items-start justify-start w-full '>
                {data.map((item, index) => (
                    <div 
                        key={index} 
                        data-index={index}
                        className='py-4 md:py-6'
                    >
                        <div>
                            <video src={item.video} autoPlay loop muted className='w-full h-full my-10 aspect-[16/10.5] rounded-md object-cover' />
                        </div>
                        <h2 className=' text-2xl md:text-[40px] font-bold pb-2'>{item.title}</h2>
                        <p className='text-base'>{item.desc}</p>
                    </div>
                ))}
            </div> 
        </div>
    </Container>
</FullContainer>
  )
}

export default Translate