import Heading1 from './Heading1'
import React, { useState, useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import FullContainer from '../common/FullContainer'
import Container from '../common/Container'
import Button from './Button'
import Image from 'next/image'
import Heading2 from './Heading2'

const ImageChanger = ({ theme, data, animationData }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    return (
        <>
            {data?.map((item, index) => (
                <FullContainer key={index} className={`pb-10  ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>

                    <FullContainer className={`${theme === "light" ? "bg-white text-black" : "bg-black text-white"} `}>
                        <Container className='py-10 lg:py-18'>
                            <Heading2 className={`max-w-[1000px] ${theme === "light" ? "text-black" : "text-white"}`}>{item.title}</Heading2>
                        </Container>
                    </FullContainer>

                    <FullContainer className={`relative max-w-[1850px] mx-auto  overflow-hidden ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
                        <Container className=' flex flex-col lg:flex-row h-full items-stretch'>
                            <div className="lg:w-[54%] lg:pr-24  lg:h-full">
                                <div className="py-10">
                                    <SectionAnimation
                                        sections={animationData}
                                        theme={theme}
                                        onSectionChange={setActiveImageIndex}
                                    />
                                </div>
                                <div className='bg-gray-300 p-6 rounded-lg shadow-lg max-w-xl mx-auto border border-gray-300'>
                                    {/* Logo placeholder - replace with <Image src="/moloco-logo.png" ... /> if available */}
                                    <div className="mb-6">
                                        <span className="font-extrabold text-2xl text-black">MOLOCO</span>
                                    </div>
                                    <p className="text-black text-2xl md:text-3xl font-light mb-8">
                                        “Localization allows us to ship localized sites 4X faster, save on dev costs, and create custom experiences that will significantly boost engagement in our target markets.”
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        {/* Avatar placeholder - replace src with actual avatar if available */}
                                        <div className="w-14 h-14 rounded-full bg-white overflow-hidden flex items-center justify-center">
                                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="LeGrand Woolley" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="text-black font-bold text-lg">LeGrand Woolley</h3>
                                            <p className="text-black text-sm">Marketing Operations, Moloco</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-[46%] relative w-full lg:h-[950px]'>
                                <div className='w-[100%] h-full p-0 m-0 aspect-square lg:aspect-auto lg:absolute lg:w-[890px] lg:bottom-0 lg:left-0 bg-black rounded'>
                                    {item.images?.map((image, vIdx) => (
                                        <Image
                                            width={1000}
                                            height={1000}
                                            key={vIdx}
                                            src={item.images[activeImageIndex]?.src || item.images[0]?.src}
                                            className='w-full h-full object-cover rounded'
                                        />
                                    ))}
                                </div>

                            </div>
                        </Container>
                    </FullContainer>
                </FullContainer>
            ))}
        </>
    )
}
export default ImageChanger

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
        }, 9000);
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
        }, 9000);

        return () => clearTimeout(timeoutRef.current);
    }, [activeSection, sections.length, onSectionChange]);

    return (
        <div
            ref={sectionRef}
            id="animation-section"
            className=" flex flex-col justify-start items-start min-h-[500px] "
        >
            {sections.map((section, index) => {
                const isActive = index === activeSection;
                const isVisible = index === visibleSection;

                return (
                    <div key={index} className={`relative w-full ${theme === "light" ? "text-black" : "text-white"}`}>
                        <div className="relative  h-full">


                            <h2
                                className={`text-lg md:text-2xl font-bold mb-2 px-4 pt-2 relative z-10 cursor-pointer hover:opacity-80 transition-opacity ${isActive ? (theme === "light" ? "text-primary" : "text-primary") : (theme === "dark" ? "text-gray-500" : "text-gray-500")}`}
                                onClick={() => handleSectionClick(index)}
                            >
                                {section.title}
                            </h2>
                            <div
                                className={`relative z-10 pb-4 transition-all duration-1000 ease-in-out transform ${isVisible
                                    ? "opacity-100 max-h-[400px] scale-y-100"
                                    : "opacity-0 max-h-0 scale-y-95"
                                    } ${isActive ? (theme === "light" ? "text-black" : "text-white") : (theme === "light" ? "text-gray-500" : "text-gray-400")}`}
                            >
                                <p className="text-sm md:text-lg leading-relaxed p-4">{section.desc}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}










