import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Button from '../../ui/Button'
import { ChevronDownIcon, HomeIcon, MenuIcon, MousePointer2, Search, X } from 'lucide-react'
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
    SquareSplitHorizontal
} from 'lucide-react';
import Image from 'next/image'

const Navbar = () => {
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
    const [isResourcesOpen, setIsResourcesOpen] = useState(false)
    const [isPlatformOpen, setIsPlatformOpen] = useState(false)


    const platformData = [
        // {
        //     title: 'BUILD',
        //     links: [
        //         {
        //             icon: <MousePointer2 />,
        //             title: 'Design',
        //             link: '/platform/design',
        //             description: 'Build high-performing sites',
        //         },
        //         {
        //             icon: <Pencil />,
        //             title: 'Edit mode',
        //             link: '/platform/edit-mode',
        //             description: 'Empower your content team',
        //         },
        //         {
        //             icon: <Zap />,
        //             title: 'Interactions',
        //             link: '/platform/interactions',
        //             description: 'Craft immersive experiences',
        //         },
        //         {
        //             icon: <SquareSplitHorizontal />,
        //             title: 'Page building',
        //             link: '/platform/page-building',
        //             description: 'Launch simple landing pages quickly and easily',
        //             isNew: true,
        //         },
        //         {
        //             icon: <BookOpen />,
        //             title: 'Shared Libraries',
        //             link: '/platform/shared-libraries',
        //             description: 'Unify your design system across multiple sites',
        //             isNew: true,
        //         },
        //     ],
        // },
        {
            title: 'MANAGE',
            links: [
                {
                    icon: <Edit />,
                    title: 'CMS',
                    link: '/cms',
                    description: 'Manage content at scale',
                },
                {
                    icon: <Globe />,
                    title: 'Hosting',
                    link: '/hosting',
                    description: 'Host and scale your site without the hassle',
                },
                {
                    icon: <Globe />,
                    title: 'Localization',
                    link: '/localization',
                    description: 'Customize your site for a worldwide audience',
                },
                // {
                //     icon: <Shield />,
                //     title: 'Security',
                //     link: '/security',
                //     description: 'Ensure your site stays safe',
                // },
            ],
        },
        {
            title: 'OPTIMIZE',
            links: [
                {
                    icon: <BarChart />,
                    title: 'Analyze',
                    link: '/analyze',
                    description: 'Understand how your site performs',
                    isNew: true,
                },
                {
                    icon: <Zap />,
                    title: 'Optimize',
                    link: '/optimize',
                    description: 'Maximize conversions with testing and personalization',
                    isNew: true,
                },
                {
                    icon: <Search />,
                    title: 'SEO',
                    link: '/seo',
                    description: 'Grow your reach with fine-tuned controls',
                },
            ],
        },
        // {
        //     title: 'EXTEND',
        //     links: [
        //         {
        //             icon: <LayoutGrid />,
        //             title: 'Apps',
        //             link: '/platform/apps',
        //             description: 'Connect your site to apps like HubSpot, Adobe Express, and more',
        //         },
        //         {
        //             icon: <Figma />,
        //             title: 'Figma to Sitebuilderz',
        //             link: '/platform/figma-to-Sitebuilderz',
        //             description: 'Turn static designs into clean, production-ready code',
        //         },
        //     ],
        // },
    ];

    const resourcesData = [
        {
            title: 'GET STARTED',
            links: [
                {
                    icon: <LayoutGrid />,
                    title: 'Templates',
                    link: '/resources/templates',
                    description: 'Website templates for any use case',
                },
                {
                    icon: <Globe />,
                    title: 'Made in Sitebuilderz',
                    link: '/resources/made-in-Sitebuilderz',
                    description: 'Find and clone inspiring sites',
                },
                {
                    icon: <Users />,
                    title: 'Hire a Certified Partner',
                    link: '/resources/certified-partners',
                    description: 'Find a freelancer or agency to help with your next project',
                },
                {
                    icon: <Rocket />,
                    title: 'Developers',
                    link: '/resources/developers',
                    description: 'Submit an app, explore our APIs, get technical support, and more',
                },
            ],
        },
        {
            title: 'LEARN',
            links: [
                {
                    icon: <BookOpen />,
                    title: 'Sitebuilderz University',
                    link: '/resources/university',
                    description: 'Learn web design and development for free',
                },
                {
                    icon: <Edit />,
                    title: 'Blog',
                    link: '/resources/blog',
                    description: 'Stories, insights, and advice for how you build for the web',
                },
                {
                    icon: <BarChart />,
                    title: 'Resources',
                    link: '/resources/resources',
                    description: 'Free ebooks, webinars, whitepapers, and reports',
                },
            ],
        },
        {
            title: 'DISCOVER',
            links: [
                {
                    icon: <Users />,
                    title: 'Customer stories',
                    link: '/resources/customer-stories',
                    description: 'Explore enterprise and agency success stories',
                },
                {
                    icon: <Globe />,
                    title: 'Community',
                    link: '/resources/community',
                    description: 'Connect with the worldwide Sitebuilderz community',
                },
                {
                    icon: <Rocket />,
                    title: 'Partner with Sitebuilderz',
                    link: '/resources/partner',
                    description: 'Grow your business by becoming a Sitebuilderz partner',
                },
            ],
        },
        {
            title: 'GET HELP',
            links: [
                {
                    icon: <Shield />,
                    title: 'Support',
                    link: '/resources/support',
                    description: 'Jump into our product docs or connect with our Support team',
                },
                {
                    icon: <Users />,
                    title: 'Forum',
                    link: '/resources/forum',
                    description: 'Ask questions and learn alongside other Sitebuilderz users',
                },
            ],
        },
    ];

    const solutionsData = [
        {
            title: 'Sitebuilderz FOR',
            links: [
                {
                    icon: <Users />,
                    title: 'Enterprise',
                    link: '/solutions/enterprise',
                    description: 'Built for world-class organizations',
                },
                {
                    icon: <Rocket />,
                    title: 'Agencies',
                    link: '/solutions/agencies',
                    description: 'Accelerate your agency\'s growth',
                },
                {
                    icon: <Edit />,
                    title: 'Freelancers',
                    link: '/solutions/freelancers',
                    description: 'Build custom sites for clients',
                },
                {
                    icon: <Globe />,
                    title: 'Global alliances',
                    link: '/solutions/global-alliances',
                    description: 'Unlock enterprise-level partnership',
                },
                {
                    icon: <Zap />,
                    title: 'Startups',
                    link: '/solutions/startups',
                    description: 'Move faster with Sitebuilderz',
                },
                {
                    icon: <BookOpen />,
                    title: 'Classrooms',
                    link: '/solutions/classrooms',
                    description: 'Register to use Sitebuilderz for free',
                },
            ],
        },
        {
            title: 'COMPARE',
            links: [
                {
                    icon: <LayoutGrid />,
                    title: 'Contentful',
                    link: '/compare/contentful',
                },
                {
                    icon: <Figma />,
                    title: 'Framer',
                    link: '/compare/framer',
                },
                {
                    icon: <Shield />,
                    title: 'Sitecore',
                    link: '/compare/sitecore',
                },
                {
                    icon: <Globe />,
                    title: 'Wix',
                    link: '/compare/wix',
                },
                {
                    icon: <BookOpen />,
                    title: 'WordPress',
                    link: '/compare/wordpress',
                },
            ],
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



    const solutionsDropdownRef = useRef(null)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(event.target)) {
                setIsSolutionsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    const resourcesDropdownRef = useRef(null)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target)) {
                setIsResourcesOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const platformDropdownRef = useRef(null)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (platformDropdownRef.current && !platformDropdownRef.current.contains(event.target)) {
                setIsPlatformOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    console.log("isPlatformOpen", isPlatformOpen)
    console.log("isSolutionsOpen", isSolutionsOpen)
    console.log("isResourcesOpen", isResourcesOpen)


    return (
        <FullContainer className='border-b border-gray-200 fixed flex items-center top-0 left-0 right-0 z-60 !h-fit bg-white min-h-[63px]'>
            <div className={`absolute top-[63px] left-0 right-0 h-screen bg-black/60 z-50 ${isPlatformOpen || isSolutionsOpen || isResourcesOpen ? "" : "hidden"}`} />
            <Container className="!px-0 py-0 h-full flex flex-col justify-center">
                <div className='flex justify-between items-center py-4 md:py-1 '>
                    {/* Left side */}
                    <div className='flex flex-row gap-4 items-center min-w-0 '>
                        {/* Logo */}
                        <Link href="/" className='flex flex-row gap-2 items-center text-lg md:text-2xl font-bold whitespace-nowrap'>
                            <Image src="/st-images/logo192.png" alt="sitebuilderz" width={28} height={28} />
                            <div className='font-bold text-lg md:text-xl whitespace-nowrap'>
                                sitebuilderz
                            </div>
                        </Link>
                        {/* Nav links */}
                        <div className='hidden xl:flex flex-row gap-4 items-center text-base whitespace-nowrap'>
                            <div className='flex flex-row gap-1 items-center cursor-pointer relative group' onClick={() => { setIsPlatformOpen(!isPlatformOpen); setIsSolutionsOpen(false); setIsResourcesOpen(false) }}>
                                <div className='absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out'></div>
                                Platform
                                <ChevronDownIcon className='w-4 h-4' />
                            </div>
                            <div ref={platformDropdownRef} className={`absolute max-w-7xl w-[40%] px-2.5 sm:px-0 mx-auto h-full z-50 top-[70px] left-1/2 -translate-x-1/2 rounded-sm transition-all duration-500 ease-out transform origin-top ${isPlatformOpen ? 'opacity-100 scale-100 max-h-max' : 'opacity-0 scale-0 max-h-0 overflow-hidden'}`} onClick={(e) => e.stopPropagation()}>
                                <div className='grid grid-cols-2 gap-8 bg-white rounded-sm p-4'>
                                    {platformData.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`flex flex-col gap-2 border-r bg-white border-gray-200 ${index === platformData.length - 1 ? 'border-r-0' : ''} rounded-sm p-2 max-w-xs`}
                                        >
                                            <h3 className='text-xs uppercase text-gray-500 pb-5 tracking-wider'>{item.title}</h3>
                                            <div className='flex flex-col gap-4 '>   
                                                {item.links.map((link, idx) => (
                                                    <Link href={link.link} key={idx} className='flex flex-row gap-3 items-start cursor-pointer hover:bg-gray-50 rounded'>
                                                        <div className='pt-1 text-lg w-5 h-5 flex items-center justify-center'>{link.icon}</div>
                                                        <div className='flex flex-col gap-1'>
                                                            <div className='flex flex-row items-center gap-2'>
                                                                <h4 className='text-base font-bold '>{link.title}</h4>
                                                                {link.isNew && <span className='text-xs text-blue-600 font-semibold'>NEW</span>}
                                                            </div>
                                                            <p className='text-[15px] text-gray-500 font-normal leading-snug break-words whitespace-normal'>
                                                                {link.description}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                          
                            <Link href="/pricing" className='flex items-center'>
                                Pricing
                            </Link>
                            <Link href="/templates" className='flex items-center'>
                                Templates
                            </Link>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className='flex flex-row gap-4 items-center whitespace-nowrap'>
                        <Link href="https://sitebuilderz.com/" className='hidden xl:flex items-center text-base'>
                            Login
                        </Link>
                        <Link href="/" className='text-base border-b border-gray-500'>
                            Contact sales
                        </Link>

                        {/* Mobile Menu Icon */}
                        {
                            isMobileMenuOpen ? <X className='w-5 h-5 lg:hidden' onClick={() => setIsMobileMenuOpen(false)} /> : <MenuIcon className='w-5 h-5 lg:hidden' onClick={() => setIsMobileMenuOpen(true)} />
                        }
                        {/* CTA Button */}
                        <Button className='hidden xl:flex'>
                            <div className='flex flex-row  gap-1 leading-none'>
                                <span className='font-semibold'>Get started</span>
                                <span className='text-sm '>__ it's free</span>
                            </div>
                        </Button>
                    </div>
                </div>
                <div className={`absolute top-[60px] left-0 right-0 bg-amber-700 z-50 ${isMobileMenuOpen ? "h-screen transition-all duration-300 ease-out opacity-100 transform translate-y-0" : "h-0 transition-all duration-300 ease-out opacity-0 pointer-events-none transform -translate-y-4"}`}>
                    <MobileNavbar platformData={platformData} />
                </div>
            </Container>
        </FullContainer>
    )
}

export default Navbar

const MobileNavbar = ({ platformData }) => {
    const [isPlatformOpen, setIsPlatformOpen] = useState(false);

    return (
        <div className="bg-white w-full h-screen flex flex-col overflow-y-auto pb-64">
            <div className="flex flex-col w-full">
                {/* Platform Dropdown */}
                <button
                    className="text-blue-600 px-6 py-4 text-base border-b border-gray-200 flex items-center justify-between w-full text-left"
                    onClick={() => { setIsPlatformOpen(!isPlatformOpen); }}
                >
                    Platform <span className="text-gray-400"><ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ease-out ${isPlatformOpen ? 'rotate-180' : ''}`} /></span>
                </button>
                <div className={`bg-gray-50 px-6 py-2 border-b border-gray-200 transform transition-all duration-500 ease-out overflow-hidden ${isPlatformOpen ? 'max-h-screen translate-y-0 opacity-100' : 'max-h-0 -translate-y-2 opacity-0'}`}>
                    {platformData.map((section, idx) => (
                        <div key={idx} className="mb-4">
                            <div className="text-xs uppercase text-gray-500 pb-2 tracking-wider">{section.title}</div>
                            <div className="flex flex-col gap-2">
                                {section.links.map((link, lidx) => (
                                    <a
                                        key={lidx}
                                        href={link.link}
                                        className="flex items-start gap-2 py-2 rounded hover:bg-white transition-colors duration-200"
                                    >
                                        <span className="pt-1 text-lg w-5 h-5 flex items-center justify-center">{link.icon}</span>
                                        <span className="flex flex-col">
                                            <span className="font-semibold text-base flex items-center gap-1">{link.title}{link.isNew && <span className="text-xs text-blue-600 font-semibold ml-1">NEW</span>}</span>
                                            <span className="text-xs text-gray-500 leading-tight">{link.description}</span>
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pricing Link */}
                <a href="/pricing" className="px-6 py-4 text-base border-b border-gray-200 transition-colors duration-200 hover:bg-gray-50">Pricing</a>
                {/* Templates Link */}
                <a href="/templates" className="px-6 py-4 text-base border-b border-gray-200 transition-colors duration-200 hover:bg-gray-50">Templates</a>
            </div>
        </div>
    )
}