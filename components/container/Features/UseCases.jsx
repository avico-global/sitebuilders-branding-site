import React, { useState, useEffect, useRef } from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading2 from '../../ui/Heading2'
import Paragraph2 from '../../ui/Paragraph2'
import Button from '../../ui/Button'
import Image from 'next/image'

export default function UseCases() {
  const [activeCategory, setActiveCategory] = useState('industries');
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

  const industries = [
    {
      name: 'E-commerce',
      icon: '🛒',
      description: 'Build high-converting online stores with integrated payment processing, inventory management, and customer analytics.',
      features: ['Shopping cart integration', 'Payment gateway setup', 'Inventory management', 'Customer analytics'],
      image: '/st-images/bs3.avif',
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'Create HIPAA-compliant websites for medical practices, patient portals, and healthcare information.',
      features: ['HIPAA compliance', 'Patient portals', 'Appointment booking', 'Secure data handling'],
      image: '/st-images/bs4.avif',
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'Education',
      icon: '🎓',
      description: 'Develop learning platforms, school websites, and educational content management systems.',
      features: ['Learning management', 'Student portals', 'Course catalogs', 'Progress tracking'],
      image: '/st-images/bs5.avif',
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Real Estate',
      icon: '🏠',
      description: 'Build property listing websites with advanced search, virtual tours, and lead generation tools.',
      features: ['Property listings', 'Advanced search', 'Virtual tours', 'Lead capture'],
      image: '/st-images/bs6.avif',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      name: 'Restaurants',
      icon: '🍽️',
      description: 'Create restaurant websites with online ordering, reservations, and menu management.',
      features: ['Online ordering', 'Reservation system', 'Menu management', 'Customer reviews'],
      image: '/st-images/bs7.avif',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Non-Profit',
      icon: '🤝',
      description: 'Develop donation platforms, volunteer management systems, and awareness campaign websites.',
      features: ['Donation processing', 'Volunteer management', 'Event organization', 'Impact tracking'],
      image: '/st-images/bs1.avif',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const roles = [
    {
      name: 'Designers',
      icon: '🎨',
      description: 'Bring your creative vision to life with our visual design tools and component library.',
      benefits: ['Visual design tools', 'Component library', 'Design system', 'Prototyping'],
      image: '/st-images/cms/cmsdesign3.avif',
      color: 'from-pink-500 to-rose-600'
    },
    {
      name: 'Developers',
      icon: '💻',
      description: 'Extend functionality with custom code, APIs, and integrations while maintaining design flexibility.',
      benefits: ['Custom code injection', 'API integrations', 'Webhook support', 'Version control'],
      image: '/st-images/cms/cmsdesign4.avif',
      color: 'from-gray-500 to-slate-600'
    },
    {
      name: 'Marketers',
      icon: '📈',
      description: 'Optimize conversions with built-in analytics, A/B testing, and SEO tools.',
      benefits: ['Conversion tracking', 'A/B testing', 'SEO optimization', 'Lead generation'],
      image: '/st-images/hosting/2.avif',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Content Teams',
      icon: '✍️',
      description: 'Manage content efficiently with our visual CMS and collaborative editing tools.',
      benefits: ['Visual CMS', 'Content workflows', 'Multi-language support', 'Content scheduling'],
      image: '/st-images/hosting/3.avif',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Agencies',
      icon: '🏢',
      description: 'Scale your agency with white-label solutions, client management, and team collaboration.',
      benefits: ['White-label options', 'Client management', 'Team collaboration', 'Project templates'],
      image: '/st-images/hosting/4.avif',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Entrepreneurs',
      icon: '🚀',
      description: 'Launch your business online quickly with templates, hosting, and growth tools.',
      benefits: ['Quick launch', 'Business templates', 'Growth analytics', 'E-commerce tools'],
      image: '/st-images/hosting/5.avif',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <FullContainer>
        <Container>
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block bg-gradient-to-r from-primary/10 to-primary/5 text-primary font-semibold text-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
              🎯 Use Cases & Industries
            </span>
            <Heading2 className="mb-6">
              Built for Every Industry and Role
            </Heading2>
            <Paragraph2 className="max-w-3xl mx-auto">
              Whether you're a designer, developer, marketer, or business owner, 
              SiteBuilderz adapts to your needs and helps you achieve your goals.
            </Paragraph2>
          </div>

          {/* Category Tabs */}
          <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setActiveCategory('industries')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeCategory === 'industries'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Industries
              </button>
              <button
                onClick={() => setActiveCategory('roles')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeCategory === 'roles'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Job Roles
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {activeCategory === 'industries' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, index) => (
                  <div
                    key={industry.name}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className={`h-48 bg-gradient-to-r ${industry.color} relative overflow-hidden`}>
                      <Image
                        src={industry.image}
                        alt={industry.name}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl">{industry.icon}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                        <ul className="space-y-1">
                          {industry.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button href="/contact" className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                        Get Started
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeCategory === 'roles' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {roles.map((role, index) => (
                  <div
                    key={role.name}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className={`h-48 bg-gradient-to-r ${role.color} relative overflow-hidden`}>
                      <Image
                        src={role.image}
                        alt={role.name}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl">{role.icon}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{role.name}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{role.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {role.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button href="/contact" className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Workflow?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join thousands of teams who have already discovered how SiteBuilderz can accelerate their projects and deliver exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Start Free Trial
                </Button>
                <Button href="#" className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </FullContainer>
    </div>
  )
} 