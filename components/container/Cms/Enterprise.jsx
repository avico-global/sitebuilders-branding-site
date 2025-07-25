import React from 'react'
import Container from '../../common/Container';
import FullContainer from '../../common/FullContainer';

const features = [
    {
        icon: (
            <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19" stroke="#2563eb" strokeWidth="2" /><path d="M10 20h20M20 10v20" stroke="#fff" strokeWidth="2" /></svg>
        ),
        title: 'Reliable traffic management',
        desc: "Sitebuilderz’s enterprise-grade stack and global hosting network can handle large traffic surges with ease.",
    },
    {
        icon: (
            <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19" stroke="#2563eb" strokeWidth="2" /><rect x="12" y="16" width="16" height="8" rx="2" stroke="#fff" strokeWidth="2" /><rect x="12" y="10" width="16" height="6" rx="2" stroke="#fff" strokeWidth="2" /><rect x="12" y="24" width="16" height="6" rx="2" stroke="#fff" strokeWidth="2" /></svg>
        ),
        title: 'Content at scale',
        desc: "Sitebuilderz Enterprise supports upwards of 100,000+ CMS items, so your site performance scales with your content.",
    },
    {
        icon: (
            <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19" stroke="#2563eb" strokeWidth="2" /><path d="M12 28c2-4 6-8 8-8s6 4 8 8" stroke="#fff" strokeWidth="2" /><circle cx="20" cy="16" r="4" stroke="#fff" strokeWidth="2" /></svg>
        ),
        title: 'World-class performance',
        desc: "Fast page loads powered by Fastly CDN and enterprise-level uptime SLAs make for seamless hosting.",
    },
    {
        icon: (
            <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19" stroke="#2563eb" strokeWidth="2" /><ellipse cx="20" cy="20" rx="10" ry="16" stroke="#fff" strokeWidth="2" /><ellipse cx="20" cy="20" rx="16" ry="10" stroke="#fff" strokeWidth="2" /></svg>
        ),
        title: 'End-to-end localization',
        desc: (
            <>
                Create fully localized site experiences for audiences around the world.<br />
                <span className="feature-link">Learn more &rarr;</span>
            </>
        ),
    },
];

const Enterprise = () => {
    return (
                <FullContainer spacing="large" className="enterprise-section bg-black text-white px-4">
        <Container spacing="large">
                <div className='flex flex-col lg:flex-row items-end justify-between'>
                    <div className='flex flex-col items-start justify-start'>
                        <h1 className="text-5xl font-bold mb-4 leading-tight">
                            An enterprise-ready<br />platform
                        </h1>
                        <p className="text-lg mb-8 max-w-2xl">
                            Our platform gives you everything you need to build and maintain fast, reliable content-powered websites that grow with your business.
                        </p>
                    </div>
                    <div className="mb-12">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded transition">
                            Discover Sitebuilderz Enterprise
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="feature-card bg-[#111] rounded-lg p-8 flex flex-col items-start h-full">
                            <div className="mb-6">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-base text-gray-300">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </FullContainer>
    )
}

export default Enterprise