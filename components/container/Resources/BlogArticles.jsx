import React, { useState } from 'react';
import FullContainer from '../../common/FullContainer';
import Container from '../../common/Container';
import Button from '../../ui/Button';
import { ArrowRightIcon, Calendar, Clock, User, ExternalLink, BookOpen, TrendingUp, Lightbulb, Zap } from 'lucide-react';
import Image from 'next/image';

const BlogArticles = () => {
    const [activeCategory, setActiveCategory] = useState('all');

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
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
            metrics: [
                { label: "Conversion Rate", value: "300%", change: "+250%" },
                { label: "Page Speed", value: "1.2s", change: "-60%" },
                { label: "Bounce Rate", value: "25%", change: "-45%" }
            ]
        },
        {
            id: 2,
            title: "E-commerce Success: Fashion Forward's Journey",
            excerpt: "Discover how Fashion Forward built a successful online store using Sitebuilderz's e-commerce features and optimization tools.",
            company: "Fashion Forward",
            industry: "E-commerce",
            results: "150% revenue growth",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
            metrics: [
                { label: "Revenue Growth", value: "150%", change: "+150%" },
                { label: "Average Order", value: "$85", change: "+40%" },
                { label: "Customer Retention", value: "78%", change: "+25%" }
            ]
        }
    ];

    const howToGuides = [
        {
            id: 1,
            title: "Getting Started with Sitebuilderz: A Beginner's Guide",
            excerpt: "Step-by-step instructions for new users to create their first website with Sitebuilderz.",
            difficulty: "Beginner",
            timeRequired: "30 minutes",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
            steps: 8,
            icon: <BookOpen className="w-6 h-6" />
        },
        {
            id: 2,
            title: "Advanced Customization Techniques",
            excerpt: "Learn advanced techniques for customizing your website design and functionality.",
            difficulty: "Advanced",
            timeRequired: "2 hours",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
            steps: 12,
            icon: <Zap className="w-6 h-6" />
        },
        {
            id: 3,
            title: "Integrating Third-Party Tools and APIs",
            excerpt: "A comprehensive guide to integrating external services and APIs with your Sitebuilderz website.",
            difficulty: "Intermediate",
            timeRequired: "1 hour",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
            steps: 6,
            icon: <Lightbulb className="w-6 h-6" />
        }
    ];

    const categories = [
        { id: 'all', label: 'All Articles', count: 8 },
        { id: 'design', label: 'Design', count: 3 },
        { id: 'seo', label: 'SEO', count: 2 },
        { id: 'development', label: 'Development', count: 2 },
        { id: 'ecommerce', label: 'E-commerce', count: 1 }
    ];

    return (
        <FullContainer className='py-16 bg-gray-50'>
            <Container>
                {/* Featured Articles - Hero Style */}
                <div className='mb-20'>
                    <div className='text-center mb-12'>
                        <div className='inline-flex items-center gap-2 bg-[#E24E28] text-white px-4 py-2 rounded-full text-sm font-medium mb-4'>
                            <TrendingUp className='w-4 h-4' />
                            Featured Content
                        </div>
                        <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900'>
                            Latest Insights & Trends
                        </h2>
                        <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
                            Stay updated with the latest insights, trends, and best practices in web design and development.
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className='flex flex-wrap justify-center gap-3 mb-12'>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeCategory === category.id
                                        ? 'bg-[#E24E28] text-white shadow-lg'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                                }`}
                            >
                                {category.label} ({category.count})
                            </button>
                        ))}
                    </div>

                    {/* Featured Articles Grid */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                        {featuredArticles.map((article, index) => (
                            <div key={article.id} className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                                index === 0 ? 'lg:col-span-2' : ''
                            }`}>
                                <div className='relative h-64 lg:h-80'>
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent' />
                                    {article.featured && (
                                        <div className='absolute top-4 left-4 bg-[#E24E28] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg'>
                                            Featured
                                        </div>
                                    )}
                                    <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium'>
                                        {article.category}
                                    </div>
                                </div>
                                <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                                    <div className='flex items-center gap-4 text-sm mb-3 opacity-90'>
                                        <div className='flex items-center gap-1'>
                                            <Calendar className='w-4 h-4' />
                                            {article.date}
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <Clock className='w-4 h-4' />
                                            {article.readTime}
                                        </div>
                                    </div>
                                    <h3 className='text-xl lg:text-2xl font-bold mb-3 line-clamp-2'>{article.title}</h3>
                                    <p className='text-gray-200 mb-4 line-clamp-2 opacity-90'>{article.excerpt}</p>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-2 text-sm opacity-90'>
                                            <User className='w-4 h-4' />
                                            {article.author}
                                        </div>
                                        <div className='bg-white/20 backdrop-blur-sm p-2 rounded-full group-hover:bg-white/30 transition-all duration-300'>
                                            <ArrowRightIcon className='w-4 h-4' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Case Studies - Interactive Cards */}
                <div className='mb-20'>
                    <div className='text-center mb-12'>
                        <div className='inline-flex items-center gap-2 bg-[#E24E28] text-white px-4 py-2 rounded-full text-sm font-medium mb-4'>
                            <TrendingUp className='w-4 h-4' />
                            Success Stories
                        </div>
                        <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900'>
                            Customer Success Stories
                        </h2>
                        <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
                            Real-world examples of how businesses achieve remarkable results with Sitebuilderz.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        {caseStudies.map((study) => (
                            <div key={study.id} className='group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2'>
                                <div className='relative h-64'>
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
                                    <div className='absolute top-4 left-4'>
                                        <span className='bg-[#E24E28] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg'>
                                            {study.industry}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className='p-8'>
                                    <h3 className='text-2xl font-bold mb-4 text-gray-900'>{study.title}</h3>
                                    <p className='text-gray-600 mb-6 leading-relaxed'>{study.excerpt}</p>
                                    
                                    {/* Metrics Display */}
                                    <div className='grid grid-cols-3 gap-4 mb-6'>
                                        {study.metrics.map((metric, index) => (
                                            <div key={index} className='text-center p-4 bg-gray-50 rounded-lg border border-gray-100'>
                                                <div className='text-2xl font-bold text-[#E24E28] mb-1'>{metric.value}</div>
                                                <div className='text-xs text-gray-500 mb-1'>{metric.label}</div>
                                                <div className='text-xs font-medium text-green-600'>{metric.change}</div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <Button className='w-full'>
                                        Read Full Case Study
                                        <ArrowRightIcon className='w-4 h-4 ml-2' />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* How-To Guides - Interactive Timeline Style */}
                <div>
                    <div className='text-center mb-12'>
                        <div className='inline-flex items-center gap-2 bg-[#E24E28] text-white px-4 py-2 rounded-full text-sm font-medium mb-4'>
                            <BookOpen className='w-4 h-4' />
                            Learning Resources
                        </div>
                        <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900'>
                            How-To Guides & Tutorials
                        </h2>
                        <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
                            Step-by-step tutorials and guides to help you master Sitebuilderz and create amazing websites.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {howToGuides.map((guide, index) => (
                            <div key={guide.id} className='group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2'>
                                <div className='relative h-48'>
                                    <Image
                                        src={guide.image}
                                        alt={guide.title}
                                        fill
                                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
                                    <div className='absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full'>
                                        {guide.icon}
                                    </div>
                                    <div className='absolute top-4 right-4'>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                            guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                                            guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                            {guide.difficulty}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className='p-6'>
                                    <div className='flex items-center justify-between mb-4'>
                                        <span className='text-sm text-gray-500 font-medium'>{guide.timeRequired}</span>
                                        <span className='text-sm text-gray-500 font-medium'>{guide.steps} steps</span>
                                    </div>
                                    
                                    <h3 className='text-xl font-bold mb-3 text-gray-900 group-hover:text-[#E24E28] transition-colors duration-300'>{guide.title}</h3>
                                    <p className='text-gray-600 mb-6 leading-relaxed'>{guide.excerpt}</p>
                                    
                                    <div className='flex items-center gap-2 text-[#E24E28] font-semibold cursor-pointer hover:gap-3 transition-all duration-300'>
                                        <span>Start Learning</span>
                                        <ExternalLink className='w-4 h-4' />
                                    </div>
                                </div>
                                
                                {/* Progress indicator */}
                                <div className='absolute bottom-0 left-0 right-0 h-1 bg-gray-100'>
                                    <div className='h-full bg-[#E24E28] w-0 group-hover:w-full transition-all duration-500'></div>
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