import React from 'react'
import ProcessSection from '../../ui/VIdeoChanger'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading1 from '../../ui/Heading1'
import Button from '../../ui/Button'
import { ArrowRightIcon } from 'lucide-react'

const BuildFastWithTemplates = ({ id }) => {
  const data = [
    {
      title: "Build Fast with Templates",
      desc: "Pick a template, customize it, and go live in minutes. Site Builderz makes website creation fast, easy, and code-free — perfect for quick launches.",
      buttonText: "Get started — it's free",
      buttonLink: "#",
      videoSrc: "/videos/design-build.mp4",
      ebook: {
        show: true,
        title: "how to manage your site content for scale",
        link: "#"
      },
      videos: [
        { src: "/videos/steps-videos/2.31.mov" },
        { src: "/videos/steps-videos/2.32.mov" },
        { src: "/videos/steps-videos/2.33.mov" },
        { src: "/videos/steps-videos/2.34.mov" }, 
      ]
    }
  ]
  const animationData = [
    {
      title: "Select Merchant & Go to Projects",
      desc: "Pick your merchant to keep things organized. Then go to the Projects section from your dashboard to get started.",
  },
  {
      title: " Add Project & Choose Template",
      desc: "Click Add Project, select the website type, fill in details, choose a template, and clone it to create your site effortlessly.",
  },
    {
      title: "Launch Your Site",
      desc: "Connect your custom domain or use the generated Staging URL to view your fully functional site in real-time.",
    },
    {
      title: "Customize Your Project",
      desc: "Open Manage Project to update text, images, and layouts. Personalize your site without touching a single line of code.",
    },
  ]
  return (
    <div id={id}>
      <ProcessSection theme="dark" data={data} animationData={animationData} />
      <PublishEditSection />
    </div>
  )
}

export default BuildFastWithTemplates

const PublishEditSection = () => {
  return (
    <FullContainer className='bg-black border-y border-gray-800 text-white !h-[400px] md:!h-[500px] lg:!h-[650px] overflow-hidden relative flex flex-col items-center justify-center px-4'>
      {/* Top Left */}
      <div className="absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%] aspect-square h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] p-[2px] sm:p-[3px] bg-gradient-to-r from-white via-[#E24E28] to-black rounded-full">
        <div className="w-full h-full bg-black rounded-full"></div>
      </div>
      {/* Top Right */}
      <div className="absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] aspect-square h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] p-[2px] sm:p-[3px] bg-gradient-to-l from-white via-[#E24E28] to-black rounded-full">
        <div className="w-full h-full bg-black rounded-full"></div>
      </div>
      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0 translate-x-[-50%] translate-y-[50%] aspect-square h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] p-[2px] sm:p-[3px] bg-gradient-to-r from-white via-[#E24E28] to-black rounded-full">
        <div className="w-full h-full bg-black rounded-full"></div>
      </div>
      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] aspect-square h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] p-[2px] sm:p-[3px] bg-gradient-to-l from-white via-[#E24E28] to-black rounded-full">
        <div className="w-full h-full bg-black rounded-full"></div>
      </div>
      {/* Glowing icon */}
      <div className="relative flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 z-10">
        <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-tr from-[#E24E28] via-[#E86F50] to-black rounded-full blur-xl lg:blur-2xl opacity-70" />
        <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-black rounded-full border-2 border-white">
          <span className="text-xl sm:text-2xl lg:text-3xl">✨</span>
        </div>
      </div>
      {/* Headline and description */}
      <Heading1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 lg:mb-8 z-10">AI at Sitebuilderz</Heading1>
      <p className="text-sm sm:text-base lg:text-lg text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mb-4 sm:mb-6 lg:mb-8 z-10 px-4">
        Elevate your site with AI embedded across the Sitebuilderz platform and extend its power with deep integrations with a growing ecosystem of AI-powered apps.
      </p>
      {/* Call to action */}
      <Button href="#" className="px-4 items-center sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 !bg-black !text-white font-semibold rounded-full shadow-lg hover:bg-gray-200 transition z-10 text-sm sm:text-base">
        Discover AI at Sitebuilderz
        <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 z-10" />
      </Button>
    </FullContainer>
  )
} 