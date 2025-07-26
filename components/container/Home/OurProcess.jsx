import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { PlayIcon, PauseIcon } from 'lucide-react';
import FullContainer from '../../common/FullContainer';
import Container from '../../common/Container';
import Paragraph1 from '../../ui/Paragraph1';
import Paragraph2 from '../../ui/Paragraph2';
import Paragraph3 from '../../ui/Paragraph3';


const projects = [
    { name: 'Project 1', image: '/st-images/download (11).png' },
    { name: 'Project 2', image: '/st-images/download (10).png' },
    { name: 'Project 3', image: '/st-images/download (9).png' },
    { name: 'Project 10', image: '/st-images/download (1).jpeg' },
    { name: 'Project 11', image: '/st-images/download.jpeg' },
    { name: 'Project 12', image: '/st-images/download (4).png' },
    { name: 'Project 4', image: '/st-images/images (2).png' },
    { name: 'Project 5', image: '/st-images/download (8).png' },
    { name: 'Project 6', image: '/st-images/images (1).png' },
    { name: 'Project 7', image: '/st-images/download (7).png' },
    { name: 'Project 8', image: '/st-images/download (6).png' },
    { name: 'Project 9', image: '/st-images/download (5).png' },
    { name: 'Project 10', image: '/st-images/download (1).jpeg' },
    { name: 'Project 11', image: '/st-images/download.jpeg' },
    { name: 'Project 12', image: '/st-images/download (4).png' },
    { name: 'Project 13', image: '/st-images/images.png' },
    { name: 'Project 14', image: '/st-images/download (3).png' },
    { name: 'Project 15', image: '/st-images/download (2).png' },
    { name: 'Project 16', image: '/st-images/download (1).png' },
    { name: 'Project 17', image: '/st-images/download.png' },
];



const processSteps = [
    {
        title: 'Launch from repo',
        description: 'Launch your site in minutes with a template or start from scratch with a blank canvas.',
        icon: '/st-images/step1.svg',
    },
    {
        title: 'Build fast with templates',
        description: "Choose from 100+ templates and launch your site in minutes.",
        icon: '/st-images/step2.svg',
    },
    {
        title: 'Edit and optimize',
        description: 'Deliver web experiences that get results with built-in tools for analytics, A/B testing, AI-driven personalization, and SEO.',
        icon: '/st-images/step3.svg',
    },
    {
        title: 'Boost Visibility. Dominate Google',
        description: 'Tools to support your growth — without sacrificing speed, quality, or security.',
        icon: '/st-images/step4.svg',
    },
];


const OurProcess = () => {
    // By default, video should play, so initial state is 'pause' (button shows pause, click to pause)
    const [VideoStats, setVideoStats] = useState('pause');
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            if (VideoStats === 'pause') {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [VideoStats]);

    const handleVideoStats = () => {
        setVideoStats(VideoStats === 'play' ? 'pause' : 'play');
    }
    return (
        <FullContainer className=' '>
            <Container className=' border-b border-gray-300'>
                {/* <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-10  items-center justify-items-center space-y-2 sm:space-y-4 lg:space-y-6">
                    {projects.map((project, idx) => (
                        <div key={idx} className="flex flex-col items-center h-[50px] overflow-hidden justify-center">
                            <Image
                                src={project.image}
                                alt={project.name}
                                width={80}
                                height={80}
                                className="w-30 object-contain mb-3  "
                            />
                        </div>
                    ))}
                </div> */}
                <div className='w-full relative'>
                    <div className="w-full">
                        <video
                            src="/videos/Video-sitebuilderz/Project.mp4"
                            ref={videoRef}
                            muted
                            loop
                            className='w-full h-full object-cover rounded-lg'
                        />
                    </div>
                    {/* <div className='absolute bottom-0 left-0 w-full h-[75%] bg-gradient-to-b from-transparent to-white rounded-lg'></div> */}
                    <div className="absolute top-[40%] left-[-5.5%] w-[15%] overflow-visible z-10">
                        <Image
                            src="/st-images/side1.avif"
                            alt="logo"
                            width={1000}
                            height={1000}
                            className="w-full shadow-[0_20px_20px_rgba(0,0,0,0.3)] sm:shadow-[0_30px_30px_rgba(0,0,0,0.4)] md:shadow-[0_40px_40px_rgba(0,0,0,0.5)] rounded-sm"
                        />
                    </div>
                    <div className="absolute top-[40%] right-[-5.5%] w-[28%] overflow-visible">
                        <Image
                            src="/st-images/side2.avif"
                            alt="logo"
                            width={1000}
                            height={1000}
                            className='w-full shadow-[0_20px_20px_rgba(0,0,0,0.3)] sm:shadow-[0_30px_30px_rgba(0,0,0,0.4)] md:shadow-[0_40px_40px_rgba(0,0,0,0.5)] rounded-sm'
                        />
                    </div>
                    <div onClick={handleVideoStats} className='absolute cursor-pointer bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 p-2 rounded-sm bg-black text-white overflow-visible border'>
                        <div className='cursor-pointer'>
                            {VideoStats === 'play' ?
                                <PlayIcon size={16} className='w-2 h-2 md:w-4 md:h-4' />
                                :
                                <PauseIcon size={16} className='w-2 h-2 md:w-4 md:h-4' />
                            }
                        </div>
                    </div>
                </div>
                <div className='pt-10'>
                    {/* Process Section Start */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-12 ">
                        {processSteps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-start border-t border-gray-300 pt-[24px] ">
                                <div className="mb-[12px]">
                                    <Image src={step.icon} alt={`${step.title} icon`} width={32} height={32} />
                                </div>
                                <Paragraph2 className="font-bold">{step.title}</Paragraph2>
                                <Paragraph3 className="">{step.description}</Paragraph3>
                            </div>
                        ))}
                    </div>
                    {/* Process Section End */}
                </div>
            </Container>
        </FullContainer>
    )
}

export default OurProcess