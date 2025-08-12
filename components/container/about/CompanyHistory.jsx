import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading2 from '../../ui/Heading2'
import Paragraph1 from '../../ui/Paragraph1'
import { ClockIcon } from 'lucide-react'

const CompanyHistory = () => {
  const timelineEvents = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Founded with a vision to make professional web development accessible to everyone."
    },
    {
      year: "2019",
      title: "First Launch",
      description: "Released our first website builder with 50+ templates and basic CMS functionality."
    },
    {
      year: "2020",
      title: "AI Integration",
      description: "Introduced AI-powered design suggestions and automated optimization features."
    },
    {
      year: "2021",
      title: "Enterprise Launch",
      description: "Expanded to serve enterprise clients with advanced collaboration and security features."
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Reached 1M+ users worldwide and launched localization features for 50+ languages."
    },
    {
      year: "2023",
      title: "Future Forward",
      description: "Continuing to innovate with advanced analytics, AI personalization, and seamless integrations."
    }
  ]

  return (
    <FullContainer className="py-20">
      <Container>
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <ClockIcon className="w-8 h-8 text-[#E24E28]" />
            <h3 className="text-gray-500 tracking-2 uppercase">Our Journey</h3>
          </div>
          <Heading2 className="mb-6">
            From startup to <br />
            industry leader
          </Heading2>
          <Paragraph1 className="text-gray-700 max-w-2xl mx-auto">
            Discover the milestones that shaped Sitebuilderz into the platform 
            that powers millions of websites worldwide.
          </Paragraph1>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#E24E28] rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-[#E24E28] font-bold text-lg mb-2">{event.year}</div>
                    <h4 className="text-xl font-semibold mb-3">{event.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </FullContainer>
  )
}

export default CompanyHistory 