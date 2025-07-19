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
        title: "Manage content visually, publish anywhere",
        desc: "Sitebuilderz's visual-first, composable CMS is made for everyone who has a hand in crafting digital experiences — so you can ship high-impact content, faster.",
        buttonText: "Get started — it's free",
        buttonLink: "#",
        videoSrc: "/videos/design-build.mp4",
        ebook: {
            show: true,
            title: "how to manage your site content for scale",
            link: "#"
        },
        videos: [
          { src: "/videos/design-build1.1.mp4" },
          { src: "/videos/design-build1.2.mp4" },
          { src: "/videos/design-build1.3.mp4" },
          { src: "/videos/design-build1.4.mp4" },
        ]
    }
]
  const animationData = [
    {
    title: "PSeamlessly write, edit, and publish",
      desc: "Write, edit, and update content - or generate it with the help of Al- directly in Sitebuilderz, then publish with a click.",
    },
    {
      title: "Design with dynamic content",
      desc: "Easily create page layouts by adding the elements you want and pulling in content from the CMS. Plus create reusable templates for dynamic content - design the layout once and any new content will automatically follow it.",
    },
    {
      title: "Programmatically deliver content at scale",
      desc: "Programmatically serve content in and out of Sitebuilderz or connect with best-of-breed tools through Sitebuilderz's powerful CMS APIs.",
    },  
    {
      title: "Create fully localized experiences",
      desc: "From design to translation to best-in-class SEO, customize your site for a worldwide audience with a native, end-to-end solution.",
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
      <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 z-10"/>
      </Button>
    </FullContainer>
  )
} 