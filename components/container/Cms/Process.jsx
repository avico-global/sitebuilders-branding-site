import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading2 from '../../ui/Heading2'
import Image from 'next/image'

export default function Process({ id }) {
    const processData = {
        title: "For all the teams that bring your website to life",
        subtitle: "Webflow's visual-first and composable CMS is made for everyone who has a hand in crafting digital experiences — so you can ship high-impact work, faster.",
        teams: [
            {
                id: 1,
                title: "Marketers",
                description: "Write, edit, and update content directly in Webflow, then publish with a click — no dev help needed.",
                icon: "/st-images/cms/process1.svg",
                alt: "Marketers icon"
            },
            {
                id: 2,
                title: "Designers",
                description: "Design around real content, without writing code or managing complex databases.",
                icon: "/st-images/cms/process2.svg",
                alt: "Designers icon"
            },
            {
                id: 3,
                title: "Developers",
                description: "Programmatically serve content in and out of Webflow and connect with your best-of-breed tech stack.",
                icon: "/st-images/cms/process3.svg",
                alt: "Developers icon"
            }
        ]
    }

    return (
        <div id={id}>
            <FullContainer className=" lg:py-9">
                <Container className="mx-auto text-start py-24 lg:py-32">
                    {/* Main Headline */}
                    <Heading2 className="text-5xl font-bold text-black mb-6 max-w-3xl">
                        {processData.title}
                    </Heading2>
                    
                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl">
                        {processData.subtitle}
                    </p>
                    
                    {/* Three Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {processData.teams.map((team) => (
                            <div key={team.id} className="flex flex-col items-start">
                                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                                    <Image 
                                        src={team.icon} 
                                        alt={team.alt} 
                                        width={64} 
                                        height={64}
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-4 lg:mb-6">{team.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {team.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </FullContainer>
        </div>
    )
}
