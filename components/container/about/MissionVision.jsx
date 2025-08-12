import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading2 from '../../ui/Heading2'
import Paragraph2 from '../../ui/Paragraph2'
import { TargetIcon } from 'lucide-react'

const MissionVision = () => {
  return (
    <FullContainer className="py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <TargetIcon className="w-8 h-8 text-[#E24E28]" />
              <h3 className="text-gray-500 tracking-2 uppercase">Our Mission</h3>
            </div>
            <Heading2 className="mb-6">
              Empowering creators to build <br />
              websites that convert
            </Heading2>
            <Paragraph2 className="text-gray-700 mb-6">
              We believe that every business, creator, and organization deserves access to professional 
              web development tools. Our platform combines cutting-edge technology with intuitive design 
              to make web creation accessible, efficient, and results-driven.
            </Paragraph2>
            <Paragraph2 className="text-gray-700">
              From solo entrepreneurs to enterprise teams, we provide the tools, templates, and support 
              needed to turn ideas into successful online experiences that drive real business results.
            </Paragraph2>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-[#E24E28] to-[#E86F50] p-8 rounded-lg text-white">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To become the world's most trusted platform for web creation, where anyone can build 
                websites that not only look great but also perform exceptionally in today's competitive 
                digital landscape.
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E24E28]">1M+</div>
                <div className="text-sm text-gray-600">Websites Created</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
}

export default MissionVision 