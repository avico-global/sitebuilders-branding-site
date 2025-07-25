    import React, { useState, useEffect, useRef } from 'react'
    import Container from '../../common/Container'
    import Image from 'next/image'
    import { Link } from 'react-scroll';

    const ScrollNavbar = () => {
        const data = [
            {
                title: "One powerful platform",
                links: [
                    {
                        title: "Launch from Repo",
                        href: "design-build",
                        image: "/st-images/step1.svg"
                    },
                    {
                        title: "Build fast with templates",
                        href: "publish-edit",
                        image: "/st-images/step2.svg"
                    },
                    {
                        title: "Edit and Optimize",
                        href: "analyze-optimize",
                        image: "/st-images/step3.svg"
                    },
                    {
                        title: "Boost Visibility. Dominate Google",
                        href: "scale-collaborate",
                        image: "/st-images/step4.svg"
                    },
                ]
            },
        ]

        const [isVisible, setIsVisible] = useState(false)
        const [activeSection, setActiveSection] = useState('design-build')
        const navbarRef = useRef(null)

        useEffect(() => {
            const handleScroll = () => {
                if (navbarRef.current) {
                    const navbarPosition = navbarRef.current.offsetTop
                    const scrollTop = window.scrollY

                    const scaleCollaborateElement = document.getElementById('scale-collaborate')

                    if (scaleCollaborateElement) {
                        const rect = scaleCollaborateElement.getBoundingClientRect()
                        const elementTop = rect.top + window.scrollY
                        const elementHeight = scaleCollaborateElement.offsetHeight
                        const elementMiddle = elementTop + elementHeight / 2

                        // Show if before the middle of scale-collaborate
                        if (scrollTop >= navbarPosition && scrollTop < elementMiddle) {
                            setIsVisible(true)
                        } else {
                            setIsVisible(false)
                        }
                    } else {
                        setIsVisible(scrollTop >= navbarPosition)
                    }
                }

                // Track active section
                const sections = data[0].links.map(link => link.href)
                const scrollPosition = window.scrollY + window.innerHeight / 2

                for (let i = sections.length - 1; i >= 0; i--) {
                    const element = document.getElementById(sections[i])
                    if (element) {
                        const elementTop = element.offsetTop
                        const elementBottom = elementTop + element.offsetHeight

                        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
                            setActiveSection(sections[i])
                            break
                        }
                    }
                }
            }

            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }, [])

        return (
            <>
                {/* Hidden placeholder to get position */}
                <div ref={navbarRef} className="w-full  invisiblel">
                </div>

                {/* Actual scroll navbar */}
                <div
                    className={`w-full hidden md:block bg-[#F0F0F0] shadow-lg border-b border-gray-200 transition-all duration-500 fixed top-[93px] left-0 right-0 z-40 ${isVisible
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none hidden'
                        }`}
                >
                    <div className="py-3.5 transition-all duration-500">
                        <Container className='!py-0'>
                            <div className='flex items-center justify-between'>
                                <div className='text-lg hidden lg:block font-semibold text-gray-800'>
                                    {data[0].title}
                                </div>
                                <nav className='flex items-center space-x-8'>
                                    {data[0].links.map((item, index) => {
                                        const isActive = activeSection === item.href
                                        return (
                                            <Link
                                                to={item.href}
                                                smooth={true}
                                                duration={500}
                                                key={index}
                                                className='flex cursor-pointer flex-row items-center gap-1 group hover:scale-105 transition-transform duration-200'
                                            >
                                                <div className='relative'>
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        width={100}
                                                        height={100}
                                                        className={`w-6 h-6 transition-opacity duration-200 ${isActive
                                                                ? 'opacity-100'
                                                                : 'opacity-60 group-hover:opacity-80'
                                                            }`}
                                                    />
                                                </div>
                                                <span className={`text-base transition-colors duration-200 ${isActive
                                                        ? 'text-black font-medium'
                                                        : 'text-gray-500 group-hover:text-gray-800'
                                                    }`}>
                                                    {item.title}
                                                </span>
                                            </Link>
                                        )
                                    })}
                                </nav>
                            </div>
                        </Container>
                    </div>
                </div>

            </>
        )
    }

    export default ScrollNavbar
