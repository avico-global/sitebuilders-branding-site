import React from 'react'
import Layout from '../../components/common/Layout'
import CmsHero from '../../components/container/Cms/CmsHero'
import Process from '../../components/container/Cms/Process'
import ChangeImgOnScroll from '../../components/ui/ChangeImgOnScroll'
import AllFeatures from '../../components/container/AllFeatures'
import Testimonial from '../../components/container/Cms/Testimonial'
import Enterprise from '../../components/container/Cms/Enterprise'
import ExploreResources from '../../components/container/ExploreResources'

export default function cms() {
  const data = [
    {
        title: "Create and edit CMS content in context",
        desc: "Edit CMS content directly on Sitebuilderz’s visual canvas and see changes rendered in real time — as well as quickly spin up new CMS landing pages in Sitebuilderz.",
        img: "/st-images/cms/cmsdesing1.avif"
    },
    {
        title: "Preview content, then publish instantly",
        desc: "Scale securely with reliable, fast hosting, managed for you — plus launch with peace of mind thanks to Sitebuilderz's robust security and compliance features, so you can grow with uninterrupted momentum.",
        img: "/st-images/cms/cmsdesign2.avif"
    },
    {
        title: " Collaborate on content",
        desc: "From commenting to edit mode and beyond, collaborate on content efficiently without anyone becoming a bottleneck — or unintended changes going live.",
        img: "/st-images/cms/cmsdesign3.avif"
    },
    {
        title: " Maximize traffic with SEO",
        desc: "Easily manage SEO elements directly within the CMS — from metadata to image alt text to URLs — to maximize your content’s organic visibility.",
        img: "/st-images/cms/cmsdesign4.avif"
    },
]
  return (
    <Layout>
        <CmsHero />
        <Process id="cmsprocess"/>
        <ChangeImgOnScroll data={data} />
        <AllFeatures />
        <Testimonial />
        <Enterprise />
        <ExploreResources />
    </Layout>
  )
}
