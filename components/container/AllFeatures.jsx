import React from 'react'
import {
    Edit, Pencil,
    Globe,
    Shield,
    BarChart,
    Zap,
    Users,
    Rocket,
    LayoutGrid,
    Figma,
    BookOpen,
    SquareSplitHorizontal,
    MousePointer2,
    Search,
    Target,
    Database,
    Cloud
} from 'lucide-react'
import FullContainer from '../common/FullContainer'
import Container from '../common/Container'
import Link from 'next/link'

export default function AllFeatures() {
    return (
        <FullContainer className="bg-[#F0F0F0] py-16 ">
            <Container className="">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">All features</h1>
                    <div className="flex items-center justify-center gap-4">
                        <p className="text-xl text-gray-700">Discover everything you can do with Webflow.</p>
                        <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                            <span className="text-lg">✨</span>
                            <span className="text-sm font-medium">Elevate your site with the power of AI</span>
                            <span className="text-lg">→</span>
                        </a>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-7 gap-4 mb-16'>
                    <h2 className='col-span-2'>Build</h2>
                    <div className='col-span-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
                        <FeatureCard icon={<MousePointer2 />} title="Design" description="Build high-performing sites" isNew={false} className='sm:col-span-2' href="#" />
                        <FeatureCard icon={<Pencil />} title="Edit mode" description="Empower your content team" isNew={false} className='' href="#" />
                        <FeatureCard icon={<Zap />} title="Interactions" description="Craft immersive experiences" isNew={false} href="#" />
                        <FeatureCard icon={<LayoutGrid />} title="Page building" description="Launch simple landing pages quickly" isNew={true} href="#" />
                        <FeatureCard icon={<BookOpen />} title="Shared Libraries" description="Unify your design system across multiple sites" isNew={true} href="#" />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-7 gap-4 mb-16'>
                    <h2 className='col-span-2'>Manage</h2>
                    <div className='col-span-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
                        <FeatureCard icon={<Database />} title="CMS" description="Manage content at scale" isNew={false} className='sm:col-span-2' href="/cms" />
                        <FeatureCard icon={<Cloud />} title="Hosting" description="Host and scale your site without the hassle" isNew={false} href="#" />
                        <FeatureCard icon={<Shield />} title="Security" description="Ensure your site stays safe" isNew={false} href="#" />
                        <FeatureCard icon={<Globe />} title="Localization" description="Customize your site for a worldwide audience" isNew={false} href="#" />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-7 gap-4 mb-16'>
                    <h2 className='col-span-2'>Optimize</h2>
                    <div className='col-span-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
                        <FeatureCard icon={<BarChart />} title="Analyze" description="Understand how your site performs" isNew={true} className='sm:col-span-2' href="#" />
                        <FeatureCard icon={<Target />} title="Optimize" description="Maximize conversions with testing and personalization" isNew={true} href="#" />
                        <FeatureCard icon={<Search />} title="SEO" description="Grow your reach with fine-tuned controls" isNew={false} href="#" />
                    </div>
                </div>

            </Container>
        </FullContainer>
    )
} 

// Feature Card Component
function FeatureCard({ icon, title, description, isNew, className, href }) {
    return (
        <Link href={href} className={`bg-white rounded-lg p-4 shadow-xs hover:shadow-md transition-shadow cursor-pointer group ${className}`}>
            <div className="flex flex-row items-center justify-between mb-4">
                <div className='flex flex-row items-center justify-center gap-2'>
                    <div className="text-lg w-5 h-5 flex items-center justify-center text-gray-700">
                        {icon}
                    </div>
                    <h3 className="font-bold text-gray-900">{title}</h3>
                </div>
                <div className="flex items-center gap-2">
                    {isNew && (
                        <span className="text-xs text-blue-600 font-semibold">NEW</span>
                    )}
                    <span className="text-gray-400 group-hover:text-gray-600 transition-colors">↗</span>
                </div>
            </div>

            <p className="text-[15px] text-gray-500 font-normal leading-snug">{description}</p>
        </Link>
    )
}
