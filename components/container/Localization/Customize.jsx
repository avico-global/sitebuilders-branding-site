import React from 'react'
import ImageChanger from '../../ui/ImageChanger'

const Customize = () => {
  const data = [
    {
      title: "Customize your locales",
      desc: "Rethink the web dev cycle with Sitebuilderz. Give your design and marketing teams the power to launch sophisticated sites quickly — so your dev team can focus on more complex work, not pixel-perfect revisions.",
      buttonText: "Get started — it's free",
      buttonLink: "#",
      videoSrc: "/videos/design-build.mp4",
      ebook: {
        show: true,
        title: "The power of building websites in a Website Experience Platform",
        link: "#"
      },
      images: [
        { src: "/st-images/localization/im1.avif" },
        { src: "/st-images/localization/im2.avif" },
        { src: "/st-images/localization/im3.avif" },
        { src: "/st-images/localization/im4.avif" },
      ]
    }
  ]
  const animationData = [
    {
      title: "Design without limits",
      desc: "Sitebuilderz puts the power of code into a visual canvas so every team can create stunning websites quickly — and extend the power of their work with custom code.",
    },
    {
      title: "Create complex, rich interactions",
      desc: "Design scroll-based and multi-step interactions and animations and easily work with GSAP, Spline, 3D, Lottie, and Rive — all without even thinking about code.",
    },
    {
      title: "Empower everyone to build on-brand sites",
      desc: "Custom templates, brand kits, and style systems keep everything consistent and scalable across teams.",
    },
    {
      title: "Create even faster with the Sitebuilderz AI Assistant",
      desc: "Accelerate layout, component generation, and content editing with AI tools.",
    },
  ]
  return (
    <ImageChanger
      data={data}
      animationData={animationData}
      theme="light"
    />
  )
}

export default Customize