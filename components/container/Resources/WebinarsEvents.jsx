import React, { useState } from 'react';
import FullContainer from '../../common/FullContainer';
import Container from '../../common/Container';
import Button from '../../ui/Button';
import { Calendar, Clock, Users, Video, ExternalLink, ArrowRightIcon, Play, MapPin, Tag, Bell, Star, TrendingUp, Zap, Live } from 'lucide-react';
import Image from 'next/image';

const WebinarsEvents = () => {
    const [activeTab, setActiveTab] = useState('upcoming');
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showRegistration, setShowRegistration] = useState(false);

    const upcomingEvents = [
        {
            id: 1,
            title: "Sitebuilderz 2024 Product Launch",
            description: "Join us for the biggest product launch of the year. Discover new features, improvements, and what's coming next for Sitebuilderz.",
            date: "March 28, 2024",
            time: "2:00 PM EST",
            duration: "90 minutes",
            attendees: "1,200+ registered",
            type: "Product Launch",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
            speaker: "Sarah Johnson, Product Director",
            isLive: false,
            registrationRequired: true,
            featured: true,
            tags: ["New Features", "Product Demo", "Q&A"]
        },
        {
            id: 2,
            title: "Advanced E-commerce Strategies Webinar",
            description: "Learn advanced techniques for optimizing your online store, from conversion optimization to customer retention strategies.",
            date: "April 5, 2024",
            time: "1:00 PM EST",
            duration: "60 minutes",
            attendees: "850+ registered",
            type: "Webinar",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
            speaker: "Mike Chen, E-commerce Expert",
            isLive: false,
            registrationRequired: true,
            featured: false,
            tags: ["E-commerce", "Conversion", "Strategy"]
        },
        {
            id: 3,
            title: "Live Demo: Building a Portfolio Site",
            description: "Watch our team build a professional portfolio website from scratch using Sitebuilderz. Ask questions in real-time!",
            date: "April 12, 2024",
            time: "3:00 PM EST",
            duration: "45 minutes",
            attendees: "500+ registered",
            type: "Live Demo",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            speaker: "Emily Rodriguez, Senior Designer",
            isLive: false,
            registrationRequired: false,
            featured: false,
            tags: ["Live Demo", "Portfolio", "Design"]
        }
    ];

    const pastEvents = [
        {
            id: 1,
            title: "SEO Masterclass: Ranking Your Website",
            description: "Comprehensive guide to SEO best practices, from keyword research to technical optimization.",
            date: "March 15, 2024",
            duration: "75 minutes",
            attendees: "1,500+ attended",
            type: "Webinar",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            speaker: "David Kim, SEO Specialist",
            recordingUrl: "#",
            slidesUrl: "#",
            rating: 4.9,
            views: "2,300+",
            tags: ["SEO", "Masterclass", "Ranking"]
        },
        {
            id: 2,
            title: "Design System Workshop",
            description: "Learn how to create and maintain a consistent design system for your website projects.",
            date: "March 8, 2024",
            duration: "120 minutes",
            attendees: "800+ attended",
            type: "Workshop",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
            speaker: "Lisa Wang, Design Lead",
            recordingUrl: "#",
            slidesUrl: "#",
            rating: 4.8,
            views: "1,800+",
            tags: ["Design", "Workshop", "System"]
        },
        {
            id: 3,
            title: "API Integration Deep Dive",
            description: "Technical session covering advanced API integrations and custom development with Sitebuilderz.",
            date: "March 1, 2024",
            duration: "90 minutes",
            attendees: "600+ attended",
            type: "Technical Session",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
            speaker: "Alex Thompson, Senior Developer",
            recordingUrl: "#",
            slidesUrl: "#",
            rating: 4.7,
            views: "1,200+",
            tags: ["API", "Technical", "Integration"]
        }
    ];

    const eventTypes = [
        { id: 'all', label: 'All Events', count: upcomingEvents.length + pastEvents.length, icon: <Calendar className="w-4 h-4" /> },
        { id: 'webinar', label: 'Webinars', count: 3, icon: <Video className="w-4 h-4" /> },
        { id: 'demo', label: 'Live Demos', count: 1, icon: <Play className="w-4 h-4" /> },
        { id: 'launch', label: 'Product Launches', count: 1, icon: <Zap className="w-4 h-4" /> },
        { id: 'workshop', label: 'Workshops', count: 1, icon: <TrendingUp className="w-4 h-4" /> }
    ];

    const handleEventClick = (event) => {
        setSelectedEvent(event);
        if (event.registrationRequired) {
            setShowRegistration(true);
        }
    };

    return (
        <FullContainer className='py-16 bg-gray-50'>
            <Container>
                {/* Header */}
                <div className='text-center mb-12'>
                    <div className='inline-flex items-center gap-2 bg-[#E24E28] text-white px-4 py-2 rounded-full text-sm font-medium mb-4'>
                        <Video className='w-4 h-4' />
                        Live Events
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900'>
                        Webinars & Events
                    </h2>
                    <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
                        Join our live sessions, product launches, and educational webinars. Learn from experts, 
                        discover new features, and connect with the Sitebuilderz community.
                    </p>
                </div>

                {/* Event Type Filter */}
                <div className='flex flex-wrap justify-center gap-4 mb-8'>
                    {eventTypes.map((type) => (
                        <button
                            key={type.id}
                            className='flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                        >
                            {type.icon}
                            <span>{type.label}</span>
                            <span className='bg-gray-100 px-2 py-1 rounded-full text-xs'>{type.count}</span>
                        </button>
                    ))}
                </div>

                {/* Tab Navigation */}
                <div className='flex justify-center mb-12'>
                    <div className='bg-white rounded-lg p-2 border border-gray-200 shadow-sm'>
                        <button
                            onClick={() => setActiveTab('upcoming')}
                            className={`px-8 py-3 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                                activeTab === 'upcoming'
                                    ? 'bg-[#E24E28] text-white shadow-lg'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            <Calendar className='w-4 h-4' />
                            Upcoming Events
                        </button>
                        <button
                            onClick={() => setActiveTab('past')}
                            className={`px-8 py-3 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                                activeTab === 'past'
                                    ? 'bg-[#E24E28] text-white shadow-lg'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            <Play className='w-4 h-4' />
                            Past Events
                        </button>
                    </div>
                </div>

                {/* Events Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {activeTab === 'upcoming' ? (
                        upcomingEvents.map((event, index) => (
                            <div key={event.id} className={`group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                                event.featured ? 'ring-4 ring-[#E24E28]' : ''
                            }`}>
                                <div className='relative h-64'>
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent' />
                                    
                                    {/* Event Type Badge */}
                                    <div className='absolute top-4 left-4'>
                                        <span className='bg-[#E24E28] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg'>
                                            {event.type}
                                        </span>
                                    </div>

                                    {/* Featured Badge */}
                                    {event.featured && (
                                        <div className='absolute top-4 right-4'>
                                            <span className='bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1'>
                                                <Star className='w-3 h-3 fill-current' />
                                                Featured
                                            </span>
                                        </div>
                                    )}

                                    {/* Registration Required Badge */}
                                    {event.registrationRequired && (
                                        <div className='absolute bottom-4 left-4'>
                                            <span className='bg-[#E24E28] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg'>
                                                Registration Required
                                            </span>
                                        </div>
                                    )}
                                </div>
                                
                                <div className='p-6'>
                                    {/* Tags */}
                                    <div className='flex flex-wrap gap-2 mb-4'>
                                        {event.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className='bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium'>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className='text-xl font-bold mb-3 text-gray-900 group-hover:text-[#E24E28] transition-colors duration-300 line-clamp-2'>{event.title}</h3>
                                    <p className='text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed'>{event.description}</p>
                                    
                                    <div className='space-y-3 mb-6'>
                                        <div className='flex items-center text-sm text-gray-500'>
                                            <Calendar className='w-4 h-4 mr-2' />
                                            {event.date} at {event.time}
                                        </div>
                                        <div className='flex items-center text-sm text-gray-500'>
                                            <Clock className='w-4 h-4 mr-2' />
                                            {event.duration}
                                        </div>
                                        <div className='flex items-center text-sm text-gray-500'>
                                            <Users className='w-4 h-4 mr-2' />
                                            {event.attendees}
                                        </div>
                                        <div className='flex items-center text-sm text-gray-500'>
                                            <Video className='w-4 h-4 mr-2' />
                                            {event.speaker}
                                        </div>
                                    </div>
                                    
                                    <Button 
                                        className='w-full'
                                        onClick={() => handleEventClick(event)}
                                    >
                                        {event.registrationRequired ? 'Register Now' : 'Join Live'}
                                        <ArrowRightIcon className='w-4 h-4 ml-2' />
                                    </Button>
                                </div>

                                {/* Hover overlay */}
                                <div className='absolute inset-0 bg-[#E24E28]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <div className='text-white text-center'>
                                        <Calendar className='w-8 h-8 mx-auto mb-2' />
                                        <span className='font-semibold'>View Details</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        pastEvents.map((event) => (
                            <div key={event.id} className='group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer'>
                                <div className='relative h-64'>
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent' />
                                    
                                    {/* Event Type Badge */}
                                    <div className='absolute top-4 left-4'>
                                        <span className='bg-[#E24E28] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg'>
                                            {event.type}
                                        </span>
                                    </div>

                                    {/* Play Button Overlay */}
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <div className='w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                            <Play className='w-8 h-8 text-[#E24E28] ml-1' />
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className='absolute bottom-4 right-4 bg-black/75 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1'>
                                        <Star className='w-3 h-3 text-yellow-400 fill-current' />
                                        {event.rating}
                                    </div>
                                </div>
                                
                                <div className='p-6'>
                                    {/* Tags */}
                                    <div className='flex flex-wrap gap-2 mb-4'>
                                        {event.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className='bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium'>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className='text-xl font-bold mb-3 text-gray-900 group-hover:text-[#E24E28] transition-colors duration-300 line-clamp-2'>{event.title}</h3>
                                    <p className='text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed'>{event.description}</p>
                                    
                                    <div className='space-y-3 mb-6'>
                                        <div className='flex items-center text-sm text-gray-500'>
                                            <Calendar className='w-4 h-4 mr-2' />
                                            {event.date}
                                        </div>
                                        <div className='flex items-center text-sm text-gray-500'>
                                            <Clock className='w-4 h-4 mr-2' />
                                            {event.duration}
                                        </div>
                                        <div className='flex items-center text-sm text-gray-500'>
                                            <Users className='w-4 h-4 mr-2' />
                                            {event.attendees}
                                        </div>
                                        <div className='flex items-center text-sm text-gray-500'>
                                            <Video className='w-4 h-4 mr-2' />
                                            {event.speaker}
                                        </div>
                                        <div className='flex items-center text-sm text-gray-500'>
                                            <Play className='w-4 h-4 mr-2' />
                                            {event.views} views
                                        </div>
                                    </div>
                                    
                                    <div className='flex gap-2'>
                                        <button className='flex-1 bg-white border border-gray-300 hover:bg-gray-50 transition-all duration-300 text-gray-700 px-4 py-3 rounded-lg flex items-center justify-center font-semibold group-hover:border-[#E24E28]'>
                                            <Play className='w-4 h-4 mr-2' />
                                            Watch Recording
                                        </button>
                                        <button className='flex-1 bg-white border border-gray-300 hover:bg-gray-50 transition-all duration-300 text-gray-700 px-4 py-3 rounded-lg flex items-center justify-center font-semibold group-hover:border-[#E24E28]'>
                                            <ExternalLink className='w-4 h-4 mr-2' />
                                            View Slides
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Call to Action */}
                <div className='text-center mt-16'>
                    <div className='bg-[#E24E28] rounded-3xl p-8 text-white'>
                        <div className='max-w-2xl mx-auto'>
                            <div className='flex items-center justify-center gap-3 mb-4'>
                                <Bell className='w-8 h-8' />
                                <h3 className='text-2xl font-bold'>Stay Updated</h3>
                            </div>
                            <p className='text-lg mb-6 opacity-90'>
                                Never miss an important event! Subscribe to our newsletter to get notified about 
                                upcoming webinars, product launches, and exclusive workshops.
                            </p>
                            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                                <input
                                    type='email'
                                    placeholder='Enter your email address'
                                    className='px-6 py-4 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent min-w-[300px] bg-white/10 backdrop-blur-sm text-white placeholder-white/70'
                                />
                                <Button className='!bg-white !text-[#E24E28] hover:bg-gray-100 flex items-center justify-center transition-colors duration-200 px-6 py-4 rounded-2xl font-semibold'>
                                    Subscribe
                                    <ArrowRightIcon className='w-4 h-4 ml-2' />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </FullContainer>
    );
};

export default WebinarsEvents; 