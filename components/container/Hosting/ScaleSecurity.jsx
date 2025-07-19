import React from 'react'
import FullContainer from '../../../components/common/FullContainer'
import Container from '../../../components/common/Container'
import Image from 'next/image'
import Heading2 from '../../ui/Heading2';

export default function ScaleSecurity() {
    const features = [
        {
            icon: "/st-images/hosting/s (1).svg",
            title: "Zero maintenance",
            description: "No updates to run, packages to install, or capacity planning. Just publish your site and let us take care of the rest."
        },
        {
            icon: "/st-images/hosting/s (2).svg",
            title: "Traffic-surge ready",
            description: "Webflow is equipped to handle high traffic volumes and can scale alongside growing site traffic."
        },
        {
            icon: "/st-images/hosting/s (3).svg",
            title: "Image optimization and compression",
            description: "Responsive images come with every plan, and we offer easy conversion to WebP and AVIF formats for even more streamlined performance."
        },
        {
            icon: "/st-images/hosting/s (4).svg",
            title: "SSL/TLS comes free",
            description: "Every Site plan automatically includes SSL and TLS. This means improved SEO for your site and no more security warnings for your customers."
        },
        {
            icon: "/st-images/hosting/s (5).svg",
            title: "Global DDoS & Bot protection comes free",
            description: "Powered by our global CDN provider, our hosting network offers built-in protection from Distributed Denial-of-Service (DDoS) attacks and uses advanced Bot protection to keep your site safe."
        },
        {
            icon: "/st-images/hosting/s (6).svg",
            title: "Automatic form spam filtering comes free",
            description: "No more manual spam cleanup — Webflow's automated system filters form responses for you."
        },
        {
            icon: "/st-images/hosting/s (3).svg",
            title: "SSO included for Enterprise",
            description: "Webflow Enterprise customers enjoy secure and centralized access management using Single Sign-On (SSO), ensuring compliance with security policies."
        },
        {
            icon: "/st-images/hosting/s (4).svg",
            title: "Vulnerability scanning",
            description: "We continuously monitor for new security vulnerabilities and deploy updates automatically to stay ahead of threats."
        },
        {
            icon: "/st-images/hosting/s (5).svg",
            title: "Security compliant",
            description: "We take security seriously and map our security program to industry standards. Webflow is also SOC 2 Type II, CCPA, and GDPR compliant — to name a few."
        }
    ];

    return (
        <div className="bg-black text-white py-20">
            <FullContainer>
                <Container>
                    <div className="text-start mb-16">
                        <Heading2 className="mb-6">Scale securely</Heading2>
                        <p className="text-lg md:text-2xl max-w-3xl text-gray-200 mb-12 w-full">
                            Webflow's enterprise-grade hosting securely processes tens of billions of page views a month.
                        </p>
                        {/* Globe representation */}
                        <div className="relative flex justify-center mb-8 rounded-lg overflow-hidden max-w-5xl mx-auto">
                            <video src="/videos/hosting.mp4" autoPlay loop muted playsInline className="w-full h-full scale-175 object-cover" />
                        </div>

                        <p className="text-lg text-gray-300 text-center">
                            Reach 95% of the world in less than 50 milliseconds with Webflow hosting.
                        </p>
                    </div>

                    {/* Feature cards - 3x3 grid */}
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        {features.map((feature, index) => (
                            <div key={index} className="text-left items-left justify-start  rounded-lg">
                                <div className="h-16 flex items-left justify-start w-full">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={32}
                                        height={32}
                                        className="w-12 h-12 md:w-16 md:h-16"
                                    />
                                </div>
                                <h3 className="text-xl font-bold mb-2 lg:mb-4 text-white">{feature.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </FullContainer>
        </div>
    )
}