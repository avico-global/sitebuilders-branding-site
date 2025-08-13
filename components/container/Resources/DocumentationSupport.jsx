import React, { useState } from 'react';
import FullContainer from '../../common/FullContainer';
import Container from '../../common/Container';
import Button from '../../ui/Button';
import { Download, BookOpen, Video, FileText, Code, Users, MessageCircle, Phone, Mail, ExternalLink, ArrowRightIcon, Play, Clock, Star, TrendingUp, Zap } from 'lucide-react';
import Image from 'next/image';

const DocumentationSupport = () => {
    const [activeResource, setActiveResource] = useState(null);
    const [activeVideo, setActiveVideo] = useState(0);

    const downloadableResources = [
        {
            id: 1,
            title: "Sitebuilderz User Guide",
            description: "Complete guide to using Sitebuilderz platform features and tools",
            type: "PDF",
            size: "2.4 MB",
            downloads: "12,450",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
            category: "Getting Started",
            rating: 4.8,
            pages: 156,
            updated: "2 days ago"
        },
        {
            id: 2,
            title: "E-commerce Setup Manual",
            description: "Step-by-step instructions for setting up your online store",
            type: "PDF",
            size: "1.8 MB",
            downloads: "8,920",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
            category: "E-commerce",
            rating: 4.9,
            pages: 89,
            updated: "1 week ago"
        },
        {
            id: 3,
            title: "SEO Best Practices",
            description: "Comprehensive guide to optimizing your website for search engines",
            type: "PDF",
            size: "3.1 MB",
            downloads: "15,230",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            category: "SEO",
            rating: 4.7,
            pages: 203,
            updated: "3 days ago"
        },
        {
            id: 4,
            title: "API Documentation",
            description: "Technical documentation for developers integrating with Sitebuilderz",
            type: "PDF",
            size: "4.2 MB",
            downloads: "5,670",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
            category: "Development",
            rating: 4.6,
            pages: 312,
            updated: "1 day ago"
        }
    ];

    const knowledgeBase = [
        {
            id: 1,
            title: "Getting Started",
            articles: 15,
            icon: <BookOpen className="w-6 h-6" />,
            description: "Learn the basics of Sitebuilderz and create your first website",
            popular: true,
            newArticles: 3
        },
        {
            id: 2,
            title: "Design & Customization",
            articles: 28,
            icon: <Code className="w-6 h-6" />,
            description: "Customize your website design, layouts, and styling",
            popular: false,
            newArticles: 0
        },
        {
            id: 3,
            title: "Content Management",
            articles: 22,
            icon: <FileText className="w-6 h-6" />,
            description: "Manage your website content, pages, and media files",
            popular: true,
            newArticles: 5
        },
        {
            id: 4,
            title: "E-commerce",
            articles: 19,
            icon: <Download className="w-6 h-6" />,
            description: "Set up and manage your online store and products",
            popular: false,
            newArticles: 2
        },
        {
            id: 5,
            title: "SEO & Analytics",
            articles: 16,
            icon: <TrendingUp className="w-6 h-6" />,
            description: "Optimize your website for search engines and track performance",
            popular: true,
            newArticles: 4
        },
        {
            id: 6,
            title: "Integrations",
            articles: 31,
            icon: <Zap className="w-6 h-6" />,
            description: "Connect your website with third-party tools and services",
            popular: false,
            newArticles: 1
        }
    ];

    const videoTutorials = [
        {
            id: 1,
            title: "Building Your First Website",
            duration: "12:34",
            views: "45,230",
            thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop",
            level: "Beginner",
            instructor: "Sarah Johnson",
            rating: 4.9,
            description: "Learn how to create your first website from scratch using Sitebuilderz"
        },
        {
            id: 2,
            title: "Advanced Design Techniques",
            duration: "18:45",
            views: "23,450",
            thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=225&fit=crop",
            level: "Advanced",
            instructor: "Mike Chen",
            rating: 4.8,
            description: "Master advanced design techniques and customization options"
        },
        {
            id: 3,
            title: "Setting Up E-commerce",
            duration: "25:12",
            views: "31,670",
            thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=225&fit=crop",
            level: "Intermediate",
            instructor: "Emily Rodriguez",
            rating: 4.7,
            description: "Complete guide to setting up your online store"
        },
        {
            id: 4,
            title: "SEO Optimization Guide",
            duration: "15:28",
            views: "28,910",
            thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
            level: "Intermediate",
            instructor: "David Kim",
            rating: 4.9,
            description: "Optimize your website for better search engine rankings"
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
            features: ["Real-time chat", "Screen sharing", "File uploads"],
            waitTime: "< 1 min"
        },
        {
            id: 2,
            title: "Email Support",
            description: "Send us a detailed message and get a response within hours",
            icon: <Mail className="w-8 h-8" />,
            availability: "24/7",
            responseTime: "2-4 hours",
            features: ["Detailed responses", "Attachments", "Follow-up"],
            waitTime: "2-4 hours"
        },
        {
            id: 3,
            title: "Phone Support",
            description: "Speak directly with our technical experts",
            icon: <Phone className="w-8 h-8" />,
            availability: "Mon-Fri, 9AM-6PM EST",
            responseTime: "Immediate",
            features: ["Voice calls", "Screen sharing", "Call recording"],
            waitTime: "5-10 min"
        },
        {
            id: 4,
            title: "Community Forum",
            description: "Connect with other users and share solutions",
            icon: <Users className="w-8 h-8" />,
            availability: "24/7",
            responseTime: "Varies",
            features: ["User discussions", "Tips & tricks", "Showcase"],
            waitTime: "1-24 hours"
        }
    ];

    return (
        <FullContainer className='py-16 bg-white'>
            <Container>
                {/* Downloadable Resources - Interactive Cards */}
                <div className='mb-20'>
                    <div className='text-center mb-12'>
                        <div className='inline-flex items-center gap-2 bg-[#E24E28] text-white px-4 py-2 rounded-full text-sm font-medium mb-4'>
                            <Download className='w-4 h-4' />
                            Downloadable Resources
                        </div>
                        <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900'>
                            Comprehensive Guides & Manuals
                        </h2>
                        <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
                            Access comprehensive guides, manuals, and documentation to help you master Sitebuilderz.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {downloadableResources.map((resource) => (
                            <div 
                                key={resource.id} 
                                className='group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer'
                                onMouseEnter={() => setActiveResource(resource.id)}
                                onMouseLeave={() => setActiveResource(null)}
                            >
                                <div className='relative h-48'>
                                    <Image
                                        src={resource.image}
                                        alt={resource.title}
                                        fill
                                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent' />
                                    <div className='absolute top-4 left-4 bg-[#E24E28] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg'>
                                        {resource.type}
                                    </div>
                                    <div className='absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs'>
                                        <Star className='w-3 h-3 text-yellow-500 fill-current' />
                                        <span className='font-medium'>{resource.rating}</span>
                                    </div>
                                </div>
                                
                                <div className='p-6'>
                                    <div className='flex items-center gap-2 mb-3'>
                                        <span className='bg-gray-100 px-3 py-1 rounded-full text-xs font-medium'>{resource.category}</span>
                                        <span className='text-xs text-gray-500'>{resource.pages} pages</span>
                                    </div>
                                    
                                    <h3 className='text-lg font-bold mb-2 text-gray-900 group-hover:text-[#E24E28] transition-colors duration-300'>{resource.title}</h3>
                                    <p className='text-gray-600 text-sm mb-4 line-clamp-2'>{resource.description}</p>
                                    
                                    <div className='flex items-center justify-between text-sm text-gray-500 mb-4'>
                                        <span>{resource.size}</span>
                                        <span>{resource.downloads} downloads</span>
                                    </div>
                                    
                                    <div className='flex items-center justify-between'>
                                        <span className='text-xs text-gray-400'>Updated {resource.updated}</span>
                                        <Button className='px-4 py-2 text-sm'>
                                            <Download className='w-4 h-4 mr-2' />
                                            Download
                                        </Button>
                                    </div>
                                </div>
                                
                                {/* Hover overlay */}
                                {activeResource === resource.id && (
                                    <div className='absolute inset-0 bg-[#E24E28]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                        <div className='text-white text-center'>
                                            <Download className='w-8 h-8 mx-auto mb-2' />
                                            <span className='font-semibold'>Download Now</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Knowledge Base - Interactive Tiles */}
                <div className='mb-20'>
                    <div className='text-center mb-12'>
                        <div className='inline-flex items-center gap-2 bg-[#E24E28] text-white px-4 py-2 rounded-full text-sm font-medium mb-4'>
                            <BookOpen className='w-4 h-4' />
                            Knowledge Base
                        </div>
                        <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900'>
                            Browse by Topic
                        </h2>
                        <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
                            Browse our comprehensive knowledge base organized by topics and skill levels.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {knowledgeBase.map((category) => (
                            <div key={category.id} className='group relative bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100'>
                                <div className='flex items-start justify-between mb-4'>
                                    <div className='w-16 h-16 rounded-lg bg-[#E24E28] flex items-center justify-center text-white shadow-lg'>
                                        {category.icon}
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        {category.popular && (
                                            <span className='bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold'>
                                                Popular
                                            </span>
                                        )}
                                        {category.newArticles > 0 && (
                                            <span className='bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold'>
                                                +{category.newArticles} new
                                            </span>
                                        )}
                                    </div>
                                </div>
                                
                                <h3 className='text-xl font-bold mb-3 text-gray-900 group-hover:text-[#E24E28] transition-colors duration-300'>{category.title}</h3>
                                <p className='text-gray-600 mb-4 leading-relaxed'>{category.description}</p>
                                
                                <div className='flex items-center justify-between'>
                                    <span className='text-sm text-gray-500 font-medium'>{category.articles} articles</span>
                                    <div className='bg-[#E24E28] p-2 rounded-full group-hover:scale-110 transition-transform duration-300'>
                                        <ArrowRightIcon className='w-4 h-4 text-white' />
                                    </div>
                                </div>
                                
                                {/* Progress bar */}
                                <div className='absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-lg'>
                                    <div className='h-full bg-[#E24E28] w-0 group-hover:w-full transition-all duration-500'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Video Tutorials - Carousel Style */}
                <div className='mb-20'>
                    <div className='text-center mb-12'>
                        <div className='inline-flex items-center gap-2 bg-[#E24E28] text-white px-4 py-2 rounded-full text-sm font-medium mb-4'>
                            <Video className='w-4 h-4' />
                            Video Tutorials
                        </div>
                        <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900'>
                            Learn with Video Guides
                        </h2>
                        <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
                            Learn Sitebuilderz through step-by-step video tutorials and demonstrations.
                        </p>
                    </div>

                    <div className='relative'>
                        {/* Main Video Display */}
                        <div className='relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl mb-8'>
                            <Image
                                src={videoTutorials[activeVideo].thumbnail}
                                alt={videoTutorials[activeVideo].title}
                                fill
                                className='object-cover'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent' />
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <div className='w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-all duration-300'>
                                    <Play className='w-8 h-8 text-[#E24E28] ml-1' />
                                </div>
                            </div>
                            <div className='absolute bottom-6 left-6 right-6 text-white'>
                                <div className='flex items-center gap-2 mb-2'>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        videoTutorials[activeVideo].level === 'Beginner' ? 'bg-green-500' :
                                        videoTutorials[activeVideo].level === 'Intermediate' ? 'bg-yellow-500' :
                                        'bg-red-500'
                                    }`}>
                                        {videoTutorials[activeVideo].level}
                                    </span>
                                    <span className='bg-black/50 px-3 py-1 rounded-full text-xs'>
                                        {videoTutorials[activeVideo].duration}
                                    </span>
                                </div>
                                <h3 className='text-2xl font-bold mb-2'>{videoTutorials[activeVideo].title}</h3>
                                <p className='text-gray-200 mb-2'>{videoTutorials[activeVideo].description}</p>
                                <div className='flex items-center gap-4 text-sm'>
                                    <span>by {videoTutorials[activeVideo].instructor}</span>
                                    <div className='flex items-center gap-1'>
                                        <Star className='w-4 h-4 text-yellow-400 fill-current' />
                                        <span>{videoTutorials[activeVideo].rating}</span>
                                    </div>
                                    <span>{videoTutorials[activeVideo].views} views</span>
                                </div>
                            </div>
                        </div>

                        {/* Video Thumbnails */}
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                            {videoTutorials.map((video, index) => (
                                <div 
                                    key={video.id} 
                                    className={`relative h-24 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                                        activeVideo === index ? 'ring-4 ring-[#E24E28] scale-105' : 'hover:scale-105'
                                    }`}
                                    onClick={() => setActiveVideo(index)}
                                >
                                    <Image
                                        src={video.thumbnail}
                                        alt={video.title}
                                        fill
                                        className='object-cover'
                                    />
                                    <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
                                        <Play className='w-6 h-6 text-white' />
                                    </div>
                                    <div className='absolute bottom-2 right-2 bg-black/75 text-white px-2 py-1 rounded text-xs'>
                                        {video.duration}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Support Channels - Modern Cards */}
                <div>
                    <div className='text-center mb-12'>
                        <div className='inline-flex items-center gap-2 bg-[#E24E28] text-white px-4 py-2 rounded-full text-sm font-medium mb-4'>
                            <MessageCircle className='w-4 h-4' />
                            Get Support
                        </div>
                        <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900'>
                            Multiple Ways to Get Help
                        </h2>
                        <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
                            Multiple ways to get help when you need it. Our support team is here to assist you.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {supportChannels.map((channel) => (
                            <div key={channel.id} className='group relative bg-white rounded-lg p-6 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100'>
                                <div className='w-20 h-20 rounded-full bg-[#E24E28] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
                                    {channel.icon}
                                </div>
                                
                                <h3 className='text-xl font-bold mb-3 text-gray-900'>{channel.title}</h3>
                                <p className='text-gray-600 mb-6 leading-relaxed'>{channel.description}</p>
                                
                                <div className='space-y-3 mb-6'>
                                    <div className='flex items-center justify-between text-sm'>
                                        <span className='text-gray-500'>Available:</span>
                                        <span className='font-medium'>{channel.availability}</span>
                                    </div>
                                    <div className='flex items-center justify-between text-sm'>
                                        <span className='text-gray-500'>Wait time:</span>
                                        <span className='font-medium text-[#E24E28]'>{channel.waitTime}</span>
                                    </div>
                                </div>
                                
                                <div className='space-y-2 mb-6'>
                                    {channel.features.map((feature, index) => (
                                        <div key={index} className='flex items-center gap-2 text-sm text-gray-600'>
                                            <div className='w-2 h-2 bg-[#E24E28] rounded-full'></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                                
                                <Button className='w-full'>
                                    Get Help
                                    <ArrowRightIcon className='w-4 h-4 ml-2' />
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