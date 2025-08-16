import React, { useState, useEffect, useRef } from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading2 from '../../ui/Heading2'
import Paragraph2 from '../../ui/Paragraph2'
import Button from '../../ui/Button'
import Image from 'next/image'

export default function DetailedFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);
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

  const features = [
    {
      id: 'visual-editor',
      title: 'Visual Editor',
      subtitle: 'Design Without Limits',
      description: 'Create stunning websites with our intuitive drag-and-drop editor. No coding required - just drag, drop, and customize. Perfect for designers, marketers, and anyone who wants to bring their vision to life.',
      benefits: [
        'Real-time preview as you design',
        'Responsive design out of the box',
        'Custom animations and interactions',
        'Built-in design system components'
      ],
      image: '/st-images/cms/hero1.avif',
      video: '/videos/design-build.mp4',
      stats: {
        value: '10x',
        label: 'Faster than traditional development'
      }
    },
    {
      id: 'cms',
      title: 'Content Management',
      subtitle: 'Manage Content at Scale',
      description: 'Our visual-first CMS empowers content teams to update websites without developer involvement. Create dynamic content collections, manage multiple languages, and publish with confidence.',
      benefits: [
        'Visual content editing on the design canvas',
        'Up to 20 CMS collections with 50 items',
        'Multi-language support and localization',
        'Content versioning and rollback'
      ],
      image: '/st-images/cms/cmsdesign2.avif',
      video: '/videos/design-build1.1.mp4',
      stats: {
        value: '95%',
        label: 'Reduction in content update time'
      }
    },
    {
      id: 'hosting',
      title: 'Enterprise Hosting',
      subtitle: 'Scale Without Limits',
      description: 'Built-in hosting that scales with your business. Automatic backups, global CDN, and enterprise-grade security ensure your sites are always fast, secure, and reliable.',
      benefits: [
        'Global CDN with 200+ edge locations',
        'Automatic SSL certificates and backups',
        '99.9% uptime guarantee',
        'DDoS protection and security headers'
      ],
      image: '/st-images/hosting/1.avif',
      video: '/videos/hosting.mp4',
      stats: {
        value: '99.9%',
        label: 'Uptime guarantee'
      }
    },
    {
      id: 'analytics',
      title: 'Analytics & Optimization',
      subtitle: 'Data-Driven Decisions',
      description: 'Understand your website performance with built-in analytics. A/B test your designs, optimize for conversions, and make data-driven decisions to improve your results.',
      benefits: [
        'Real-time visitor behavior insights',
        'A/B testing and personalization',
        'Conversion tracking and optimization',
        'SEO performance monitoring'
      ],
      image: '/st-images/bs1.avif',
      video: '/videos/design-build1.2.mp4',
      stats: {
        value: '40%',
        label: 'Average conversion improvement'
      }
    },
    {
      id: 'security',
      title: 'Enterprise Security',
      subtitle: 'Bank-Level Protection',
      description: 'Your data and websites are protected with enterprise-grade security. From SSL certificates to advanced threat protection, we ensure your digital assets stay safe.',
      benefits: [
        'Automatic SSL certificates',
        'Advanced threat detection',
        'GDPR and SOC 2 compliance',
        'Role-based access controls'
      ],
      image: '/st-images/hosting/Encryption.svg',
      video: '/videos/design-build1.3.mp4',
      stats: {
        value: '100%',
        label: 'SSL certificate coverage'
      }
    },
    {
      id: 'collaboration',
      title: 'Team Collaboration',
      subtitle: 'Work Better Together',
      description: 'Collaborate seamlessly with your team. Advanced roles and permissions, design approvals, and publishing workflows ensure everyone stays in sync.',
      benefits: [
        'Role-based permissions and access',
        'Design approval workflows',
        'Real-time collaboration tools',
        'Version control and branching'
      ],
      image: '/st-images/bs2.avif',
      video: '/videos/scale-collaboration.mp4',
      stats: {
        value: '3x',
        label: 'Faster team collaboration'
      }
    }
  ];

  return (
    <div id="detailed-features" ref={sectionRef} className="py-20 bg-white">
      <FullContainer>
        <Container>
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block bg-gradient-to-r from-primary/10 to-primary/5 text-primary font-semibold text-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
              ✨ Detailed Feature Breakdown
            </span>
            <Heading2 className="mb-6">
              Powerful Features That Solve Real Problems
            </Heading2>
            <Paragraph2 className="max-w-3xl mx-auto">
              Each feature is designed to address specific challenges faced by modern businesses. 
              See how SiteBuilderz transforms your workflow and delivers exceptional results.
            </Paragraph2>
          </div>

          {/* Feature Navigation */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>

          {/* Feature Details */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  activeFeature === index ? 'block' : 'hidden'
                }`}
              >
                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                      {feature.subtitle}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-lg">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">
                        {feature.stats.value}
                      </div>
                      <div className="text-gray-600">
                        {feature.stats.label}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button href="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                      Try {feature.title}
                    </Button>
                    <Button href="#" className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                      Learn More
                    </Button>
                  </div>
                </div>

                {/* Media */}
                <div className="relative">
                  <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                    {feature.video ? (
                      <video
                        src={feature.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-96 object-cover"
                      />
                    ) : (
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={600}
                        height={400}
                        className="w-full h-96 object-cover"
                      />
                    )}
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </FullContainer>
    </div>
  )
} 