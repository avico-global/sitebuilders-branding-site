import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Heading1 from "./Heading1";
import { Play, Pause } from "lucide-react";
import Heading2 from "./Heading2";


const VideoSlider = () => {
    const [activeIndex, setActiveIndex] = useState(3); // Default to 3 for your example
    const [isPlaying, setIsPlaying] = useState(true); // Add play/pause state
    const slides = [
        {
            id: 0,
            url: "/videos/design-build1.mp4",
            company: "Fivetran",
            author: "Cat Origiano — VP of Product & Portfolio Marketing",
            quote: "With Sitebuilderz Enterprise, we're able to move with trust and confidence that things will get done quickly without compromising our brand or draining resources.",
            stat: "98%",
            statLabel: "Increase in speed to market",
            storyUrl: "#"
        },
        {
            id: 1,
            url: "/videos/design-build2.mp4",
            company: "Lattice",
            author: "Elizabeth Walton Egan — CMO",
            quote: "With Sitebuilderz, we've significantly improved organic traffic, SEO, and conversions. From my perspective as CMO, that's a huge win because our brand is reaching more people.",
            stat: "20%",
            statLabel: "Increase in organic traffic",
            storyUrl: "#"
        },
        {
            id: 2,
            url: "/videos/design-build3.mp4",
            company: "Vanta",
            author: "Jenny Thai — Head of Content",
            quote: "Sitebuilderz's visual-first CMS has been very powerful in helping us save time on shipping new pages. We no longer need to rely on an in-house web developer to build new content.",
            stat: "5k",
            statLabel: "Faster speed to market",
            storyUrl: "#"
        },
        {
            id: 3,
            url: "/videos/design-build4.mp4",
            company: "Outliant",
            author: "Elizabeth Walton Egan — CMO",
            quote: "With Sitebuilderz, we've significantly improved organic traffic, SEO, and conversions. From my perspective as CMO, that's a huge win because our brand is reaching more people.",
            stat: "$1M+",
            statLabel: "Increase in organic traffic",
            storyUrl: "#"
        },
        {
            id: 4,
            url: "/videos/design-build5.mp4",
            company: "Outliant",
            author: "Jenny Thai — Head of Content",
            quote: "Sitebuilderz's visual-first CMS has been very powerful in helping us save time on shipping new pages. We no longer need to rely on an in-house web developer to build new content.",
            stat: "$1M+",
            statLabel: "Faster speed to market",
            storyUrl: "#"
        },
    ];

    const infinitySlides = [...slides, ...slides, ...slides];
    const slidesContainerRef = useRef(null);
    const slideRefs = useRef([]);
    const [translateX, setTranslateX] = useState(0);
    const changeTimeout = useRef();
    const videoRefs = useRef([]);
    const autoPlayTimeout = useRef();

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

    // Auto-advance slides every 10 seconds
    useEffect(() => {
        if (isPlaying) {
            autoPlayTimeout.current = setTimeout(() => {
                const nextIndex = (activeIndex + 1) % slides.length;
                setActiveIndex(nextIndex);
            }, 12000); // 10 seconds
        }

        return () => {
            if (autoPlayTimeout.current) {
                clearTimeout(autoPlayTimeout.current);
            }
        };
    }, [activeIndex, isPlaying, slides.length]);

    useEffect(() => {
        videoRefs.current.forEach((video, idx) => {
            if (video) {
                if (idx === activeIndex) {
                    if (isPlaying) {
                        video.play();
                    } else {
                        video.pause();
                    }
                } else {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
    }, [activeIndex, isPlaying]);

    const handleChangeIndex = (newIndex) => {
        if (changeTimeout.current) clearTimeout(changeTimeout.current);
        changeTimeout.current = setTimeout(() => {
            setActiveIndex(newIndex);
        }, 500);
    };

    const handlePlayPause = () => {  
        setIsPlaying(!isPlaying);
    };

    return (
        <FullContainer className="w-full overflow-hidden py-28 pb-36 bg-gray-100">
            <Container>
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-end w-full py-12">
                    <Heading2 className="  max-w-2xl">
                        The best companies build on Sitebuilderz
                    </Heading2>
                    <div className=" w-full flex flex-row justify-start md:justify-end items-center gap-4 ">
                        <div className=" w-full flex flex-row justify-between items-center gap-4 max-w-[60px] md:max-w-[100px] ">
                            <ArrowLeft className="w-7 md:w-10 h-7 md:h-10 " onClick={() => handleChangeIndex(Math.max(0, activeIndex - 1))} />
                            <ArrowRight className="w-7 md:w-10 h-7 md:h-10" onClick={() => handleChangeIndex(Math.min(slides.length - 1, activeIndex + 1))} />
                        </div>
                    </div>
                </div>
            </Container>
            <div
                ref={slidesContainerRef}
                className="w-full overflow-x-visible relative flex flex-row md:gap-4 items-center mt-4"
            >
                <div
                    className="flex flex-row gap-4 items-start transition-transform duration-500"
                    style={{ transform: `translateX(${-translateX}px)` }}
                >
                    {infinitySlides.map((slide, index) => (
                        <div
                            key={index}
                            ref={el => slideRefs.current[index] = el}
                            className={`flex-shrink-0 rounded-lg transition-all duration-500 ${index === activeIndex ? "mx-auto max-w-[330px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[920px] xl:min-w-7xl h-[610px] md:h-[720px]" : "w-[80px] h-[610px] md:h-[720px]"} flex flex-col items-center justify-center `}
                            onClick={() => handleChangeIndex(index)}
                        >
                            <div className="w-full h-full relative rounded-lg shadow-2xl ">
                                <video
                                    ref={el => videoRefs.current[index] = el}
                                    src={slide.url}
                                    muted
                                    loop
                                    className="w-full h-full object-cover rounded-lg overflow-hidden shadow-2xl"
                                />
                                <div className={`absolute rounded-lg bottom-0 left-0 w-full h-full ${index === activeIndex ? "bg-gradient-to-t from-black/50 to-black/0" : "bg-white/50"}`}></div>
                                <div className="absolute bottom-0 left-0 w-full h-fit lg:p-16">
                                    <div className={`lg:border border-t lg:rounded-sm text-white p-6 flex flex-col lg:flex-row gap-8 ${index === activeIndex ? "" : "hidden"}`}>
                                        <div className="border-b lg:border-b-0 flex flex-row lg:flex-col gap-3 w-fit justify-start lg:justify-end lg:gap-6 items-center ">
                                            <div className="lg:text-[110px] lg:font-bold">{slide.stat}</div>
                                            <div className="text-lg font-semibold lg:min-w-[200px] lg:w-full">{slide.statLabel}</div>
                                        </div>
                                        <div className=" flex flex-col gap-4 justify-between">
                                            <div className="text-xl sm:text-2xl lg:text-[27px] font-semibold">{slide.quote}</div>
                                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-start sm:items-center">
                                                <div className="text-lg font-semibold">{slide.author}</div>
                                                <div className="text-base sm:text-lg font-semibold flex flex-row gap-2 items-center group cursor-pointer">Read Story <ArrowUpRight className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300" /></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={`absolute bottom-3 right-3 p-1.5 bg-black/50 rounded-lg flex flex-row justify-between items-center ${index === activeIndex ? "" : "hidden"}`}>
                                    <button onClick={handlePlayPause} className="cursor-pointer">
                                        {isPlaying ? (
                                            <Pause className="w-4 h-4 text-white" />
                                        ) : (
                                            <Play className="w-4 h-4 text-white" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </FullContainer>
    );
};

export default VideoSlider;