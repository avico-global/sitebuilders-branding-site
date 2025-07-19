import React, { useState } from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading2 from '../../ui/Heading2'
import { ChevronDownIcon, ChevronUpIcon, MessageCircle, BookOpen } from 'lucide-react'

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is Sitebuilderz and how is it different from other website builders?",
      answer: "Sitebuilderz is an all-in-one website platform that combines visual design tools, a powerful CMS, enterprise-grade hosting, and AI-powered features. Unlike traditional website builders, Sitebuilderz offers a visual-first approach with composable architecture, allowing teams to create sophisticated websites without sacrificing design flexibility or performance."
    },
    {
      question: "Do I need coding knowledge to use Sitebuilderz?",
      answer: "No coding knowledge is required to get started with Sitebuilderz. Our visual canvas allows designers and marketers to create stunning websites through drag-and-drop functionality. However, developers can extend functionality with custom code when needed, making it perfect for both no-code and low-code workflows."
    },
    {
      question: "What hosting features does Sitebuilderz provide?",
      answer: "Sitebuilderz offers enterprise-grade hosting with automatic backups, versioning, staging domains, password protection, branching capabilities, and localization support. Our platform securely processes tens of billions of page views monthly with built-in surge protection and custom security headers for enterprise users."
    },
    {
      question: "How does Sitebuilderz's CMS work?",
      answer: "Our visual-first CMS allows you to edit content directly on the design canvas with real-time previews. You can create and manage up to 20 CMS collections with 50 items on the free plan, and scale up with paid plans. The CMS integrates seamlessly with your design workflow, enabling content teams to publish without developer involvement."
    },
    {
      question: "What AI features are available in Sitebuilderz?",
      answer: "Sitebuilderz includes AI-powered tools like the AI Assistant for layout and component generation, AI-driven personalization for optimization, and intelligent content editing. These features help accelerate your workflow while maintaining brand consistency and design quality."
    },
    {
      question: "Can I use my own domain with Sitebuilderz?",
      answer: "Yes! The free Starter plan includes a Sitebuilderz.io domain, while paid plans allow you to connect custom domains. You can also set up subdirectories for localization (like .com/es/) to maintain domain authority across different markets."
    },
    {
      question: "How does Sitebuilderz handle team collaboration?",
      answer: "Sitebuilderz supports team collaboration through staging sites, guest access for clients, commenting systems, and edit modes. Workspace plans include multiple seats and allow for efficient content collaboration without creating bottlenecks in your workflow."
    },
    {
      question: "What analytics and optimization tools are included?",
      answer: "Sitebuilderz Analyze provides native visitor behavior insights, while Sitebuilderz Optimize offers A/B testing and AI-powered personalization tools. Built-in SEO controls help improve discoverability, and all data is unified for easy analysis and optimization."
    },
    {
      question: "Is Sitebuilderz suitable for e-commerce websites?",
      answer: "Yes, Sitebuilderz offers specialized e-commerce plans with features designed for online stores. These include product management, payment processing, inventory tracking, and e-commerce-specific hosting optimizations to ensure fast, secure shopping experiences."
    },
    {
      question: "What support options are available?",
      answer: "Free plan users get community support, while paid plans include priority support. Enterprise customers receive dedicated customer success managers, guaranteed SLAs, and enterprise-level support to ensure your success with the platform."
    },
    {
      question: "Can I export my code from Sitebuilderz?",
      answer: "Yes, Sitebuilderz offers code export capabilities on certain plans, allowing you to take your site code with you if needed. This gives you flexibility while still benefiting from our visual design tools and hosting infrastructure."
    },
    {
      question: "How does Sitebuilderz ensure website performance?",
      answer: "Sitebuilderz uses enterprise-grade hosting infrastructure with global CDN, automatic image optimization, and built-in performance monitoring. Our platform is designed to handle high traffic loads with surge protection and scalable bandwidth options."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <FullContainer className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#E24E28] to-[#E86F50] rounded-2xl mb-6 shadow-lg">
              <span className="text-2xl">❓</span>
            </div>
            <Heading2 className="mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Frequently Asked Questions
            </Heading2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about Sitebuilderz. Can't find the answer you're looking for? 
              Please reach out to our friendly support team.
            </p>
          </div>
          
          {/* FAQs Grid */}
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out ${
                  openIndex === index 
                    ? 'border-[#E24E28]/30 bg-white shadow-xl shadow-[#E24E28]/10' 
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg'
                }`}
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                  openIndex === index 
                    ? 'opacity-100' 
                    : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E24E28]/10 via-[#E86F50]/10 to-[#E24E28]/10"></div>
                </div>

                <button
                  className="relative w-full px-8 py-6 text-left flex justify-between items-start hover:bg-gray-50/50 transition-all duration-300 rounded-2xl"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex-1 pr-6">
                    <span className="font-semibold text-lg text-gray-900 leading-relaxed group-hover:text-[#E24E28] transition-colors duration-300">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                    openIndex === index 
                      ? 'bg-[#E24E28] text-white rotate-180' 
                      : 'bg-gray-100 text-gray-500 group-hover:bg-[#E24E28] group-hover:text-white'
                  }`}>
                    {openIndex === index ? (
                      <ChevronUpIcon className="w-5 h-5 transition-transform duration-300" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 transition-transform duration-300" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#E24E28] to-[#E86F50] mb-4 rounded-full"></div>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Our support team is here to help you get the most out of Sitebuilderz
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Contact Support
                  </button>
                  <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                    <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    View Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
}

export default FAQs