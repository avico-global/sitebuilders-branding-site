import React, { useState } from 'react';
import FullContainer from '../../common/FullContainer';
import Container from '../../common/Container';
import Button from '../../ui/Button';
import { Calendar, Clock, Users, Video, ExternalLink, ArrowRightIcon, Play, MapPin, Tag } from 'lucide-react';
import Image from 'next/image';

const WebinarsEvents = () => {
    const [activeTab, setActiveTab] = useState('upcoming');

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
            registrationRequired: true
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
            registrationRequired: true
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
            registrationRequired: false
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
            slidesUrl: "#"
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
            slidesUrl: "#"
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
            slidesUrl: "#"
        }
    ];

    const eventTypes = [
        { id: 'all', label: 'All Events', count: upcomingEvents.length + pastEvents.length },
        { id: 'webinar', label: 'Webinars', count: 3 },
        { id: 'demo', label: 'Live Demos', count: 1 },
        { id: 'launch', label: 'Product Launches', count: 1 },
        { id: 'workshop', label: 'Workshops', count: 1 }
    ];

    return (
        <FullContainer className='py-16 bg-gray-50'>
            <Container>
                {/* Header */}
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4'>Webinars & Events</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        Join our live sessions, product launches, and educational webinars. Learn from experts, 
                        discover new features, and connect with the Sitebuilderz community.
                    </p>
                </div>

                {/* Event Type Filter */}
                <div className='flex flex-wrap justify-center gap-4 mb-8'>
                    {eventTypes.map((type) => (
                        <button
                            key={type.id}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeTab === type.id
                                    ? 'bg-[#E24E28] text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            {type.label} ({type.count})
                        </button>
                    ))}
                </div>

                {/* Tab Navigation */}
                <div className='flex justify-center mb-8'>
                    <div className='bg-white rounded-lg p-1 border border-gray-200'>
                        <button
                            onClick={() => setActiveTab('upcoming')}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                                activeTab === 'upcoming'
                                    ? 'bg-[#E24E28] text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Upcoming Events
                        </button>
                        <button
                            onClick={() => setActiveTab('past')}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                                activeTab === 'past'
                                    ? 'bg-[#E24E28] text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Past Events
                        </button>
                    </div>
                </div>

                {/* Events Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {activeTab === 'upcoming' ? (
                        upcomingEvents.map((event) => (
                            <div key={event.id} className='bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200'>
                                <div className='relative'>
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        width={400}
                                        height={250}
                                        className='w-full h-48 object-cover'
                                    />
                                    <div className='absolute top-4 left-4'>
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            event.type === 'Product Launch' 
                                                ? 'bg-purple-100 text-purple-800'
                                                : event.type === 'Live Demo'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-blue-100 text-blue-800'
                                        }`}>
                                            {event.type}
                                        </span>
                                    </div>
                                    {event.registrationRequired && (
                                        <div className='absolute top-4 right-4'>
                                            <span className='px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800'>
                                                Registration Required
                                            </span>
                                        </div>
                                    )}
                                </div>
                                
                                <div className='p-6'>
                                    <h3 className='text-xl font-semibold mb-3 line-clamp-2'>{event.title}</h3>
                                    <p className='text-gray-600 text-sm mb-4 line-clamp-3'>{event.description}</p>
                                    
                                    <div className='space-y-2 mb-4'>
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
                                    
                                    <Button className='w-full'>
                                        {event.registrationRequired ? 'Register Now' : 'Join Live'}
                                        <ArrowRightIcon className='w-4 h-4 ml-2' />
                                    </Button>
                                </div>
                            </div>
                        ))
                    ) : (
                        pastEvents.map((event) => (
                            <div key={event.id} className='bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200'>
                                <div className='relative'>
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        width={400}
                                        height={250}
                                        className='w-full h-48 object-cover'
                                    />
                                    <div className='absolute top-4 left-4'>
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            event.type === 'Workshop' 
                                                ? 'bg-green-100 text-green-800'
                                                : event.type === 'Technical Session'
                                                ? 'bg-purple-100 text-purple-800'
                                                : 'bg-blue-100 text-blue-800'
                                        }`}>
                                            {event.type}
                                        </span>
                                    </div>
                                    <div className='absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center'>
                                        <Play className='w-12 h-12 text-white' />
                                    </div>
                                </div>
                                
                                <div className='p-6'>
                                    <h3 className='text-xl font-semibold mb-3 line-clamp-2'>{event.title}</h3>
                                    <p className='text-gray-600 text-sm mb-4 line-clamp-3'>{event.description}</p>
                                    
                                    <div className='space-y-2 mb-4'>
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
                                    </div>
                                    
                                    <div className='flex gap-2'>
                                        <button className='flex-1 bg-white border border-gray-300 hover:bg-gray-50 transition-all duration-300 text-gray-700 px-4 py-2 rounded-sm flex items-center justify-center font-semibold'>
                                            <Play className='w-4 h-4 mr-2' />
                                            Watch Recording
                                        </button>
                                        <button className='flex-1 bg-white border border-gray-300 hover:bg-gray-50 transition-all duration-300 text-gray-700 px-4 py-2 rounded-sm flex items-center justify-center font-semibold'>
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
                <div className='text-center mt-12'>
                    <div className='bg-white rounded-lg p-8 border border-gray-200'>
                        <h3 className='text-2xl font-bold mb-4'>Stay Updated</h3>
                        <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
                            Never miss an important event! Subscribe to our newsletter to get notified about 
                            upcoming webinars, product launches, and exclusive workshops.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                            <input
                                type='email'
                                placeholder='Enter your email address'
                                className='px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E24E28] focus:border-transparent min-w-[300px]'
                            />
                            <Button>
                                Subscribe
                                <ArrowRightIcon className='w-4 h-4 ml-2' />
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </FullContainer>
    );
};

export default WebinarsEvents; 