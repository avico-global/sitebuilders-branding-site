import Heading1 from './Heading1'
import React, { useState, useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import FullContainer from '../common/FullContainer'
import Container from '../common/Container'
import Button from './Button'
import Paragraph1 from './Paragraph1'
import Heading3 from './Heading3'
import Paragraph3 from './Paragraph3'

const ProcessSection = ({ theme, data, animationData }) => {
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);

    // Generate random animated background elements
    const generateRandomBackground = () => {
        const shapes = ['circle', 'rectangle', 'triangle'];
        const colors = ['bg-blue-400', 'bg-green-400', 'bg-purple-400', 'bg-pink-400', 'bg-yellow-400', 'bg-indigo-400', 'bg-red-400'];
        const animations = ['animate-bounce', 'animate-pulse', 'animate-ping', 'animate-spin'];
        const elements = [];
        
        // Generate 5-8 random elements
        const numElements = Math.floor(Math.random() * 4) + 5;
        
        for (let i = 0; i < numElements; i++) {
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const animation = animations[Math.floor(Math.random() * animations.length)];
            const size = Math.floor(Math.random() * 40) + 8; // 8-48px
            const left = Math.floor(Math.random() * 80) + 5; // 5-85%
            const top = Math.floor(Math.random() * 80) + 5; // 5-85%
            const opacity = Math.random() * 0.3 + 0.05; // 0.05-0.35
            const delay = Math.random() * 3; // 0-3s
            const duration = Math.random() * 4 + 2; // 2-6s
            
            let shapeClass = '';
            if (shape === 'circle') {
                shapeClass = 'rounded-full';
            } else if (shape === 'rectangle') {
                shapeClass = 'rounded-lg';
            } else if (shape === 'triangle') {
                shapeClass = 'transform rotate-45';
            }
            
            elements.push({
                shapeClass,
                color,
                animation,
                size,
                left,
                top,
                opacity,
                delay,
                duration
            });
        }
        
        return elements;
    };

    // FIX: Only generate random elements on the client
    const [randomElements, setRandomElements] = useState([]);
    useEffect(() => {
        setRandomElements(generateRandomBackground());
    }, []);

    return (
        <>
            {data?.map((item, index) => (
                <div key={index} className={`relative overflow-hidden ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
                    {/* Random Animated Background Elements */}
                    <div className="pointer-events-none absolute inset-0 z-0">
                        {randomElements.map((element, elemIndex) => (
                            <div
                                key={elemIndex}
                                className={`absolute ${element.shapeClass} ${element.color} ${element.animation}`}
                                style={{
                                    width: `${element.size}px`,
                                    height: `${element.size}px`,
                                    left: `${element.left}%`,
                                    top: `${element.top}%`,
                                    opacity: element.opacity,
                                    animationDelay: `${element.delay}s`,
                                    animationDuration: `${element.duration}s`
                                }}
                            />
                        ))}
                    </div>
                    {/* End Random Animated Background Elements */}

                    <FullContainer className={`relative max-w-[1850px]  mx-auto  overflow-hidden`}>
                        <FullContainer className={''}>
                            <Container className='pb-6 md:pb-10'>
                                <Heading1 className={`max-w-[1000px] ${theme === "light" ? "text-black" : "text-white"}`}>{item.title}</Heading1>
                            </Container>
                        </FullContainer >
                        <Container className=' flex flex-col lg:flex-row h-full items-stretch'>
                            <div className="lg:w-[54%] lg:pr-24  lg:h-full">
                                <Paragraph1 className={` mb-8 ${theme === "light" ? "text-gray-900" : "text-gray-100"}`}>{item.desc}</Paragraph1>
                                <Button className="mb-8">{item.buttonText}</Button>
                                <div className=" h-full">
                                    <SectionAnimation
                                        sections={animationData}
                                        theme={theme}
                                        onSectionChange={setActiveVideoIndex}
                                    />
                                </div>
                            </div>
                            <div className=':w-[46%] lg:w-[46%] rounded-lg  relative w-auto  '>
                                <div className=' p-5 bg-gray-100 m-0 aspect-[16/7.5] lg:absolute lg:w-[790px] h-auto lg:bottom-0 lg:left-0 rounded-lg overflow-hidden'>
                                    <div className="aspect-[16/7] w-full h-auto">
                                        <video
                                            // src={item.videos[activeVideoIndex]?.src || item.videos[0]?.src}
                                            src="/videos/Video-sitebuilderz/Add-templates.mp4"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className='w-full h-full object-cover object-top rounded '
                                            onError={(e) => console.error('Video error:', e)}
                                        />
                                    </div>
                                </div>
                            </div>

                        </Container>
                    </FullContainer>
                </div>
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
            className=" flex flex-col justify-start  md:justify-end items-start h-full min-h-[300px] "
        >
            {sections.map((section, index) => {
                const isActive = index === activeSection;
                const isVisible = index === visibleSection;

                return (
                    <div key={index} className={`relative w-full ${theme === "light" ? "text-black" : "text-white"}`}>
                        <div className="relative pl-8 h-full">
                            <div className={`absolute left-0 top-0 w-0.5  h-full ${theme === "light" ? "bg-gray-100" : "bg-gray-700"}`}>
                                <div
                                    className={`bg-[#E24E28] absolute left-[-1px] top-0 w-1 origin-top transition-all duration-[9000ms] ease-linear`}
                                    style={{
                                        height: isActive ? "100%" : "0%",
                                        transition: isActive ? "height 9000ms linear" : "height 0000ms ease-out"
                                    }}
                                />
                            </div>
                            <div onClick={() => handleSectionClick(index)}>

                                <Paragraph1
                                    className={`font-bold relative z-10 pt-3  cursor-pointer hover:opacity-80 transition-opacity ${isActive ? (theme === "light" ? "text-black" : "text-white") : (theme === "light" ? "text-gray-400" : "text-gray-500")}`}
                                >
                                    {section.title}
                                </Paragraph1>
                            </div>
                            <div
                                className={`relative z-10 overflow-hidden transition-all duration-1000 ease-in-out transform ${isVisible
                                    ? "opacity-100 max-h-[400px] scale-y-100"
                                    : "opacity-0 max-h-0 scale-y-95"
                                    } ${isActive ? (theme === "light" ? "text-black" : "text-white") : (theme === "light" ? "text-gray-500" : "text-gray-400")}`}
                            >
                                <Paragraph3 className="">{section.desc}</Paragraph3>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}










