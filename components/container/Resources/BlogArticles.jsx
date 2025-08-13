import React from 'react';
import FullContainer from '../../common/FullContainer';
import Container from '../../common/Container';
import Button from '../../ui/Button';
import { ArrowRightIcon, Calendar, Clock, User, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const BlogArticles = () => {
    const featuredArticles = [
        {
            id: 1,
            title: "10 Essential Web Design Principles for 2024",
            excerpt: "Discover the latest web design trends and principles that will help you create stunning, user-friendly websites that convert visitors into customers.",
            author: "Sarah Johnson",
            date: "March 15, 2024",
            readTime: "8 min read",
            category: "Design",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            featured: true
        },
        {
            id: 2,
            title: "How to Optimize Your Website for Better SEO Performance",
            excerpt: "Learn proven strategies to improve your website's search engine rankings and drive more organic traffic to your business.",
            author: "Mike Chen",
            date: "March 12, 2024",
            readTime: "12 min read",
            category: "SEO",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
        },
        {
            id: 3,
            title: "Building Scalable Websites: A Complete Guide",
            excerpt: "Explore best practices for creating websites that can grow with your business and handle increasing traffic demands.",
            author: "Emily Rodriguez",
            date: "March 10, 2024",
            readTime: "15 min read",
            category: "Development",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
        }
    ];

    const caseStudies = [
        {
            id: 1,
            title: "How TechCorp Increased Conversions by 300%",
            excerpt: "A detailed case study showing how TechCorp used Sitebuilderz to redesign their website and achieve remarkable business results.",
            company: "TechCorp",
            industry: "Technology",
            results: "300% increase in conversions",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
        },
        {
            id: 2,
            title: "E-commerce Success: Fashion Forward's Journey",
            excerpt: "Discover how Fashion Forward built a successful online store using Sitebuilderz's e-commerce features and optimization tools.",
            company: "Fashion Forward",
            industry: "E-commerce",
            results: "150% revenue growth",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
        }
    ];

    const howToGuides = [
        {
            id: 1,
            title: "Getting Started with Sitebuilderz: A Beginner's Guide",
            excerpt: "Step-by-step instructions for new users to create their first website with Sitebuilderz.",
            difficulty: "Beginner",
            timeRequired: "30 minutes",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
        },
        {
            id: 2,
            title: "Advanced Customization Techniques",
            excerpt: "Learn advanced techniques for customizing your website design and functionality.",
            difficulty: "Advanced",
            timeRequired: "2 hours",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
        },
        {
            id: 3,
            title: "Integrating Third-Party Tools and APIs",
            excerpt: "A comprehensive guide to integrating external services and APIs with your Sitebuilderz website.",
            difficulty: "Intermediate",
            timeRequired: "1 hour",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
        }
    ];

    return (
        <FullContainer className='py-16 bg-white'>
            <Container>
                {/* Featured Articles */}
                <div className='mb-16'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Featured Articles</h2>
                        <p className='text-gray-600 max-w-2xl mx-auto'>
                            Stay updated with the latest insights, trends, and best practices in web design and development.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                        {featuredArticles.map((article) => (
                            <div key={article.id} className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300'>
                                <div className='relative h-48'>
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className='object-cover'
                                    />
                                    {article.featured && (
                                        <div className='absolute top-4 left-4 bg-[#E24E28] text-white px-3 py-1 rounded-full text-sm font-semibold'>
                                            Featured
                                        </div>
                                    )}
                                </div>
                                <div className='p-6'>
                                    <div className='flex items-center gap-4 text-sm text-gray-500 mb-3'>
                                        <span className='bg-gray-100 px-2 py-1 rounded'>{article.category}</span>
                                        <div className='flex items-center gap-1'>
                                            <Calendar className='w-4 h-4' />
                                            {article.date}
                                        </div>
                                    </div>
                                    <h3 className='text-xl font-semibold mb-3 line-clamp-2'>{article.title}</h3>
                                    <p className='text-gray-600 mb-4 line-clamp-3'>{article.excerpt}</p>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-4 text-sm text-gray-500'>
                                            <div className='flex items-center gap-1'>
                                                <User className='w-4 h-4' />
                                                {article.author}
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <Clock className='w-4 h-4' />
                                                {article.readTime}
                                            </div>
                                        </div>
                                        <ArrowRightIcon className='w-4 h-4 text-[#E24E28]' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Case Studies */}
                <div className='mb-16'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Customer Success Stories</h2>
                        <p className='text-gray-600 max-w-2xl mx-auto'>
                            Real-world examples of how businesses achieve remarkable results with Sitebuilderz.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {caseStudies.map((study) => (
                            <div key={study.id} className='bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300'>
                                <div className='relative h-48'>
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                                <div className='p-6'>
                                    <div className='flex items-center gap-2 mb-3'>
                                        <span className='bg-[#E24E28] text-white px-3 py-1 rounded-full text-sm font-semibold'>
                                            {study.industry}
                                        </span>
                                    </div>
                                    <h3 className='text-xl font-semibold mb-3'>{study.title}</h3>
                                    <p className='text-gray-600 mb-4'>{study.excerpt}</p>
                                    <div className='flex items-center justify-between'>
                                        <div className='text-sm text-gray-500'>
                                            <strong className='text-[#E24E28]'>{study.results}</strong>
                                        </div>
                                        <Button className='px-4 py-2 text-sm'>
                                            Read Case Study
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* How-To Guides */}
                <div>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>How-To Guides</h2>
                        <p className='text-gray-600 max-w-2xl mx-auto'>
                            Step-by-step tutorials and guides to help you master Sitebuilderz and create amazing websites.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {howToGuides.map((guide) => (
                            <div key={guide.id} className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300'>
                                <div className='relative h-40'>
                                    <Image
                                        src={guide.image}
                                        alt={guide.title}
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                                <div className='p-6'>
                                    <div className='flex items-center gap-2 mb-3'>
                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                            guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                                            guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                            {guide.difficulty}
                                        </span>
                                        <span className='text-sm text-gray-500'>{guide.timeRequired}</span>
                                    </div>
                                    <h3 className='text-lg font-semibold mb-3'>{guide.title}</h3>
                                    <p className='text-gray-600 mb-4'>{guide.excerpt}</p>
                                    <div className='flex items-center gap-2 text-[#E24E28] font-semibold cursor-pointer hover:gap-3 transition-all duration-300'>
                                        <span>Read Guide</span>
                                        <ExternalLink className='w-4 h-4' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </FullContainer>
    );
};

export default BlogArticles; 