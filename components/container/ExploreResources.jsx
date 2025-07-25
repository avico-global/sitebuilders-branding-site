import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Heading1 from "../ui/Heading1";
import { Play, Pause } from "lucide-react";
import Heading2 from "../ui/Heading2";


const ExploreResources = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [isPlaying, setIsPlaying] = useState(true);

    // Abstract icon components
    const PinkGlobeIcon = () => (
        <div className="w-full h-full bg-pink-500 rounded-full flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-pink-300 rounded-full"></div>
        </div>
    );
    const OrangeZIcon = () => (
        <div className="w-full h-full bg-orange-500 rounded-lg transform rotate-12 flex items-center justify-center">
            <div className="w-16 h-16 bg-black rounded"></div>
        </div>
    );
    const YellowBlocksIcon = () => (
        <div className="w-full h-full bg-yellow-500 rounded-lg flex items-center justify-center">
            <div className="w-20 h-20 bg-black rounded"></div>
        </div>
    );
    const BlueArcIcon = () => (
        <div className="w-full h-full bg-blue-500 rounded-lg flex items-center justify-center">
            <div className="w-20 h-20 bg-blue-300 rounded-full transform rotate-45"></div>
        </div>
    );
    const MultilingualIcon = () => (
        <div className="w-full h-full bg-blue-600 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-1">
                <div className="w-6 h-4 bg-blue-400 rounded text-xs flex items-center justify-center text-white">Hello</div>
                <div className="w-6 h-4 bg-blue-400 rounded text-xs flex items-center justify-center text-white">γεια</div>
                <div className="w-6 h-4 bg-blue-400 rounded text-xs flex items-center justify-center text-white">こん</div>
            </div>
        </div>
    );
    const PurpleGridIcon = () => (
        <div className="w-full h-full bg-purple-600 flex items-center justify-center">
            <div className="w-24 h-24 border-2 border-purple-300 rounded-full relative">
                <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
            </div>
        </div>
    );
    const BlueCursorIcon = () => (
        <div className="w-full h-full bg-blue-500 rounded-lg flex items-center justify-center relative">
            <div className="w-16 h-16 bg-blue-300 rounded transform rotate-45"></div>
            <div className="absolute top-4 right-4 w-6 h-8 bg-white rounded-sm border-2 border-black"></div>
        </div>
    );
    const BlueConcentricIcon = () => (
        <div className="w-full h-full bg-blue-600 flex items-center justify-center">
            <div className="w-24 h-24 relative">
                <div className="absolute inset-0 border-2 border-blue-300 rounded-full"></div>
                <div className="absolute inset-2 border-2 border-blue-300 rounded-full"></div>
                <div className="absolute inset-4 border-2 border-blue-300 rounded-full"></div>
            </div>
        </div>
    );

    const slides = [
        {
            id: 0,
            image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
            title: "Accelerating global expansion",
            description: "Learn how Smaller Earth Group, a leading travel company, launched localized sites to reach global audiences with Sitebuilderz...",
            webinarUrl: "#"
        },
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
            title: "Unifying web design and data",
            description: "Watch our webinar to discover how using Hubspot's powerful CRM with Sitebuilderz can enhance customer experiences and drive...",
            webinarUrl: "#"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
            title: "Unlocking stronger collaboration",
            description: "Join us to learn how modern teams like Kajabi are launching web projects faster and safer with Sitebuilderz.",
            webinarUrl: "#"
        },
            {
        id: 3,
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
        title: "Bridging the design to development gap",
        description: "Join Sitebuilderz and Diana Mounter, Head of Design at Github, in this webinar on the process of integrating design and...",
        webinarUrl: "#"
    },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
            title: "Localize your site in Sitebuilderz",
            description: "Learn how to localize a site for different languages and regions. Translate text, customize and manage content, and optimi...",
            webinarUrl: "#"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
            title: "Unlock worldwide scale with Localization in Sitebuilderz",
            description: "Discover the power of global expansion with Sitebuilderz Localization. Join our webinar for insights on website localization, customer...",
            webinarUrl: "#"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
            title: "The 2024 State of the Website",
            description: "Unlock insights from our report on the state of websites. Discover why marketers struggle with web execution and the opportunities...",
            webinarUrl: "#"
        },
            {
        id: 7,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
        title: "Scaling team collaboration",
        description: "Swati Raju, Head of Engineering at Atlassian, on organizational design and strategies, optimizing workflows, and team...",
        webinarUrl: "#"
    },
    ];

    const slidesContainerRef = useRef(null);
    const slideRefs = useRef([]);
    const [translateX, setTranslateX] = useState(0);
    const changeTimeout = useRef();

    useEffect(() => {
        if (!slidesContainerRef.current || !slideRefs.current[activeIndex]) return;
        const container = slidesContainerRef.current;
        const activeSlide = slideRefs.current[activeIndex];
        const containerRect = container.getBoundingClientRect();
        const activeRect = activeSlide.getBoundingClientRect();
        const containerCenter = containerRect.width / 2;
        const activeCenter = activeSlide.offsetLeft + activeSlide.offsetWidth / 2;
        const offset = activeCenter - containerCenter;
        setTranslateX(offset);
    }, [activeIndex]);

    const handleChangeIndex = (newIndex) => {
        if (changeTimeout.current) clearTimeout(changeTimeout.current);
        changeTimeout.current = setTimeout(() => {
            setActiveIndex(newIndex);
        }, 500);
    };

    return (
        <FullContainer spacing="large" className="w-full overflow-hidden pb-36 bg-gray-100">
            <Container>
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-end w-full py-12">
                    <Heading2 className="max-w-2xl">
                        Explore our latest webinars
                    </Heading2>
                </div>
            </Container>
            <div
                ref={slidesContainerRef}
                className="w-full overflow-x-visible max-w-7xl mx-auto relative flex flex-row md:gap-4 items-center"
            >
                {/* Navigation Arrows */}
                <ArrowLeft
                    className={`w-7 absolute -top-12 right-16 z-10 md:w-10 h-7 md:h-10 cursor-pointer hover:opacity-70 transition-opacity bg-white rounded-full p-2 shadow-lg ${activeIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
                    onClick={() => {
                        if (activeIndex === 0) {
                            handleChangeIndex(slides.length - 1);
                        } else {
                            handleChangeIndex(activeIndex - 1);
                        }
                    }}
                />
                <ArrowRight
                    className={`w-7 absolute -top-12 right-4 z-10 md:w-10 h-7 md:h-10 cursor-pointer hover:opacity-70 transition-opacity bg-white rounded-full p-2 shadow-lg ${activeIndex === slides.length - 1 ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
                    onClick={() => {
                        if (activeIndex === slides.length - 1) {
                            handleChangeIndex(0);
                        } else {
                            handleChangeIndex(activeIndex + 1);
                        }
                    }}
                />

                <div
                    className="flex flex-row gap-4 lg:gap-8 max-w-7xl mx-auto xl:gap-9 h-full  items-start transition-transform duration-500"
                    style={{ transform: `translateX(${-translateX}px)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            ref={el => slideRefs.current[index] = el}
                            className={`flex-shrink-0 transition-all duration-500 h-full ${index === activeIndex ? "max-w-[300px] md:max-w-[400px]" : "max-w-[300px] md:max-w-[400px]"} flex flex-col`}
                            onClick={() => handleChangeIndex(index)}
                        >
                            <div className="w-full bg-white rounded-lg shadow-lg min-h-[450px] overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
                                {/* Abstract Image */}
                                <div className="w-full h-48 bg-black relative overflow-hidden">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-black mb-4 leading-tight">
                                        {slide.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {slide.description}
                                    </p>

                                    {/* Call to Action */}
                                    <div className="flex items-center text-black font-semibold text-sm hover:text-blue-600 transition-colors cursor-pointer group">
                                        <span>View webinar</span>
                                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </FullContainer>
    );
};

export default ExploreResources;