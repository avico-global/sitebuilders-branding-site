import React from 'react'
import ProcessSection from '../../ui/VIdeoChanger'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading1 from '../../ui/Heading1'
import Button from '../../ui/Button'
import { ArrowRightIcon, Users, Globe, Zap, Shield, UserPlus, Sparkles, TrendingUp, Layers } from 'lucide-react'

const ScaleAndCollaborate = ({ id }) => {
  const data = [
    {
      title: "Scale Fast. Collaborate Smarter.",
      desc: "Empower your team to build, deploy, and grow together — no bottlenecks, just smooth collaboration.",
      buttonText: "Add Your Team Now",
      buttonLink: "#",
      videoSrc: "/videos/scale-collaboration.mp4",
      ebook: {
        show: false
      },
      videos: [
        { src: "/videos/scale-collaboration.mp4" },
        { src: "/videos/scale-collaboration2.mp4" },
        { src: "/videos/scale-collaboration3.mp4" },
        { src: "/videos/scale-collaboration4.mp4" },
        { src: "/videos/scale-collaboration5.mp4" },
      ]
    }
  ]

  const animationData = [
    {
      title: "Team Roles & Permissions",
      desc: "Invite team members and manage access with role-based controls. Set up custom permissions to ensure everyone has the right level of access.",
    },
    {
      title: "Multi-Site Management", 
      desc: "Handle multiple websites from a single dashboard — perfect for growing businesses. Manage all your sites, clients, and projects in one place.",
    },
    {
      title: "Real-Time Updates",
      desc: "Collaborate without friction. Changes sync instantly across your team with live preview and real-time collaboration features.",
    },
    {
      title: "Audit & Activity Logs",
      desc: "Stay in control with visibility into every action taken. Track changes, monitor team activity, and maintain compliance with detailed logs.",
    },
    {
      title: "Seamless Onboarding",
      desc: "Whether you're solo or scaling, SiteBuilderz grows with your workflow. Easy team setup and intuitive interfaces for everyone.",
    },
  ]

  return (
    <div id={id}>
      <ProcessSection theme="light" data={data} animationData={animationData} />
      <TeamFeaturesSection />
    </div>
  )
}

export default ScaleAndCollaborate

const TeamFeaturesSection = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Role-Based Access",
      description: "Control who can edit, publish, or manage your sites with granular permissions.",
      gradient: "from-[#E24E28] to-[#E86F50]",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Site Dashboard", 
      description: "Manage all your websites, clients, and projects from a single, unified interface.",
      gradient: "from-[#E24E28] via-[#E86F50] to-[#F97316]",
      bgGradient: "from-orange-50 via-red-50 to-orange-100"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-Time Sync",
      description: "See changes instantly across your team with live collaboration and version control.",
      gradient: "from-[#E24E28] to-[#F97316]",
      bgGradient: "from-red-50 to-orange-50"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Activity Tracking",
      description: "Monitor every action with comprehensive audit logs and activity reports.",
      gradient: "from-[#E24E28] via-[#E86F50] to-[#DC2626]",
      bgGradient: "from-orange-50 via-red-50 to-red-100"
    },
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "Easy Onboarding",
      description: "Get new team members up and running quickly with intuitive workflows.",
      gradient: "from-[#E24E28] to-[#E86F50]",
      bgGradient: "from-orange-50 to-red-50"
    }
  ]

  return (
    <FullContainer className='relative overflow-hidden'>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-orange-50/30" />
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#E24E28] rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#E86F50] rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#F97316] rounded-full blur-3xl" />
      </div>
      
      <Container className='py-20 relative z-10'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 bg-gradient-to-r from-[#E24E28] to-[#E86F50] text-white px-4 py-2 rounded-full text-sm font-medium mb-6'>
            <Sparkles className="w-4 h-4" />
            Team Collaboration
          </div>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
            Built for <span className='bg-gradient-to-r from-[#E24E28] to-[#E86F50] bg-clip-text text-transparent'>Teams</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Scale your workflow with powerful collaboration tools designed for modern teams
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#E24E28]/20 overflow-hidden`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Icon Container */}
              <div className='relative z-10 mb-6'>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className='relative z-10'>
                <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E24E28] transition-colors duration-300'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {feature.description}
                </p>
              </div>
              
              {/* Hover Effect */}
              <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E24E28] to-[#E86F50] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left' />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className='bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#E24E28] to-[#E86F50] rounded-2xl mx-auto mb-4'>
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className='text-3xl font-bold text-gray-900 mb-2'>10x</h3>
              <p className='text-gray-600'>Faster team onboarding</p>
            </div>
            <div className='text-center'>
              <div className='flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#E24E28] to-[#E86F50] rounded-2xl mx-auto mb-4'>
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className='text-3xl font-bold text-gray-900 mb-2'>Unlimited</h3>
              <p className='text-gray-600'>Team members & sites</p>
            </div>
            <div className='text-center'>
              <div className='flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#E24E28] to-[#E86F50] rounded-2xl mx-auto mb-4'>
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className='text-3xl font-bold text-gray-900 mb-2'>Real-time</h3>
              <p className='text-gray-600'>Collaboration & sync</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className='text-center'>
          <div className='inline-flex items-center gap-3 bg-gradient-to-r from-[#E24E28] to-[#E86F50] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
            <span className='font-semibold text-lg'>Add Your Team Now</span>
            <ArrowRightIcon className="w-5 h-5" />
          </div>
          <p className='text-gray-500 mt-4 text-sm'>
            Start collaborating with your team in minutes
          </p>
        </div>
      </Container>
    </FullContainer>
  )
}