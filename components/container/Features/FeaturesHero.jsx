import React, { useState, useEffect, useRef } from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Image from 'next/image'
import Link from 'next/link'
import Paragraph1 from '../../ui/Paragraph1'
import Heading1 from '../../ui/Heading1'
import Button from '../../ui/Button'

export default function FeaturesHero() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const heroRef = useRef(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={heroRef} className='mt-24 h-full w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden pt-16 pb-20'>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-20 h-20 bg-gradient-to-r from-primary/8 to-primary/3 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-gradient-to-r from-primary/6 to-primary/2 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-r from-purple-500/10 to-purple-500/5 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <Container spacing="none" className='grid grid-cols-1 lg:grid-cols-2 items-center justify-between relative z-10 gap-12'>
        <div className={`w-full flex flex-col gap-6 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}>
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-primary/10 to-primary/5 text-primary font-semibold text-sm px-4 py-2 rounded-full border border-primary/20">
                🚀 Powerful Features
              </span>
            </div>
            <Heading1>Everything You Need to Build<br />Exceptional Websites</Heading1>
          </div>
          
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Paragraph1>
              From visual design tools to enterprise-grade hosting, SiteBuilderz provides a complete platform for creating, managing, and optimizing websites that drive results. Discover how our features work together to transform your web development workflow.
            </Paragraph1>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Button href="#detailed-features" className="bg-primary hover:bg-primary/90 text-white text-lg py-4 px-8 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2">
              <span>Explore Features</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
            <Button href="/contact" className="border-2 border-primary/30 text-primary text-lg py-4 px-6 rounded-lg font-medium hover:bg-primary/5 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Watch Demo</span>
            </Button>
          </div>
          
          <div className={`flex flex-row flex-wrap items-center gap-4 transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm text-gray-600">Trusted by 10,000+ teams</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm text-gray-600">4.9/5 rating</span>
              </div>
            </div>
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
            <div className='relative w-full h-full'>
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg mb-2 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">Visual Editor</h3>
                    <p className="text-sm text-gray-600">Drag & drop design</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-lg mb-2 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">Analytics</h3>
                    <p className="text-sm text-gray-600">Performance insights</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg mb-2 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">Security</h3>
                    <p className="text-sm text-gray-600">Enterprise-grade</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg mb-2 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">Performance</h3>
                    <p className="text-sm text-gray-600">Lightning fast</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 text-sm">All features work seamlessly together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 