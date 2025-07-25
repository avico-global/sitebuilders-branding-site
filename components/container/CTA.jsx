import React from 'react'
import Container from '../common/Container'
import FullContainer from '../common/FullContainer'
import Heading1 from '../ui/Heading1'
import Button from '../ui/Button'

const CTA = () => {
  return (
    <FullContainer className="bg-black text-white min-h-screen flex items-center justify-center font-sans">
      <Container spacing="default" className="flex w-ful  gap-5 md:gap-16 lg:gap-24 flex-col md:flex-row justify-between">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-start sm:min-w-[400px]">
          <Heading1 className="mb-8">
            Try it for<br />free
          </Heading1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button>
              Get started — it’s free
            </Button>
            <Button className="bg-neutral-800 hover:bg-neutral-700">
              <span className="inline-block w-5 h-5 mr-2 relative">
                <span className="absolute left-1.5 top-0.5 w-0 h-0 border-y-6 border-y-transparent border-l-8 border-l-white"></span>
              </span>
              Watch demo
            </Button>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex flex-col justify-center gap-8 lg:max-w-[475px]">
          <div className="text-[27px] font-normal mb-8">
            Try Sitebuilderz for as long as you like with our free Starter plan. Purchase a paid Site plan to publish, host, and unlock additional features.
          </div>
          <div className="border-t border-neutral-800 pt-10 mb-4">
            <div className="font-bold text-2xl mb-4">Contact sales</div>
            <div className="text-base mb-4">
              Interested in Sitebuilderz Enterprise? Get in touch with our sales team to receive a free personalized demo.
            </div>
            <a href="#" className="text-white font-semibold text-base">Contact sales →</a>
          </div>
          <div className="border-t border-neutral-800 pt-10">
            <div className="font-bold text-2xl mb-4">Hire a Certified Partner</div>
            <div className="text-base mb-4">
              Extend the power of your team by hiring a Certified Sitebuilderz Partner — we’ll match you with the best in the business.
            </div>
            <a href="#" className="text-white font-semibold text-base">Browse Partners →</a>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
}

export default CTA