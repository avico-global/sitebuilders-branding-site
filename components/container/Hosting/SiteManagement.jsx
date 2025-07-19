import React from 'react'
import FullContainer from '../../../components/common/FullContainer'
import Container from '../../../components/common/Container'
import Image from 'next/image'
import Heading2 from '../../ui/Heading2';

export default function SiteManagement() {
    const features = [
        {
          icon: "/st-images/hosting/s (1).svg",
          title: "Backups and versioning",
          description: "Preview and restore your site from ongoing, automatic backups — or create save points to mark progress and track changes."
        },
        {
          icon: "/st-images/hosting/s (2).svg",
          title: "Staging domains",
          description: "Stage your site for testing and approval before hitting publish — and customize them (or make them private) with Webflow Enterprise."
        },
        {
          icon: "/st-images/hosting/s (3).svg",
          title: "Password protection",
          description: "Password protect individual pages — or your entire website — to protect in-progress work or restrict access."
        },
        {
          icon: "/st-images/hosting/s (4).svg",
          title: "Branching",
          description: "Safely stage page changes without affecting your live site — then merge your page branch onto your site for seamless updates."
        },
        {
          icon: "/st-images/hosting/s (5).svg",
          title: "Localization",
          description: "Build, customize, and deliver fully localized sites within Webflow — and maintain domain authority with hosted subdirectories (like .com/es/)."
        },
        {
          icon: "/st-images/hosting/s (6).svg",
          title: "Custom Security Headers",
          description: "Protect your site visitors from man-in-the-middle (MitM) attacks when you host with Webflow Enterprise."
        }
      ];

    return (
        <div className="bg-white text-black py-20">
            <FullContainer>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-end justify-end mb-16">
                        <Heading2 className="mb-6">Seamless site management</Heading2>
                        <p className="text-lg md:text-2xl max-w-3xl text-black h-fit">
                            Webflow's enterprise-grade hosting securely processes tens of billions of page views a month.
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
                                <h3 className="text-xl font-bold mb-2 lg:mb-4 text-black">{feature.title}</h3>
                                <p className="text-black text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </FullContainer>
        </div>
    )
}