import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading2 from '../../ui/Heading2'
import Paragraph1 from '../../ui/Paragraph1'
import { Twitter, Linkedin, Facebook, Instagram, Youtube, Github } from 'lucide-react'

const SocialMedia = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/sitebuilderz',
      color: 'hover:bg-blue-500',
      description: 'Follow us for updates and tips'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/sitebuilderz',
      color: 'hover:bg-blue-600',
      description: 'Connect with our team'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/sitebuilderz',
      color: 'hover:bg-blue-700',
      description: 'Join our community'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/sitebuilderz',
      color: 'hover:bg-pink-500',
      description: 'See our latest work'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/sitebuilderz',
      color: 'hover:bg-red-500',
      description: 'Watch tutorials and demos'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/sitebuilderz',
      color: 'hover:bg-gray-800',
      description: 'Check out our open source'
    }
  ]

  return (
    <FullContainer className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <Heading2 className="mb-4 text-gray-900">
            Connect With Us
          </Heading2>
          <Paragraph1 className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, tips, and insights from the Sitebuilderz team. 
            Follow us on social media and join our growing community.
          </Paragraph1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${social.color}`}>
                  <social.icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#E24E28] transition-colors">
                  {social.name}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                  {social.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Join Our Newsletter
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Get the latest updates, tips, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E24E28] focus:border-transparent transition-all duration-200"
              />
              <button className="bg-[#E24E28] hover:bg-[#E86F50] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
}

export default SocialMedia 