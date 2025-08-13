import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading1 from '../../ui/Heading1'
import Paragraph1 from '../../ui/Paragraph1'

const ContactHero = () => {
  return (
    <FullContainer className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-[#E24E28] font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
          </div>
          <Heading1 className="mb-6 text-gray-900">
            Let's Build Something <br />
            <span className="text-[#E24E28]">Amazing Together</span>
          </Heading1>
          <Paragraph1 className="text-gray-600 max-w-2xl mx-auto">
            Whether you have questions about our platform, need technical support, 
            or want to explore partnership opportunities, we're here to help you succeed.
          </Paragraph1>
        </div>
      </Container>
    </FullContainer>
  )
}

export default ContactHero 