import React, { useEffect, useState } from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'

export default function Compinies() {
  const [logos, setLogos] = useState([])

  // Company logos data
  const companyLogos = [
    { id: 1, name: 'Company 1', logo: '/st-images/companies/1.webp' },
    { id: 2, name: 'Company 2', logo: '/st-images/companies/2.webp' },
    { id: 3, name: 'Company 3', logo: '/st-images/companies/3.webp' },
    { id: 4, name: 'Company 4', logo: '/st-images/companies/4.webp' },
    { id: 5, name: 'Company 5', logo: '/st-images/companies/5.webp' },
    { id: 6, name: 'Company 6', logo: '/st-images/companies/6.webp' },
    { id: 7, name: 'Company 7', logo: '/st-images/companies/7.png' },
    { id: 8, name: 'Company 8', logo: '/st-images/companies/8.webp' },
  ]

  useEffect(() => {
    // Duplicate logos for seamless infinite scroll
    setLogos([...companyLogos, ...companyLogos])
  }, [])

  return (
    <FullContainer className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Container className="px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses that trust our platform to build and scale their online presence
          </p>
        </div>
        
        {/* Modern Slider Container with Gradient Overlays */}
        <div className="relative overflow-hidden">
          {/* Left Gradient Overlay */}
          <div className="absolute left-0 top-0 w-5 md:w-16 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Right Gradient Overlay */}
          <div className="absolute right-0 top-0 w-5 md:w-16 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Logo Slider Container */}
          <div className="flex animate-scroll-smooth min-h-[100px] md:min-h-[250px]">
            {logos.map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="flex-shrink-0 mx-2 md:mx-4 flex items-center justify-center group"
             
              >
                <div className="bg-gray-400 backdrop-blur-sm rounded-2xl p-3 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out border border-white/20 hover:border-blue-200/50 hover:scale-105 group-hover:bg-gray-100">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-6 md:h-10 lg:h-14 w-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                    onError={(e) => {
                      // Fallback for logos that might not load
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-smooth {
          animation: scroll-smooth 40s linear infinite;
          will-change: transform;
        }
        
        .animate-scroll-smooth:hover {
          animation-play-state: paused;
        }
        
        /* Enhanced responsive adjustments */
        @media (max-width: 768px) {
          .animate-scroll-smooth {
            animation-duration: 25s;
          }
        }
        
        @media (max-width: 480px) {
          .animate-scroll-smooth {
            animation-duration: 20s;
          }
        }
        
        /* Smooth scrolling for better performance */
        * {
          scroll-behavior: smooth;
        }
        
        /* Optimize animations for better performance */
        .animate-scroll-smooth {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </FullContainer>
  )
}
