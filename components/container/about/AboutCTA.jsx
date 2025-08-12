import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading2 from '../../ui/Heading2'
import Paragraph1 from '../../ui/Paragraph1'
import Button from '../../ui/Button'
import { ArrowRightIcon } from 'lucide-react'

const AboutCTA = () => {
  return (
    <FullContainer className="py-20 bg-gradient-to-r from-[#E24E28] to-[#E86F50]">
      <Container>
        <div className="text-center text-white">
          <Heading2 className="mb-6 text-white">
            Ready to build your <br />
            next website?
          </Heading2>
          <Paragraph1 className="mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of creators who trust Sitebuilderz to bring their ideas to life. 
            Start building today with our powerful, intuitive platform.
          </Paragraph1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#E24E28] hover:bg-gray-100">
              <span>Start Building Free</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
            <Button className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#E24E28]">
              <span>Contact Sales</span>
            </Button>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
}

export default AboutCTA 