import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading2 from '../../ui/Heading2'
import Paragraph1 from '../../ui/Paragraph1'
import Image from 'next/image'
import { UsersIcon } from 'lucide-react'

const TeamIntroduction = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former Google engineer with 15+ years in web development. Passionate about democratizing web creation.",
      image: "/st-images/bs1.avif"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Expert in scalable architecture and AI-driven solutions. Led engineering teams at Facebook and Twitter.",
      image: "/st-images/bs2.avif"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Award-winning designer focused on creating intuitive user experiences that convert visitors into customers.",
      image: "/st-images/bs3.avif"
    },
    {
      name: "David Kim",
      role: "VP of Product",
      bio: "Product strategist with deep expertise in SaaS platforms and user growth optimization.",
      image: "/st-images/bs4.avif"
    }
  ]

  return (
    <FullContainer className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <UsersIcon className="w-8 h-8 text-[#E24E28]" />
            <h3 className="text-gray-500 tracking-2 uppercase">Meet Our Team</h3>
          </div>
          <Heading2 className="mb-6">
            The minds behind <br />
            Sitebuilderz
          </Heading2>
          <Paragraph1 className="text-gray-700 max-w-2xl mx-auto">
            Our diverse team brings together expertise from leading tech companies, 
            united by a shared passion for making web creation accessible to everyone.
          </Paragraph1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-center mb-2">{member.name}</h4>
              <p className="text-[#E24E28] text-center mb-4 font-medium">{member.role}</p>
              <p className="text-gray-600 text-sm text-center leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  )
}

export default TeamIntroduction 