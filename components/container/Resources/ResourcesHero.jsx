import React from 'react';
import FullContainer from '../../common/FullContainer';
import Container from '../../common/Container';
import Button from '../../ui/Button';
import { ArrowRightIcon, BookOpen, HelpCircle, FileText, Video, Library, GraduationCap, Lightbulb, Users, Globe, Code, Database, Search, Download, Share2, Calendar, Award, Zap, Target, TrendingUp } from 'lucide-react';
import Heading1 from '../../ui/Heading1';
import Link from 'next/link';

const ResourcesHero = () => {
    return (
        <FullContainer className='pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white'>
            <Container className="flex flex-row justify-between h-full">
                <div className=' lg:w-1/2 w-full h-full py-10 lg:translate-x-12 z-10'>

                    <div className='flex flex-col  items-center text-center bg-white rounded-lg p-10 shadow-lg'>
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
                    </div>
                </div>
                <div className='lg:w-1/2 hidden lg:block relative overflow-hidden rounded-2xl'>
                    {/* Modern gradient background */}
                    <div className='absolute inset-0 bg-gradient-to-br from-primary via-orange-500 to-red-500'></div>

                    {/* Geometric shapes overlay */}
                    <div className='absolute inset-0'>
                        <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl'></div>
                        <div className='absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-lg'></div>
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-2xl'></div>
                    </div>

                    {/* Floating geometric elements */}
                    <div className='absolute inset-0'>
                        <div className='absolute top-[20%] left-[15%] w-16 h-16 bg-white/10 rounded-2xl rotate-12 animate-float'></div>
                        <div className='absolute top-[60%] right-[20%] w-12 h-12 bg-white/8 rounded-full animate-bounce'></div>
                        <div className='absolute bottom-[25%] left-[25%] w-20 h-20 bg-white/6 rounded-3xl -rotate-12 animate-float-delayed'></div>
                        <div className='absolute top-[40%] right-[35%] w-8 h-8 bg-white/12 rounded-lg rotate-45 animate-pulse'></div>
                    </div>

                    {/* Modern icon grid with glassmorphism */}
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='grid grid-cols-3 gap-8 p-8'>
                            {/* Top row */}
                            <div className='group'>
                                <div className='bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/25 transition-all duration-500 hover:scale-110 hover:shadow-2xl'>
                                    <BookOpen className='w-8 h-8 text-white group-hover:animate-pulse' />
                                </div>
                            </div>
                            <div className='group'>
                                <div className='bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/25 transition-all duration-500 hover:scale-110 hover:shadow-2xl'>
                                    <Lightbulb className='w-8 h-8 text-white group-hover:animate-bounce' />
                                </div>
                            </div>
                            <div className='group'>
                                <div className='bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/25 transition-all duration-500 hover:scale-110 hover:shadow-2xl'>
                                    <Users className='w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300' />
                                </div>
                            </div>

                            {/* Middle row */}
                            <div className='group'>
                                <div className='bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/25 transition-all duration-500 hover:scale-110 hover:shadow-2xl'>
                                    <Database className='w-8 h-8 text-white group-hover:animate-pulse' />
                                </div>
                            </div>
                            <div className='group'>
                                <div className='bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 hover:bg-white/30 transition-all duration-500 hover:scale-110 hover:shadow-2xl'>
                                    <Search className='w-8 h-8 text-white group-hover:animate-bounce' />
                                </div>
                            </div>
                            <div className='group'>
                                <div className='bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/25 transition-all duration-500 hover:scale-110 hover:shadow-2xl'>
                                    <Download className='w-8 h-8 text-white group-hover:-translate-y-1 transition-transform duration-300' />
                                </div>
                            </div>

                            {/* Bottom row */}
                            <div className='group'>
                                <div className='bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/25 transition-all duration-500 hover:scale-110 hover:shadow-2xl'>
                                    <Share2 className='w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300' />
                                </div>
                            </div>
                            <div className='group'>
                                <div className='bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/25 transition-all duration-500 hover:scale-110 hover:shadow-2xl'>
                                    <Calendar className='w-8 h-8 text-white group-hover:animate-pulse' />
                                </div>
                            </div>
                            <div className='group'>
                                <div className='bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/25 transition-all duration-500 hover:scale-110 hover:shadow-2xl'>
                                    <Award className='w-8 h-8 text-white group-hover:animate-bounce' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Subtle accent icons */}
                    <div className='absolute top-[10%] right-[10%] animate-float'>
                        <Zap className='w-6 h-6 text-white/40' />
                    </div>
                    <div className='absolute bottom-[15%] left-[10%] animate-float-delayed'>
                        <Target className='w-5 h-5 text-white/35' />
                    </div>
                    <div className='absolute top-[80%] right-[15%] animate-bounce'>
                        <TrendingUp className='w-4 h-4 text-white/30' />
                    </div>
                </div>

            </Container>
            <Container>
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
            </Container>
        </FullContainer>
    );
};

export default ResourcesHero; 