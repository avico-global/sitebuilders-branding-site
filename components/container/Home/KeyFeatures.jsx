import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading1 from '../../ui/Heading1'
import { Zap, Shield, Palette, Globe, ArrowRight } from 'lucide-react'

export default function KeyFeatures() {
    const features = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Lightning Fast",
            description: "Build and deploy websites in minutes, not hours. Our optimized platform ensures your sites load instantly and perform exceptionally.",
            color: "text-primary"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Enterprise Security",
            description: "Bank-level security with SSL certificates, DDoS protection, and regular backups. Your data and sites are always protected.",
            color: "text-primary"
        },
        {
            icon: <Palette className="w-6 h-6" />,
            title: "No-Code Design",
            description: "Create stunning websites without writing a single line of code. Drag, drop, and customize with our intuitive visual editor.",
            color: "text-primary"
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Global CDN",
            description: "Lightning-fast loading worldwide with our global content delivery network. Your sites perform optimally for visitors everywhere.",
            color: "text-primary"
        }
    ]

    return (
        <FullContainer className='bg-white py-20'>
            <Container>
                <div className='w-full flex flex-col items-center justify-center mb-16'>
                    <h3 className='text-gray-500 tracking-wider uppercase text-sm font-semibold mb-6'>Why Choose SiteBuilderz</h3>
                    
                    <Heading1 className='!text-center mb-8 text-gray-900'>
                        Built for Speed, <br />
                        <span className="text-primary">
                            Designed for Success
                        </span>
                    </Heading1>
                    
                    <p className='text-lg text-gray-600 text-center max-w-[800px] leading-relaxed'>
                        Experience the perfect blend of power and simplicity. Our platform combines cutting-edge technology with intuitive design to deliver exceptional results.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className='group'
                        >
                            <div className='bg-white border border-gray-200 rounded-lg p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300'>
                                <div className={`mb-6 p-3 rounded-lg bg-gray-50 w-fit group-hover:bg-primary/5 transition-colors duration-300`}>
                                    <div className={feature.color}>
                                        {feature.icon}
                                    </div>
                                </div>
                                
                                <h3 className='text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300'>
                                    {feature.title}
                                </h3>
                                <p className='text-gray-600 leading-relaxed text-sm'>
                                    {feature.description}
                                </p>
                                
                                <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                                    <span className="text-sm font-medium text-primary">
                                        Learn more
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-primary" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col items-center mt-16'>
                    <button className="bg-primary hover:bg-primary/90 transition-colors duration-300 text-white text-base py-4 px-8 rounded-lg font-semibold cursor-pointer">
                        Start Building Today
                    </button>
                    
                    <p className="text-gray-500 text-sm mt-4">
                        Join thousands of successful businesses
                    </p>
                </div>
            </Container>
        </FullContainer>
    )
}
