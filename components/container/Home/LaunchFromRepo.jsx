import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import ProcessSection from '../../ui/VIdeoChanger'
import VideoSlider from '../../ui/VideoSlider'

const LaunchFromRepo = ({ id }) => {
    const data = [
        {
            title: "Launch From Repo",
            desc: "Deploy your website directly from a Git repository. Just connect your repo, fill in details, and launch your site instantly with a live staging link.",
            buttonText: "Get started — it's free",
            buttonLink: "#",
            videoSrc: "/videos/design-build.mp4",
            ebook: {
                show: true,
                title: "The power of building websites in a Website Experience Platform",
                link: "#"
            },
            videos: [
                { src: "/videos/steps-videos/1.31.mov" },
                { src: "/videos/steps-videos/1.32.mov" },
                { src: "/videos/steps-videos/1.33.mov" },
                { src: "/videos/steps-videos/1.34.mov" },
            ]
        }
    ]
    const animationData = [
        {
            title: "Select Merchant & Go to Projects",
            desc: "Pick your merchant to keep things organized. Then go to the Projects section from your dashboard to get started.",
        },
        {
            title: "Add a New Project”",
            desc: "Click Add Project to begin. This will open a simple form to help you create and configure a new project quickly.",
        },
        {
            title: "Fill Required Details",
            desc: "Enter your Git repository URL and fill out all necessary fields like project name and description to proceed with the setup.",
        },
        {
            title: "Launch Your Site",
            desc: "After setup, connect your domain or use the provided Staging URL to preview and test your live site instantly.",
        },
    ]
    return (
        <div id={id}>
            <FullContainer>
                <ProcessSection theme="light" data={data} animationData={animationData} />
                <VideoSlider />
            </FullContainer>
        </div>
    )
}

export default LaunchFromRepo