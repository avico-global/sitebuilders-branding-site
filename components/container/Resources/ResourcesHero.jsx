import React from 'react';
import FullContainer from '../../common/FullContainer';
import Container from '../../common/Container';
import Button from '../../ui/Button';
import { ArrowRightIcon, BookOpen, HelpCircle, FileText, Video } from 'lucide-react';
import Heading1 from '../../ui/Heading1';
import Link from 'next/link';

const ResourcesHero = () => {
    return (
        <FullContainer className='pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white'>
            <Container>
                <div className='flex flex-col items-center text-center max-w-4xl mx-auto'>
                    <div className='flex flex-col justify-center mb-8'>
                        <h3 className='text-gray-500 tracking-2 uppercase mb-4'>Knowledge Hub
                        </h3>
                        <Heading1 className='mb-6'>
                            Everything You Need to <br /> Build Better Websites
                        </Heading1>
                    </div>
                    
                    <h5 className='text-gray-700 text-lg leading-6 mb-8 max-w-2xl'>
                        Discover educational content, case studies, and expert guidance to help you create, manage, and optimize your web experiences with Sitebuilderz.
                    </h5>

                    <div className='flex flex-col sm:flex-row gap-4 items-center'>
                        <Button className='px-6'>
                            <span>Start Learning</span>
                        </Button>
                        <div className='flex flex-row gap-2 items-center group cursor-pointer whitespace-nowrap'>
                            <span>Browse Documentation</span>
                            <ArrowRightIcon className='w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-2' />
                        </div>
                    </div>

                    {/* Quick Access Cards */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full'>
                        <div className='bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg'>
                            <BookOpen className='w-8 h-8 text-[#E24E28] mb-4' />
                            <h4 className='text-lg font-semibold mb-2'>Blog & Articles</h4>
                            <p className='text-gray-600 text-sm'>Educational content, case studies, and how-to guides</p>
                        </div>
                        <div className='bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg'>
                            <HelpCircle className='w-8 h-8 text-[#E24E28] mb-4' />
                            <h4 className='text-lg font-semibold mb-2'>FAQs</h4>
                            <p className='text-gray-600 text-sm'>Common questions and solutions to help you succeed</p>
                        </div>
                        <div className='bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg'>
                            <FileText className='w-8 h-8 text-[#E24E28] mb-4' />
                            <h4 className='text-lg font-semibold mb-2'>Documentation</h4>
                            <p className='text-gray-600 text-sm'>Comprehensive guides and technical resources</p>
                        </div>
                        <div className='bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg'>
                            <Video className='w-8 h-8 text-[#E24E28] mb-4' />
                            <h4 className='text-lg font-semibold mb-2'>Webinars & Events</h4>
                            <p className='text-gray-600 text-sm'>Live sessions, product launches, and educational webinars</p>
                        </div>
                    </div>
                </div>
            </Container>
        </FullContainer>
    );
};

export default ResourcesHero; 