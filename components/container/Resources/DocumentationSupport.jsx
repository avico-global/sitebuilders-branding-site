import React from 'react';
import FullContainer from '../../common/FullContainer';
import Container from '../../common/Container';
import Button from '../../ui/Button';
import { Download, BookOpen, Video, FileText, Code, Users, MessageCircle, Phone, Mail, ExternalLink, ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

const DocumentationSupport = () => {
    const downloadableResources = [
        {
            id: 1,
            title: "Sitebuilderz User Guide",
            description: "Complete guide to using Sitebuilderz platform features and tools",
            type: "PDF",
            size: "2.4 MB",
            downloads: "12,450",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
            category: "Getting Started"
        },
        {
            id: 2,
            title: "E-commerce Setup Manual",
            description: "Step-by-step instructions for setting up your online store",
            type: "PDF",
            size: "1.8 MB",
            downloads: "8,920",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
            category: "E-commerce"
        },
        {
            id: 3,
            title: "SEO Best Practices",
            description: "Comprehensive guide to optimizing your website for search engines",
            type: "PDF",
            size: "3.1 MB",
            downloads: "15,230",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            category: "SEO"
        },
        {
            id: 4,
            title: "API Documentation",
            description: "Technical documentation for developers integrating with Sitebuilderz",
            type: "PDF",
            size: "4.2 MB",
            downloads: "5,670",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
            category: "Development"
        }
    ];

    const knowledgeBase = [
        {
            id: 1,
            title: "Getting Started",
            articles: 15,
            icon: <BookOpen className="w-6 h-6" />,
            description: "Learn the basics of Sitebuilderz and create your first website",
            color: "bg-blue-100 text-blue-800"
        },
        {
            id: 2,
            title: "Design & Customization",
            articles: 28,
            icon: <Code className="w-6 h-6" />,
            description: "Customize your website design, layouts, and styling",
            color: "bg-purple-100 text-purple-800"
        },
        {
            id: 3,
            title: "Content Management",
            articles: 22,
            icon: <FileText className="w-6 h-6" />,
            description: "Manage your website content, pages, and media files",
            color: "bg-green-100 text-green-800"
        },
        {
            id: 4,
            title: "E-commerce",
            articles: 19,
            icon: <Download className="w-6 h-6" />,
            description: "Set up and manage your online store and products",
            color: "bg-orange-100 text-orange-800"
        },
        {
            id: 5,
            title: "SEO & Analytics",
            articles: 16,
            icon: <BookOpen className="w-6 h-6" />,
            description: "Optimize your website for search engines and track performance",
            color: "bg-red-100 text-red-800"
        },
        {
            id: 6,
            title: "Integrations",
            articles: 31,
            icon: <ExternalLink className="w-6 h-6" />,
            description: "Connect your website with third-party tools and services",
            color: "bg-indigo-100 text-indigo-800"
        }
    ];

    const videoTutorials = [
        {
            id: 1,
            title: "Building Your First Website",
            duration: "12:34",
            views: "45,230",
            thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop",
            level: "Beginner"
        },
        {
            id: 2,
            title: "Advanced Design Techniques",
            duration: "18:45",
            views: "23,450",
            thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=225&fit=crop",
            level: "Advanced"
        },
        {
            id: 3,
            title: "Setting Up E-commerce",
            duration: "25:12",
            views: "31,670",
            thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=225&fit=crop",
            level: "Intermediate"
        },
        {
            id: 4,
            title: "SEO Optimization Guide",
            duration: "15:28",
            views: "28,910",
            thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
            level: "Intermediate"
        }
    ];

    const supportChannels = [
        {
            id: 1,
            title: "Live Chat",
            description: "Get instant help from our support team",
            icon: <MessageCircle className="w-8 h-8" />,
            availability: "24/7",
            responseTime: "Instant",
            color: "bg-green-100 text-green-800"
        },
        {
            id: 2,
            title: "Email Support",
            description: "Send us a detailed message and get a response within hours",
            icon: <Mail className="w-8 h-8" />,
            availability: "24/7",
            responseTime: "2-4 hours",
            color: "bg-blue-100 text-blue-800"
        },
        {
            id: 3,
            title: "Phone Support",
            description: "Speak directly with our technical experts",
            icon: <Phone className="w-8 h-8" />,
            availability: "Mon-Fri, 9AM-6PM EST",
            responseTime: "Immediate",
            color: "bg-purple-100 text-purple-800"
        },
        {
            id: 4,
            title: "Community Forum",
            description: "Connect with other users and share solutions",
            icon: <Users className="w-8 h-8" />,
            availability: "24/7",
            responseTime: "Varies",
            color: "bg-orange-100 text-orange-800"
        }
    ];

    return (
        <FullContainer className='py-16 bg-white'>
            <Container>
                {/* Downloadable Resources */}
                <div className='mb-16'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Downloadable Resources</h2>
                        <p className='text-gray-600 max-w-2xl mx-auto'>
                            Access comprehensive guides, manuals, and documentation to help you master Sitebuilderz.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {downloadableResources.map((resource) => (
                            <div key={resource.id} className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300'>
                                <div className='relative h-40'>
                                    <Image
                                        src={resource.image}
                                        alt={resource.title}
                                        fill
                                        className='object-cover'
                                    />
                                    <div className='absolute top-3 left-3 bg-[#E24E28] text-white px-2 py-1 rounded text-xs font-semibold'>
                                        {resource.type}
                                    </div>
                                </div>
                                <div className='p-4'>
                                    <div className='flex items-center gap-2 mb-2'>
                                        <span className='bg-gray-100 px-2 py-1 rounded text-xs'>{resource.category}</span>
                                    </div>
                                    <h3 className='text-lg font-semibold mb-2'>{resource.title}</h3>
                                    <p className='text-gray-600 text-sm mb-3'>{resource.description}</p>
                                    <div className='flex items-center justify-between text-sm text-gray-500 mb-3'>
                                        <span>{resource.size}</span>
                                        <span>{resource.downloads} downloads</span>
                                    </div>
                                    <Button className='w-full px-4 py-2 text-sm'>
                                        <Download className='w-4 h-4 mr-2' />
                                        Download
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Knowledge Base */}
                <div className='mb-16'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Knowledge Base</h2>
                        <p className='text-gray-600 max-w-2xl mx-auto'>
                            Browse our comprehensive knowledge base organized by topics and skill levels.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {knowledgeBase.map((category) => (
                            <div key={category.id} className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer'>
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${category.color}`}>
                                    {category.icon}
                                </div>
                                <h3 className='text-xl font-semibold mb-2'>{category.title}</h3>
                                <p className='text-gray-600 mb-4'>{category.description}</p>
                                <div className='flex items-center justify-between'>
                                    <span className='text-sm text-gray-500'>{category.articles} articles</span>
                                    <ArrowRightIcon className='w-4 h-4 text-[#E24E28]' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Video Tutorials */}
                <div className='mb-16'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Video Tutorials</h2>
                        <p className='text-gray-600 max-w-2xl mx-auto'>
                            Learn Sitebuilderz through step-by-step video tutorials and demonstrations.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {videoTutorials.map((video) => (
                            <div key={video.id} className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer'>
                                <div className='relative h-40'>
                                    <Image
                                        src={video.thumbnail}
                                        alt={video.title}
                                        fill
                                        className='object-cover'
                                    />
                                    <div className='absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center'>
                                        <div className='w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center'>
                                            <Video className='w-6 h-6 text-[#E24E28]' />
                                        </div>
                                    </div>
                                    <div className='absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs'>
                                        {video.duration}
                                    </div>
                                </div>
                                <div className='p-4'>
                                    <div className='flex items-center gap-2 mb-2'>
                                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                            video.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                                            video.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                            {video.level}
                                        </span>
                                    </div>
                                    <h3 className='text-lg font-semibold mb-2'>{video.title}</h3>
                                    <p className='text-sm text-gray-500'>{video.views} views</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Support Channels */}
                <div>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Get Support</h2>
                        <p className='text-gray-600 max-w-2xl mx-auto'>
                            Multiple ways to get help when you need it. Our support team is here to assist you.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {supportChannels.map((channel) => (
                            <div key={channel.id} className='bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300'>
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${channel.color}`}>
                                    {channel.icon}
                                </div>
                                <h3 className='text-xl font-semibold mb-2'>{channel.title}</h3>
                                <p className='text-gray-600 mb-4'>{channel.description}</p>
                                <div className='space-y-2 text-sm'>
                                    <div className='text-gray-500'>
                                        <strong>Available:</strong> {channel.availability}
                                    </div>
                                    <div className='text-gray-500'>
                                        <strong>Response:</strong> {channel.responseTime}
                                    </div>
                                </div>
                                <Button className='w-full mt-4 px-4 py-2 text-sm'>
                                    Get Help
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </FullContainer>
    );
};

export default DocumentationSupport; 