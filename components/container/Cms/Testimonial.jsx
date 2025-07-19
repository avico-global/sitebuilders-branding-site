import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import FullContainer from "../../common/FullContainer";
import Container from "../../common/Container";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Heading1 from "../../ui/Heading1";
import { Play, Pause } from "lucide-react";
import Heading2 from "../../ui/Heading2";


const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Default to 0 for first slide
    const [isPlaying, setIsPlaying] = useState(true); // Add play/pause state
    const slides = [
        {
            id: 0,
            company: "Spin Master",
            companyLogo: "/logos/spin-master-logo.png", // You'll need to add this logo
            author: "Christopher Law",
            title: "Director of Customer Experience, Spin Master",
            authorImage: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&facepad=2", // Unsplash portrait
            quote: "With Webflow, we can integrate third party tools through robust APIs and collect data to create a richer user experience on our website... that extensibility ultimately empowers us to meet our customers' needs faster",
            storyUrl: "#"
        },
        {
            id: 1,
            company: "Fivetran",
            companyLogo: "/logos/fivetran-logo.png",
            author: "Cat Origiano",
            title: "VP of Product & Portfolio Marketing, Fivetran",
            authorImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400&facepad=2", // Unsplash portrait
            quote: "With Webflow Enterprise, we're able to move with trust and confidence that things will get done quickly without compromising our brand or draining resources.",
            storyUrl: "#"
        },
        {
            id: 2,
            company: "Lattice",
            companyLogo: "/logos/lattice-logo.png",
            author: "Elizabeth Walton Egan",
            title: "CMO, Lattice",
            authorImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&facepad=2", // Unsplash portrait
            quote: "With Webflow, we've significantly improved organic traffic, SEO, and conversions. From my perspective as CMO, that's a huge win because our brand is reaching more people.",
            storyUrl: "#"
        },
        {
            id: 3,
            company: "Vanta",
            companyLogo: "/logos/vanta-logo.png",
            author: "Jenny Thai",
            title: "Head of Content, Vanta",
            authorImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400&facepad=2", // Unsplash portrait
            quote: "Webflow's visual-first CMS has been very powerful in helping us save time on shipping new pages. We no longer need to rely on an in-house web developer to build new content.",
            storyUrl: "#"
        },
        {
            id: 4,
            company: "Outliant",
            companyLogo: "/logos/outliant-logo.png",
            author: "Michael Chen",
            title: "CEO, Outliant",
            authorImage: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400&facepad=2", // Unsplash portrait
            quote: "Webflow's platform has transformed how we approach web development. The combination of design flexibility and powerful integrations has accelerated our project delivery significantly.",
            storyUrl: "#"
        },
    ];

    const slidesContainerRef = useRef(null);
    const slideRefs = useRef([]);
    const [translateX, setTranslateX] = useState(0);
    const changeTimeout = useRef();
    const videoRefs = useRef([]);

    useEffect(() => {
        if (!slidesContainerRef.current || !slideRefs.current[activeIndex]) return;
        const container = slidesContainerRef.current;
        const activeSlide = slideRefs.current[activeIndex];
        const containerRect = container.getBoundingClientRect();
        const activeRect = activeSlide.getBoundingClientRect();
        // Calculate offset to center the active slide
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
        <FullContainer className="w-full overflow-hidden py-28 pb-36 bg-gray-100">
            <Container>
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-end w-full py-12">
                    <Heading2 className="  max-w-2xl">
                        The best companies build on Webflow
                    </Heading2>
                </div>
            </Container>
            <div
                ref={slidesContainerRef}
                className="w-full overflow-x-visible max-w-7xl mx-auto relative flex flex-row md:gap-4 items-center mt-4"
            >
                {/* Navigation Arrows - positioned outside the slides container */}
                <ArrowLeft
                    className={`w-7 absolute top-1/2 -translate-y-1/2 left-4 z-10 md:w-10 h-7 md:h-10 cursor-pointer hover:opacity-70 transition-opacity bg-white rounded-full p-2 shadow-lg ${activeIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
                    onClick={() => {
                        if (activeIndex === 0) {
                            handleChangeIndex(slides.length - 1);
                        } else {
                            handleChangeIndex(activeIndex - 1);
                        }
                    }}
                />
                <ArrowRight
                    className={`w-7 absolute top-1/2 -translate-y-1/2 right-4 z-10 md:w-10 h-7 md:h-10 cursor-pointer hover:opacity-70 transition-opacity bg-white rounded-full p-2 shadow-lg ${activeIndex === slides.length - 1 ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
                    onClick={() => {
                        if (activeIndex === slides.length - 1) {
                            handleChangeIndex(0);
                        } else {
                            handleChangeIndex(activeIndex + 1);
                        }
                    }}
                />

                <div
                    className="flex flex-row gap-4 lg:gap-8 xl:gap-16 items-start transition-transform duration-500"
                    style={{ transform: `translateX(${-translateX}px)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            ref={el => slideRefs.current[index] = el}
                            className={`flex-shrink-0 rounded-lg transition-all duration-500 ${index === activeIndex ? "mx-auto max-w-[330px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[920px] xl:min-w-7xl h-fit" : "mx-auto max-w-[330px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[920px] xl:min-w-7xl h-fit"} flex flex-col items-center justify-center `}
                            onClick={() => handleChangeIndex(index)}
                        >
                            <div className="w-full h-full relative rounded-lg shadow-2xl bg-white">
                                <div className="w-full h-fit p-8 lg:p-16">
                                    <div className={`text-black ${index === activeIndex ? "" : ""}`}>
                                        {/* Company Logo */}
                                        <div className="mb-8">
                                           {slide.companyLogo && <div className="w-32 h-12 relative">
                                                <Image
                                                    src={slide.companyLogo}
                                                    alt={`${slide.company} logo`}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>}
                                        </div>

                                        {/* Quote */}
                                        <div className="mb-8">
                                            <blockquote className="text-base sm:text-2xl lg:text-[27px] font-normal leading-relaxed">
                                                "{slide.quote}"
                                            </blockquote>
                                        </div>

                                        {/* Author Section */}
                                        <div className="flex flex-col sm:flex-row items-start gap-4">
                                            {/* Author Image */}
                                            <div className="flex flex-row gap-2 items-center">
                                                <div className="w-10 sm:w-16 h-10 sm:h-16 rounded-full overflow-hidden flex-shrink-0">
                                                    <Image
                                                        src={slide.authorImage}
                                                        alt={slide.author}
                                                        width={64}
                                                        height={64}
                                                        className="object-cover w-full h-full"
                                                    />
                                                </div>

                                                {/* Author Info */}
                                                <div className="flex-1 flex flex-col gap-1">
                                                    <div className="font-semibold text-sm sm:text-base">{slide.author}</div>
                                                    <div className="text-gray-600 text-xs sm:text-sm">{slide.title}</div>
                                                </div>
                                            </div>

                                            {/* Call to Action */}
                                            <div className="text-base font-semibold flex flex-row gap-2 items-center group cursor-pointer hover:text-blue-600 transition-colors">
                                                Read their story
                                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                            </div>
                                        </div>
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

export default Testimonial;