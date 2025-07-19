    import React, { useEffect, useRef, useState } from 'react'
    import FullContainer from '../common/FullContainer'
    import Container from '../common/Container'
    import Image from 'next/image'
    import Heading2 from './Heading2'

    const ChangeImgOnScroll = ({ data }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const desktopItemRefs = useRef([]);



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
                <FullContainer className='bg-black text-white'>
                    <Container className='!py-16'>
                        <div className='flex flex-col lg:flex-row items-start lg:items-end justify-center pt-20 md:pt-32 lg:pt-40 gap-6 lg:gap-0'>
                            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-[80px] leading-tight font-bold lg:w-[120%] lg:pr-10 xl:pr-0'>Scale your site and business</h2>
                            <div className='lg:pl-28 text-sm sm:text-base md:text-lg lg:text-[18px] lg:w-[90%] lg:pt-10'>
                                Tools to support your growth — without sacrificing speed, quality, or security.
                            </div>
                        </div>
                        <div className='hidden lg:flex flex-row items-start py-28 justify-center '>
                            <div className='w-[122%] sticky top-[120px] h-auto border-white overflow-hidden items-start rounded-lg bg-black'>
                                <div className=' w-full sticky top-[30px] aspect-12/12'>
                                    <Image
                                        src={data[currentIndex].img}
                                        alt={data[currentIndex].title}
                                        width={1000}
                                        height={1000}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center w-[88%] pl-24'>
                                {data.map((item, index) => (
                                    <div
                                        key={index}
                                        ref={el => desktopItemRefs.current[index] = el}
                                        data-index={index}
                                        className='py-64'
                                    >
                                        <Heading2 className=' !text-[40px] pb-5'>{item.title}</Heading2>
                                        <p className='text-[18px]'>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className='flex lg:hidden flex-col items-start justify-start w-full '>
                                {data.map((item, index) => (
                                    <div
                                        key={index}
                                        data-index={index}
                                        className='py-5'
                                    >
                                        <div>
                                            <Image src={item.img} alt={item.title} width={1000} height={1000} className='w-full h-full my-10 aspect-[16/10.5] rounded-md object-cover' />
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

    export default ChangeImgOnScroll