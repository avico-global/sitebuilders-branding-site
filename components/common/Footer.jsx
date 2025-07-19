import React from 'react'
import FullContainer from './FullContainer'
import Container from './Container'

const footerData = [
  {
    heading: 'PRODUCT',
    links: [
      'Platform', 'Design', 'Edit mode', 'Interactions', 'GSAP', 'Page building  NEW', 'Shared Libraries  NEW', 'CMS', 'Hosting', 'Localization', 'Security', 'Ecommerce', 'Analyze  NEW', 'Optimize  NEW', 'SEO', 'Sitebuilderz Cloud  BETA', 'DevLink  LABS', 'Figma to Sitebuilderz  LABS', 'Accessibility', 'AI'
    ]
  },
  {
    heading: 'SOLUTIONS',
    links: [
      'Enterprise', 'Startups', 'Global alliances', 'Agencies', 'Freelancers', 'Classrooms'
    ]
  },
  {
    heading: 'RESOURCES',
    links: [
      'University', 'Blog', 'Customer stories', 'Webinars and ebooks', 'Apps', 'Libraries', 'Templates', 'Developers', 'Made in Sitebuilderz', 'Glossary', 'Livestreams'
    ]
  },
  {
    heading: 'COMPANY',
    links: [
      'About', "Careers  WE'RE HIRING", 'Press', 'Sitebuilderz Ventures', 'Sitebuilderz Shop', 'Terms of Service', 'Privacy policy', 'Cookie policy', 'Cookie preferences', 'Accessibility statement', 'Sitemap'
    ]
  },
  {
    heading: 'COMMUNITY',
    links: [
      'Discover the community', 'Partner with Sitebuilderz', 'Certified Partners', 'Become a template designer', 'Become an affiliate', 'Become a Global Leader', 'Find a meetup near you'
    ]
  },
  {
    heading: 'GET HELP',
    links: [
      'Support', 'Pricing', 'Status', 'Forum', 'Wishlist'
    ]
  }
];

const Footer = () => {
  return (
    <FullContainer className="w-full bg-black text-gray-200">
      <Container className="container mx-auto py-16">
        <nav aria-label="Footer" className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-8">
            {footerData.map((section) => (
              <div key={section.heading} className="min-w-[140px]">
                <h4 className="text-white text-xs font-semibold tracking-wider mb-5 uppercase">{section.heading}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors duration-150 cursor-pointer focus:outline-none focus:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      </Container>
    </FullContainer>
  )
}

export default Footer 