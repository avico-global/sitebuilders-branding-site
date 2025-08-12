import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading1 from '../../ui/Heading1'
import Paragraph1 from '../../ui/Paragraph1'

const AboutHero = () => {
  return (
    <FullContainer className="bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-gray-500 tracking-2 uppercase mb-4">About Sitebuilderz</h3>
            <Heading1 className="mb-6">
              Building the Future of <br />
              Web Creation
            </Heading1>
            <Paragraph1 className="text-gray-700 max-w-2xl mx-auto">
              We're on a mission to democratize web development, making it possible for anyone to create 
              professional, high-performing websites without the complexity of traditional development.
            </Paragraph1>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
}

export default AboutHero 