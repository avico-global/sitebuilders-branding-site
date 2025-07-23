    import Heading1 from './Heading1'
    import React, { useState, useEffect, useRef } from 'react'
    import { ArrowUpRight } from 'lucide-react'
    import FullContainer from '../common/FullContainer'
    import Container from '../common/Container'
    import Button from './Button'

    const ProcessSection = ({ theme, data, animationData }) => {
        const [activeVideoIndex, setActiveVideoIndex] = useState(0);

        return (
            <>
                {data?.map((item, index) => (
                    <FullContainer key={index} className={`pb-10  ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>

                        <FullContainer className={`${theme === "light" ? "bg-white text-black" : "bg-black text-white"} `}>
                            <Container className='py-10 lg:py-18'>
                                <Heading1 className={`max-w-[1000px] ${theme === "light" ? "text-black" : "text-white"}`}>{item.title}</Heading1>
                            </Container>
                        </FullContainer>

                        <FullContainer className={`relative max-w-[1850px]  mx-auto  overflow-hidden ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
                            <Container className=' flex flex-col lg:flex-row h-full items-stretch'>
                                <div className="lg:w-[54%] lg:pr-24  lg:h-full">
                                    <p className={`text-xl md:text-[26px] mb-8 ${theme === "light" ? "text-gray-900" : "text-gray-100"}`}>{item.desc}</p>
                                    <Button className="mb-8">{item.buttonText}</Button>
                                    {item.ebook?.show && (
                                        <div className={`border group cursor-pointer rounded flex flex-col items-start p-[10px] px-4 gap-[0] mb-10 w-full ${theme === "light" ? "border-gray-300" : "border-gray-600"}`}>
                                            <div className="flex items-center justify-between gap-3 w-full ">
                                                <div className="flex items-center gap-0.5">
                                                    <span className="bg-[#E24E28] text-xs text-white font-bold px-2 py-1 rounded mr-2">NEW</span>
                                                    <span className={` ${theme === "light" ? "bg-black text-white" : "bg-white text-black"} text-xs font-semibold px-2 py-1 rounded mr-2`}>EBOOK</span>
                                                </div>
                                                <div className='relative w-10 h-10 flex items-center justify-center '>
                                                    <span className="absolute bottom-3 left-3 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500 ease-in-out"><ArrowUpRight className="w-5 h-5" /></span>
                                                </div>
                                            </div>
                                            <span className={`text-base font-semibold flex-1 ${theme === "light" ? "text-black" : "text-white"}`}>{item.ebook.title}</span>
                                        </div>
                                    )}
                                    <div className="py-10 min-h-[550px]">
                                        <SectionAnimation
                                            sections={animationData}
                                            theme={theme}
                                            onSectionChange={setActiveVideoIndex}
                                        />
                                    </div>
                                </div>
                                <div className=':w-[46%] lg:w-[46%]  rounded-lg  relative w-auto aspect-square lg:h-[810px]'>
                                    <div className='w-auto h-full lg:h-full py-5 pl-5 bg-gray-100 m-0 aspect-square lg:aspect-auto lg:absolute lg:w-[810px] lg:bottom-0 lg:left-0 rounded-lg overflow-hidden'>
                                        <div className='w-full pr-[100px] h-full 2xl:pr-5'>
                                            <video
                                                src={item.videos[activeVideoIndex]?.src || item.videos[0]?.src}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                className='w-full h-full object-contain object-top rounded'
                                                onError={(e) => console.error('Video error:', e)}
                                            />
                                        </div>
                                    </div>
                                </div>
                              
                            </Container>
                        </FullContainer>
                    </FullContainer>
                ))}
            </>
        )
    }
    export default ProcessSection

    function SectionAnimation({ sections, theme, onSectionChange }) {
        const [activeSection, setActiveSection] = useState(-1);
        const [visibleSection, setVisibleSection] = useState(-1);
        const observerRef = useRef(null);
        const sectionRef = useRef(null);
        const animationStarted = useRef(false);
        const timeoutRef = useRef(null);

        const handleSectionClick = (index) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            setVisibleSection(-1);

            setTimeout(() => {
                setActiveSection(index);
                setVisibleSection(index);
                onSectionChange(index);
            }, 300);

            timeoutRef.current = setTimeout(() => {
                const nextSection = (index + 1) % sections.length;
                setVisibleSection(-1);
                setTimeout(() => {
                    setActiveSection(nextSection);
                    setVisibleSection(nextSection);
                    onSectionChange(nextSection);
                }, 300);
            }, 10000);
        };

        useEffect(() => {
            observerRef.current = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !animationStarted.current) {
                        animationStarted.current = true;
                        setActiveSection(0);
                        setVisibleSection(0);
                        onSectionChange(0);
                    }
                },
                { threshold: 0.6 }
            );

            if (sectionRef.current) {
                observerRef.current.observe(sectionRef.current);
            }

            return () => {
                if (sectionRef.current) {
                    observerRef.current.unobserve(sectionRef.current);
                }
            };
        }, [onSectionChange]);

        useEffect(() => {
            if (activeSection === -1) return;

            timeoutRef.current = setTimeout(() => {
                const nextSection = (activeSection + 1) % sections.length;

                setVisibleSection(-1);

                setTimeout(() => {
                    setActiveSection(nextSection);
                    setVisibleSection(nextSection);
                    onSectionChange(nextSection);
                }, 300);
            }, 10000);

            return () => clearTimeout(timeoutRef.current);
        }, [activeSection, sections.length, onSectionChange]);

        return (
            <div
                ref={sectionRef}
                id="animation-section"
                className=" flex flex-col justify-end items-start min-h-[350px] "
            >
                {sections.map((section, index) => {
                    const isActive = index === activeSection;
                    const isVisible = index === visibleSection;

                    return (
                        <div key={index} className={`relative w-full ${theme === "light" ? "text-black" : "text-white"}`}>
                            <div className="relative pl-8 h-full">
                                <div className={`absolute left-0 top-0 w-0.5 h-full ${theme === "light" ? "bg-gray-100" : "bg-gray-700"}`}>
                                    <div
                                        className={`bg-[#E24E28] absolute left-[-1px] top-0 w-1 origin-top transition-all duration-[9000ms] ease-linear`}
                                        style={{
                                            height: isActive ? "100%" : "0%",
                                            transition: isActive ? "height 9000ms linear" : "height 0000ms ease-out"
                                        }}
                                    />
                                </div>

                                <h2
                                    className={`text-lg md:text-2xl font-bold mb-2 pt-2 relative z-10 cursor-pointer hover:opacity-80 transition-opacity ${isActive ? (theme === "light" ? "text-black" : "text-white") : (theme === "light" ? "text-gray-400" : "text-gray-500")}`}
                                    onClick={() => handleSectionClick(index)}
                                >
                                    {section.title}
                                </h2>
                                <div
                                    className={`relative z-10 pb-4 overflow-hidden transition-all duration-1000 ease-in-out transform ${isVisible
                                        ? "opacity-100 max-h-[400px] scale-y-100"
                                        : "opacity-0 max-h-0 scale-y-95"
                                        } ${isActive ? (theme === "light" ? "text-black" : "text-white") : (theme === "light" ? "text-gray-500" : "text-gray-400")}`}
                                >
                                    <p className="text-base md:text-lg leading-relaxed">{section.desc}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }










