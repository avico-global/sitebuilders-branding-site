import React, { useState, useEffect, useRef } from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Image from 'next/image'
import Link from 'next/link'
import Paragraph1 from '../../ui/Paragraph1'
import Heading1 from '../../ui/Heading1'

export default function Banner() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Changed from false to true
  const bannerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={bannerRef} spacing="default" className='mt-24 h-full w-full bg-[#f8f9fb] relative overflow-hidden pt-10'>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-primary/8 to-primary/3 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-primary/6 to-primary/2 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <Container spacing="none" className='grid grid-cols-1 md:grid-cols-2 items-center justify-between relative z-10  '>
        <div className={`w-full -mt-14 flex flex-col gap-5 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}>
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-2">
              <span className="inline-block bg-gradient-to-r from-primary/10 to-primary/5 text-primary font-semibold text-sm px-4 py-2 rounded-full border border-primary/20">
                ✨ Revolutionary Website Building
              </span>
            </div>
            <Heading1>Revolutionize Your Workflow<br />with Site Builderz</Heading1>
          </div>
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Paragraph1>
              Transform your ideas into stunning websites in minutes. Our AI-powered platform combines drag-and-drop simplicity with enterprise-grade features, making professional web development accessible to everyone.
            </Paragraph1>
          </div>
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="bg-primary w-fit text-white text-xl py-4 px-8 rounded-lg font-semibold cursor-pointer hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2">
              <span>Start Building Free</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="border-2 border-primary/30 text-primary text-lg py-4 px-6 rounded-lg font-medium cursor-pointer hover:bg-primary/5 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Watch Demo</span>
            </button>
          </div>
          <div className={`flex flex-row flex-wrap items-center gap-2 transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className='text-base md:text-lg text-[#222]'>Need a domain first?</span>
            <Link href="#" className="text-primary font-bold text-base md:text-lg underline hover:text-primary transition-all duration-300 hover:scale-105">
              Search and buy available domain names
            </Link>
          </div>
        </div>
        <div className={`w-full transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'}`}>
          <div
            className="relative"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className=' p-10'>
              <div className='relative w-full h-full'>
                <video src="/videos/Video-sitebuilderz/Add-templates.mp4" autoPlay loop muted playsInline className='w-full h-full object-cover' />
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
              </div>
            </div>
            {/* Floating elements around the image */}
            <div className="absolute top-4 right-4 w-4 h-4 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-8 left-8 w-3 h-3 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-8 w-2 h-2 bg-primary/25 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </Container>

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
