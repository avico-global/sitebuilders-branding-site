import React, { useState, useEffect, useRef } from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading1 from '../../ui/Heading1'
import Paragraph1 from '../../ui/Paragraph1'
import Button from '../../ui/Button'
import Image from 'next/image'

export default function FeaturesCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ctaOptions = [
    {
      title: 'Start Free Trial',
      description: 'Try SiteBuilderz free for 14 days. No credit card required.',
      icon: '🚀',
      href: '/contact',
      primary: true,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Schedule Demo',
      description: 'Get a personalized walkthrough of our platform with our team.',
      icon: '📅',
      href: '/contact',
      primary: false,
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'View Templates',
      description: 'Browse our collection of professional website templates.',
      icon: '🎨',
      href: '/templates',
      primary: false,
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Talk to Sales',
      description: 'Discuss enterprise solutions and custom requirements.',
      icon: '💬',
      href: '/contact',
      primary: false,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const testimonials = [
    {
      quote: "SiteBuilderz transformed our web development process. We're now launching sites 3x faster.",
      author: "Sarah Johnson",
      role: "Creative Director",
      company: "Design Studio Co.",
      avatar: "/st-images/bs1.avif"
    },
    {
      quote: "The visual editor is incredible. Our content team can update the website without any technical knowledge.",
      author: "Mike Chen",
      role: "Marketing Manager",
      company: "Tech Startup Inc.",
      avatar: "/st-images/bs2.avif"
    },
    {
      quote: "Enterprise-grade features with the simplicity of a no-code platform. Perfect for our agency.",
      author: "Emily Rodriguez",
      role: "Agency Owner",
      company: "Digital Solutions",
      avatar: "/st-images/bs3.avif"
    }
  ];

  return (
    <div ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
      </div>

      <FullContainer>
        <Container className="relative z-10">
          {/* Main CTA Section */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <span className="inline-block bg-white/10 text-white font-semibold text-sm px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
                🎉 Ready to Get Started?
              </span>
            </div>
            <Heading1 className="text-white mb-6">
              Choose Your Path to Success
            </Heading1>
            <Paragraph1 className="text-white/80 max-w-3xl mx-auto mb-8">
              Whether you want to start building immediately or need guidance from our experts, 
              we have the perfect option for you. Join thousands of successful teams using SiteBuilderz.
            </Paragraph1>
          </div>

          {/* CTA Options Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {ctaOptions.map((option, index) => (
              <div
                key={option.title}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer ${
                  option.primary ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center mb-4 text-2xl`}>
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                <p className="text-white/70 text-sm mb-4">{option.description}</p>
                <Button 
                  href={option.href}
                  className={`w-full ${
                    option.primary 
                      ? 'bg-primary hover:bg-primary/90 text-white' 
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
                  } py-3 rounded-lg font-semibold transition-all duration-300`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Trusted by Industry Leaders</h3>
              <p className="text-white/70">See what our customers are saying about SiteBuilderz</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.author}</h4>
                      <p className="text-white/70 text-sm">{testimonial.role}</p>
                      <p className="text-white/60 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-white/90 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">10,000+</div>
                <div className="text-white/70 text-sm">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">50,000+</div>
                <div className="text-white/70 text-sm">Websites Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-white/70 text-sm">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-white/70 text-sm">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Start Building Your Success Story Today
              </h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Join the thousands of teams who have already transformed their web development workflow with SiteBuilderz. 
                Your journey to creating exceptional websites starts now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </Button>
                <Button href="/contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300">
                  Contact Sales
                </Button>
              </div>
              <p className="text-white/60 text-sm mt-4">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </Container>
      </FullContainer>
    </div>
  )
} 