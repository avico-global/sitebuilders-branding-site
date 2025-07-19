import React from 'react'
import ProcessSection from '../../ui/VIdeoChanger'

const EditAndOptimize = ({ id }) => {
    const data = [
        {
            title: "Drive real business results, fast",
            desc: "Deliver web experiences that get results with built-in tools for analytics, A/B testing, AI-driven personalization, and SEO.",
            buttonText: "Get started — it's free",
            buttonLink: "#",
            videoSrc: "/videos/design-build.mp4",
            ebook: {
                show: true,
                title: "Continuously improve your website with Al-powered optimization",
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
        title: "Understand site performance",
          desc: "Sitebuilderz Analyze puts a native, unified view of visitor behavior into the hands of designers and marketers so they can make data-driven site improvements.",
        },
        {
          title: "Iterate, test, repeat",
          desc: "Sitebuilderz Optimize gives marketers the tools to increase conversions, including native A/B testing and Al-powered personalization.",
        },
        {
          title: "Keep your SEO controls under control",
          desc: "Improve your SEO and discoverability with fine-tuned controls, high-performance hosting, and flexible content management tools.",
        },  
      ]
  return (
    <div id={id}>
      <ProcessSection theme="light" data={data} animationData={animationData} />
    </div>
  )
}

export default EditAndOptimize 